import {
    useEffect,
    useState,
} from 'react'

import PropTypes from 'prop-types'

import {
    Button,
    CardGrid,
    ContentCard,
    Div,
    FixedLayout,
    Group,
    Panel,
    PanelHeader,
} from '@vkontakte/vkui'

import {
    Icon24AddOutline, Icon24ArrowUturnLeftOutline,
} from '@vkontakte/icons'

import {
    getCoffeehouseMenu,
} from '../../backend-api'

import router from '../../router'

function Menu({ id, userOrder, setUserOrder }) {
    const [menuItems, setMenuItems] = useState([])

    useEffect(() => {
        const fetchMenu = async () => {
            setMenuItems(await getCoffeehouseMenu())
        }
        fetchMenu()
    }, [])

    return (
        <Panel id={id}>
            <PanelHeader>Меню кофейни</PanelHeader>

            <Group>
                <CardGrid
                    size="m"
                    style={{ paddingBottom: 72 }}
                >
                    {menuItems.map(item => (
                        <ContentCard
                            key={item.title}
                            disabled
                            image={item.image}
                            subtitle={item.subtitle}
                            header={item.title}
                            text={`${item.price}₽`}
                            caption={<div style={{ display: 'flex' }}>
                                <Button
                                    stretched
                                    mode="secondary"
                                    size="m"
                                    before={<Icon24AddOutline />}
                                    onClick={() => {
                                        router.go('coffeehouses.order_add_item', { item: item })
                                    }}
                                />
                                {(() => {
                                    let count = 0
                                    userOrder.forEach(orderItem => {
                                        if (orderItem.title === item.title) {
                                            count++
                                        }
                                    })

                                    if (count === 0) {
                                        return null
                                    }

                                    return (
                                        <Button
                                            style={{ marginLeft: 8 }}
                                            stretched
                                            mode="secondary"
                                            size="m"
                                            before={<Icon24ArrowUturnLeftOutline />}
                                            onClick={() => {
                                                let lastIndex = -1
                                                userOrder.forEach((orderItem, orderItemIndex) => {
                                                    if (orderItem.title === item.title) {
                                                        lastIndex = orderItemIndex
                                                    }
                                                })

                                                if (lastIndex === -1) {
                                                    return
                                                }

                                                setUserOrder([...userOrder.slice(0, lastIndex), ...userOrder.slice(lastIndex + 1)])
                                            }}
                                        >{count}</Button>
                                    )
                                })()}
                            </div>}
                            maxHeight={144}
                        />
                    ))}
                </CardGrid>

                <FixedLayout
                    filled
                    vertical="bottom"
                >
                    <Div>
                        {(() => {
                            let summaryPrice = 0

                            userOrder.forEach(({ options }) => {
                                options.forEach(({ selectedValues }) => {
                                    selectedValues.forEach(({ price }) => {
                                        summaryPrice += price
                                    })
                                })
                            })

                            return (
                                <Button
                                    stretched
                                    size="l"
                                    disabled={summaryPrice === 0}
                                    onClick={() => router.go('coffeehouses.order')}
                                >{summaryPrice === 0 ? 'Добавьте что-нибудь в заказ' : `Заказать за ${summaryPrice}₽`}</Button>
                            )
                        })()}
                    </Div>
                </FixedLayout>
            </Group>
        </Panel>
    )
}

Menu.propTypes = {
    id: PropTypes.string.isRequired,
    userOrder: PropTypes.array.isRequired,
    setUserOrder: PropTypes.func.isRequired,
}

export default Menu
