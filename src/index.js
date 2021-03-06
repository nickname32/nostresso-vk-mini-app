import '@vkontakte/vkui/dist/vkui.css'

import React, {
	useState,
	useEffect,
} from 'react'
import ReactDOM from 'react-dom'

import {
	ConfigProvider,
	AdaptivityProvider,
	AppRoot,
	Tabbar,
	Epic,
	TabbarItem,
} from '@vkontakte/vkui'

import {
	Icon28FavoriteOutline,
	Icon28MessagesOutline,
	Icon28SearchOutline,
	Icon28TicketOutline,
} from '@vkontakte/icons'

import vkBridge from '@vkontakte/vk-bridge'

import {
	Coffeehouses,
	Favorites,
} from './views'

import router from './router'

function App() {
	const [scheme, setScheme] = useState(null)

	const [activeStory, setActiveStory] = useState('coffeehouses')

	useEffect(() => {
		const routerUnsubscribe = router.subscribe(({ toState }) => {
			let routerStatePage = toState.page

			let index = routerStatePage.indexOf('.')
			if (index !== -1) {
				routerStatePage = routerStatePage.substring(0, index)
			}

			setActiveStory(routerStatePage)
		})

		const themeUpdateHandler = ({ detail: { type, data } }) => {
			if (type !== 'VKWebAppUpdateConfig') {
				return
			}

			setScheme(data.scheme)
		}
		vkBridge.subscribe(themeUpdateHandler)

		vkBridge.send('VKWebAppInit')

		return () => {
			routerUnsubscribe()
			vkBridge.unsubscribe(themeUpdateHandler)
		}
	}, [])

	return (
		<ConfigProvider scheme={scheme}>
			<AdaptivityProvider>
				<AppRoot>
					<Epic
						activeStory={activeStory}
						tabbar={<Tabbar>
							<TabbarItem
								onClick={() => router.go('coffeehouses')}
								selected={activeStory.indexOf('coffeehouses') === 0}
								text="Кофейни"
							><Icon28SearchOutline /></TabbarItem>
							<TabbarItem
								onClick={() => router.go('favorites')}
								selected={activeStory.indexOf('favorites') === 0}
								text="Избранное"
							><Icon28FavoriteOutline /></TabbarItem>
							<TabbarItem
								onClick={() => router.go('orders')}
								selected={activeStory.indexOf('orders') === 0}
								text="Заказы"
							><Icon28TicketOutline /></TabbarItem>
							<TabbarItem
								onClick={() => router.go('support')}
								selected={activeStory.indexOf('support') === 0}
								text="Поддержка"
							><Icon28MessagesOutline /></TabbarItem>
						</Tabbar>}
					>
						<Coffeehouses id="coffeehouses" />
						<Favorites id="favorites" />
					</Epic>
				</AppRoot>
			</AdaptivityProvider>
		</ConfigProvider>
	)
}

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
)
