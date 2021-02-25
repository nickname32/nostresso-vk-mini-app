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

function App() {
	const [activeStory, setActiveStory] = useState("coffeehouses")
	const [scheme, setScheme] = useState(null)

	useEffect(() => {
		const handler = ({ detail: { type, data } }) => {
			if (type !== 'VKWebAppUpdateConfig') {
				return
			}

			setScheme(data.scheme)
		}
		vkBridge.subscribe(handler)

		vkBridge.send('VKWebAppInit')

		return () => { vkBridge.unsubscribe(handler) }
	}, [])

	return (
		<ConfigProvider scheme={scheme}>
			<AdaptivityProvider>
				<AppRoot>
					<Epic
						activeStory={activeStory}
						tabbar={<Tabbar>
							<TabbarItem
								onClick={() => setActiveStory('coffeehouses')}
								selected={activeStory === 'coffeehouses'}
								text="Кофейни"
							><Icon28SearchOutline /></TabbarItem>
							<TabbarItem
								onClick={() => setActiveStory('favorites')}
								selected={activeStory === 'favorites'}
								text="Избранное"
							><Icon28FavoriteOutline /></TabbarItem>
							<TabbarItem
								onClick={() => setActiveStory('orders')}
								selected={activeStory === 'orders'}
								text="Заказы"
							><Icon28TicketOutline /></TabbarItem>
							<TabbarItem
								onClick={() => setActiveStory('support')}
								selected={activeStory === 'support'}
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
