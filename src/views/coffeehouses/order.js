import {
    useState,
} from 'react'

import PropTypes from 'prop-types'

import {
    Avatar,
    Button,
    CustomSelect,
    Div,
    FormItem,
    FormLayout,
    FormLayoutGroup,
    FormStatus,
    Group,
    Headline,
    Panel,
    PanelHeader,
    RichCell,
    Snackbar,
    Textarea,
} from "@vkontakte/vkui"

import {
    Icon16ErrorCircle,
    Icon24AddOutline,
    Icon24ArrowUturnLeftOutline,
} from '@vkontakte/icons'

function Order({ id, userOrder, setUserOrder }) {
    const [snackbar, setSnackbar] = useState(null)

    let summaryOrderPrice = 0

    userOrder.forEach(({ options }) => {
        options.forEach(({ selectedValues }) => {
            selectedValues.forEach(({ price }) => {
                summaryOrderPrice += price
            })
        })
    })

    return (
        <Panel id={id}>
            <PanelHeader>Заказ</PanelHeader>

            <Group>
                {(() => {
                    let countedOrderItems = []

                    userOrder.forEach(orderItem => {
                        let countedOrderItem = countedOrderItems.find(countedOrderItem => JSON.stringify(countedOrderItem.orderItem) === JSON.stringify(orderItem))
                        if (!countedOrderItem) {
                            countedOrderItems.push({
                                orderItem: orderItem,
                                count: 1,
                            })
                        } else {
                            countedOrderItem.count++
                        }
                    })

                    return countedOrderItems.map(({ orderItem, count }) => (
                        <RichCell
                            key={JSON.stringify(orderItem)}
                            disabled
                            multiline
                            before={<Avatar size={72} mode="image" src={orderItem.image} />}
                            text={orderItem.title}
                            caption={
                                orderItem.options.map(option => (
                                    option.title + ': ' + option.selectedValues.map(value => (
                                        `${value.title} ${value.price}₽`
                                    )).join(', ')
                                )).join('; ')
                            }
                            after={(() => {
                                let summaryPrice = 0

                                orderItem.options.forEach(({ selectedValues }) => {
                                    selectedValues.forEach(({ price }) => {
                                        summaryPrice += price
                                    })
                                })

                                return `${count} × ${summaryPrice}₽ = ${summaryPrice * count}₽`
                            })()}
                            actions={<div style={{ display: 'flex' }}>
                                <Button
                                    stretched
                                    mode="secondary"
                                    size="m"
                                    before={<Icon24AddOutline />}
                                    onClick={() => {
                                        setUserOrder([...userOrder, orderItem])
                                    }}
                                />
                                {(() => {
                                    return (
                                        <Button
                                            style={{ marginLeft: 8 }}
                                            stretched
                                            mode="secondary"
                                            size="m"
                                            before={<Icon24ArrowUturnLeftOutline />}
                                            onClick={() => {
                                                let lastIndex = -1
                                                userOrder.forEach((userOrderItem, orderItemIndex) => {
                                                    if (JSON.stringify(userOrderItem) === JSON.stringify(orderItem)) {
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
                        />
                    ))
                })()}
                <Div>
                    <Headline style={{ textAlign: 'end' }} weight="regular">Итого {summaryOrderPrice}₽</Headline>
                </Div>
            </Group>

            <FormLayout
                onSubmit={e => {
                    e.preventDefault()
                    console.log(e.currentTarget["hours"].value)
                    console.log(e.currentTarget["minutes"].value)
                    console.log(e.currentTarget["comment"].value)

                    setSnackbar(<Snackbar
                        onClose={() => setSnackbar(null)}
                        before={<Icon16ErrorCircle />}
                    >
                        Укажите во сколько вы хотите забрать ваш заказ
                      </Snackbar>)
                }}
            >
                <FormItem>
                    <FormStatus
                        header="Укажите время получения заказа"
                        mode="default"
                    >Во сколько вы хотите получить ваш заказ в кофейне?</FormStatus>
                </FormItem>
                <FormLayoutGroup mode="horizontal">
                    <FormItem>
                        <CustomSelect
                            name="hours"
                            placeholder="часы"
                            options={(() => {
                                let options = [{
                                    label: null,
                                    value: -1,
                                }]
                                for (let i = 0; i < 24; i++) {
                                    options.push({
                                        label: String(i),
                                        value: i,
                                    })
                                }
                                return options
                            })()}
                        />
                    </FormItem>
                    <FormItem>
                        <CustomSelect
                            name="minutes"
                            placeholder="минуты"
                            options={(() => {
                                let options = [{
                                    label: null,
                                    value: -1,
                                }]
                                for (let i = 0; i < 60; i++) {
                                    options.push({
                                        label: (i < 10 ? '0' : '') + String(i),
                                        value: i,
                                    })
                                }
                                return options
                            })()}
                        />
                    </FormItem>
                </FormLayoutGroup>

                <FormItem top="Комментарий для баристы">
                    <Textarea name="comment" placeholder="Ваши пожелания к заказу" />
                </FormItem>

                <Div>
                    <Button
                        disabled={summaryOrderPrice === 0}
                        stretched
                        size="l"
                    >Перейти к оплате</Button>
                </Div>
            </FormLayout>

            {snackbar}
        </Panel>
    )
}

Order.propTypes = {
    id: PropTypes.string.isRequired,
    userOrder: PropTypes.array.isRequired,
    setUserOrder: PropTypes.func.isRequired,
}

export default Order
