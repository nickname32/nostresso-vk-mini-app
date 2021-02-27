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

function Order({ id, userOrder, setUserOrder }) {
    const [menuItems, setMenuItems] = useState([])

    useEffect(() => {
        const fetchMenu = async () => {
            setMenuItems(await getCoffeehouseMenu())
        }
        fetchMenu()

        setUserOrder([])
    }, [setUserOrder])

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
                                        // setUserOrder([...userOrder, item])
                                    }}
                                />
                                {(() => {
                                    let count = 0
                                    userOrder.forEach(orderItem => {
                                        if (orderItem.name === item.name) {
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
                                                let index = -1
                                                userOrder.forEach((orderItem, orderItemIndex) => {
                                                    if (orderItem.name === item.name) {
                                                        index = orderItemIndex
                                                    }
                                                })

                                                if (index === -1) {
                                                    return
                                                }

                                                setUserOrder([...userOrder.slice(0, index), ...userOrder.slice(index + 1)])
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
                            let summaryPrice = 12345

                            return (
                                <Button
                                    stretched
                                    size="l"
                                >Заказать за {`${summaryPrice}₽`}</Button>
                            )
                        })()}
                    </Div>
                </FixedLayout>
            </Group>
        </Panel>
    )
}

Order.propTypes = {
    id: PropTypes.string.isRequired,
    userOrder: PropTypes.array.isRequired,
    setUserOrder: PropTypes.func.isRequired,
}

export default Order
