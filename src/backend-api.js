function getCoffeehouses() {
    return new Promise((resolve, reject) => {
        resolve([{
            name: 'Название кофейни 1',
            address: 'Адрес кофейни 1',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.cLgUxNF8eljza6H1GqNYlQHaFj%26pid%3DApi&f=1',
            coordinates: [59.9370000, 30.3141300]
        }, {
            name: 'Название кофейни 2',
            address: 'Адрес кофейни 2',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.cLgUxNF8eljza6H1GqNYlQHaFj%26pid%3DApi&f=1',
            coordinates: [59.9300000, 30.3141300]
        }, {
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
            title: 'Эспрессо 1',
            subtitle: '100-240 мл., натуральные зёрна',
            description: 'Зёрна из бразилии действительно правильной обжарки и красивый рисунок на пенке выполненняющийся проффесиональными баристами.',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.xXEZfA4a9huYl-Oj3PmXOQHaID%26pid%3DApi&f=1',
            price: 120,
            options: [
                {
                    title: 'Объём',
                    multiple: false,
                    values: [{
                        title: '100 мл.',
                        price: 120,
                    }, {
                        title: '140 мл.',
                        price: 180,
                    }, {
                        title: '240 мл',
                        price: 220,
                    }]
                }, {
                    title: 'Молоко',
                    multiple: false,
                    values: [{
                        title: 'Овсяное',
                        price: 0
                    }, {
                        title: 'Коровье',
                        price: 0,
                    }]
                }, {
                    title: 'Дополнения',
                    multiple: true,
                    values: [{
                        title: 'Карамель',
                        price: 40,
                    }, {
                        title: 'Зефир',
                        price: 60,
                    }]
                }
            ],
        }, {
            id: 2,
            title: 'Эспрессо 2',
            subtitle: '100-240 мл., натуральные зёрна',
            description: 'Зёрна из бразилии действительно правильной обжарки и красивый рисунок на пенке выполненняющийся проффесиональными баристами.',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.xXEZfA4a9huYl-Oj3PmXOQHaID%26pid%3DApi&f=1',
            price: 120,
            options: [
                {
                    title: 'Объём',
                    multiple: false,
                    values: [{
                        title: '100 мл.',
                        price: 120,
                    }, {
                        title: '140 мл.',
                        price: 180,
                    }, {
                        title: '240 мл',
                        price: 220,
                    }]
                }, {
                    title: 'Молоко',
                    multiple: false,
                    values: [{
                        title: 'Овсяное',
                        price: 0
                    }, {
                        title: 'Коровье',
                        price: 0,
                    }]
                }, {
                    title: 'Дополнения',
                    multiple: true,
                    values: [{
                        title: 'Карамель',
                        price: 40,
                    }, {
                        title: 'Зефир',
                        price: 60,
                    }]
                }
            ],
        }, {
            id: 3,
            title: 'Эспрессо 3',
            subtitle: '100-240 мл., натуральные зёрна',
            description: 'Зёрна из бразилии действительно правильной обжарки и красивый рисунок на пенке выполненняющийся проффесиональными баристами.',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.xXEZfA4a9huYl-Oj3PmXOQHaID%26pid%3DApi&f=1',
            price: 120,
            options: [
                {
                    title: 'Объём',
                    multiple: false,
                    values: [{
                        title: '100 мл.',
                        price: 120,
                    }, {
                        title: '140 мл.',
                        price: 180,
                    }, {
                        title: '240 мл',
                        price: 220,
                    }]
                }, {
                    title: 'Молоко',
                    multiple: false,
                    values: [{
                        title: 'Овсяное',
                        price: 0
                    }, {
                        title: 'Коровье',
                        price: 0,
                    }]
                }, {
                    title: 'Дополнения',
                    multiple: true,
                    values: [{
                        title: 'Карамель',
                        price: 40,
                    }, {
                        title: 'Зефир',
                        price: 60,
                    }]
                }
            ],
        }, {
            id: 4,
            title: 'Эспрессо 4',
            subtitle: '100-240 мл., натуральные зёрна',
            description: 'Зёрна из бразилии действительно правильной обжарки и красивый рисунок на пенке выполненняющийся проффесиональными баристами.',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.xXEZfA4a9huYl-Oj3PmXOQHaID%26pid%3DApi&f=1',
            price: 120,
            options: [
                {
                    title: 'Объём',
                    multiple: false,
                    values: [{
                        title: '100 мл.',
                        price: 120,
                    }, {
                        title: '140 мл.',
                        price: 180,
                    }, {
                        title: '240 мл',
                        price: 220,
                    }]
                }, {
                    title: 'Молоко',
                    multiple: false,
                    values: [{
                        title: 'Овсяное',
                        price: 0
                    }, {
                        title: 'Коровье',
                        price: 0,
                    }]
                }, {
                    title: 'Дополнения',
                    multiple: true,
                    values: [{
                        title: 'Карамель',
                        price: 40,
                    }, {
                        title: 'Зефир',
                        price: 60,
                    }]
                }
            ],
        }, {
            id: 5,
            title: 'Эспрессо 5',
            subtitle: '100-240 мл., натуральные зёрна',
            description: 'Зёрна из бразилии действительно правильной обжарки и красивый рисунок на пенке выполненняющийся проффесиональными баристами.',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.xXEZfA4a9huYl-Oj3PmXOQHaID%26pid%3DApi&f=1',
            price: 120,
            options: [
                {
                    title: 'Объём',
                    multiple: false,
                    values: [{
                        title: '100 мл.',
                        price: 120,
                    }, {
                        title: '140 мл.',
                        price: 180,
                    }, {
                        title: '240 мл',
                        price: 220,
                    }]
                }, {
                    title: 'Молоко',
                    multiple: false,
                    values: [{
                        title: 'Овсяное',
                        price: 0
                    }, {
                        title: 'Коровье',
                        price: 0,
                    }]
                }, {
                    title: 'Дополнения',
                    multiple: true,
                    values: [{
                        title: 'Карамель',
                        price: 40,
                    }, {
                        title: 'Зефир',
                        price: 60,
                    }]
                }
            ],
        }, {
            id: 6,
            title: 'Эспрессо 6',
            subtitle: '100-240 мл., натуральные зёрна',
            description: 'Зёрна из бразилии действительно правильной обжарки и красивый рисунок на пенке выполненняющийся проффесиональными баристами.',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.xXEZfA4a9huYl-Oj3PmXOQHaID%26pid%3DApi&f=1',
            price: 120,
            options: [
                {
                    title: 'Объём',
                    multiple: false,
                    values: [{
                        title: '100 мл.',
                        price: 120,
                    }, {
                        title: '140 мл.',
                        price: 180,
                    }, {
                        title: '240 мл',
                        price: 220,
                    }]
                }, {
                    title: 'Молоко',
                    multiple: false,
                    values: [{
                        title: 'Овсяное',
                        price: 0
                    }, {
                        title: 'Коровье',
                        price: 0,
                    }]
                }, {
                    title: 'Дополнения',
                    multiple: true,
                    values: [{
                        title: 'Карамель',
                        price: 40,
                    }, {
                        title: 'Зефир',
                        price: 60,
                    }]
                }
            ],
        }, {
            id: 7,
            title: 'Эспрессо 7',
            subtitle: '100-240 мл., натуральные зёрна',
            description: 'Зёрна из бразилии действительно правильной обжарки и красивый рисунок на пенке выполненняющийся проффесиональными баристами.',
            image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.xXEZfA4a9huYl-Oj3PmXOQHaID%26pid%3DApi&f=1',
            price: 120,
            options: [
                {
                    title: 'Объём',
                    multiple: false,
                    values: [{
                        title: '100 мл.',
                        price: 120,
                    }, {
                        title: '140 мл.',
                        price: 180,
                    }, {
                        title: '240 мл',
                        price: 220,
                    }]
                }, {
                    title: 'Молоко',
                    multiple: false,
                    values: [{
                        title: 'Овсяное',
                        price: 0
                    }, {
                        title: 'Коровье',
                        price: 0,
                    }]
                }, {
                    title: 'Дополнения',
                    multiple: true,
                    values: [{
                        title: 'Карамель',
                        price: 40,
                    }, {
                        title: 'Зефир',
                        price: 60,
                    }]
                }
            ],
        }])
    })
}

export {
    getCoffeehouses,
    getCoffeehouseMenu,
}
