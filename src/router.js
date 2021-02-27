import {
    createNavigator,
} from '@vkontakte/router'

// коллекция маршрутов
// каждый name должен быть уникальным по всём дереве
const routes = [
    {
        name: 'coffeehouses',
        children: [
            { name: 'coffeehouses.selection' },
            { name: 'coffeehouses.order' },
            { name: 'coffeehouses.order_add_item', subRoute: true },
        ]
    },
    {
        name: 'favorites',
    },
    {
        name: 'orders',
    },
    {
        name: 'support',
    },
]

const config = {
    defaultRoute: 'coffeehouses',
    preserveHash: true,
    errorLogger: console.error,
}

const router = createNavigator(routes, config)

router.start()

export default router
