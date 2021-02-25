function getCoffeehouses() {
    return new Promise((resolve, reject) => {
        resolve([{
            id: 1,
            name: 'Название кофейни 1',
            address: 'Адрес кофейни 1',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.cLgUxNF8eljza6H1GqNYlQHaFj%26pid%3DApi&f=1',
            coordinates: [59.9370000, 30.3141300]
        }, {
            id: 2,
            name: 'Название кофейни 2',
            address: 'Адрес кофейни 2',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.cLgUxNF8eljza6H1GqNYlQHaFj%26pid%3DApi&f=1',
            coordinates: [59.9300000, 30.3141300]
        }, {
            id: 3,
            name: 'Название кофейни 3',
            address: 'Адрес кофейни 3',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.cLgUxNF8eljza6H1GqNYlQHaFj%26pid%3DApi&f=1',
            coordinates: [59.9387000, 30.3100000]
        }])
    })
}

function getCoffeehouseMenu(id) {
    return new Promise((resolve, reject) => {
        resolve([{
            id: 1,
            name: 'Эспрессо 1',
            volume: 100,
            description: 'Описание кофе',
            price: 120,
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.xXEZfA4a9huYl-Oj3PmXOQHaID%26pid%3DApi&f=1',
        }, {
            id: 2,
            name: 'Эспрессо 2',
            volume: 100,
            description: 'Описание кофе',
            price: 120,
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.xXEZfA4a9huYl-Oj3PmXOQHaID%26pid%3DApi&f=1',
        }, {
            id: 3,
            name: 'Эспрессо 3',
            volume: 100,
            description: 'Описание кофе',
            price: 120,
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.xXEZfA4a9huYl-Oj3PmXOQHaID%26pid%3DApi&f=1',
        }, {
            id: 4,
            name: 'Эспрессо 4',
            volume: 100,
            description: 'Описание кофе',
            price: 120,
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.xXEZfA4a9huYl-Oj3PmXOQHaID%26pid%3DApi&f=1',
        }, {
            id: 5,
            name: 'Эспрессо 5',
            volume: 100,
            description: 'Описание кофе',
            price: 120,
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.xXEZfA4a9huYl-Oj3PmXOQHaID%26pid%3DApi&f=1',
        }, {
            id: 6,
            name: 'Эспрессо 6',
            volume: 100,
            description: 'Описание кофе',
            price: 120,
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.xXEZfA4a9huYl-Oj3PmXOQHaID%26pid%3DApi&f=1',
        }, {
            id: 7,
            name: 'Эспрессо 7',
            volume: 100,
            description: 'Описание кофе',
            price: 120,
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.xXEZfA4a9huYl-Oj3PmXOQHaID%26pid%3DApi&f=1',
        }])
    })
}

export {
    getCoffeehouses,
    getCoffeehouseMenu,
}