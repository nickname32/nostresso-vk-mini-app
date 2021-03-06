import PropTypes from 'prop-types'

import {
    Avatar,
    Button,
    CustomSelect,
    CustomSelectOption,
    FormItem,
    FormLayoutGroup,
    Group,
    Panel,
    PanelHeader,
    RichCell,
    Textarea,
} from "@vkontakte/vkui"

import {
    Icon24AddOutline,
    Icon24ArrowUturnLeftOutline,
} from '@vkontakte/icons'

function Order({ id, userOrder, setUserOrder }) {
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
            </Group>

            <Group>
                <FormLayoutGroup mode="horizontal">
                    <FormItem top="Ко скольки часам">
                        <CustomSelect
                            placeholder="чч"
                            options={(() => {
                                let options = []
                                for (let i = 0; i < 24; i++) {
                                    options.push({
                                        label: i < 10 ? '0' + String(i) : String(i),
                                        value: i,
                                    })
                                }
                                return options
                            })()}
                            renderOption={({ option, ...restProps }) => (
                                <CustomSelectOption {...restProps}>{option.label}</CustomSelectOption>
                            )}
                        />
                    </FormItem>
                    <FormItem top="Ко скольки минутам">
                        <CustomSelect
                            placeholder="мм"
                            options={(() => {
                                let options = []
                                for (let i = 0; i < 60; i++) {
                                    options.push({
                                        label: i < 10 ? '0' + String(i) : String(i),
                                        value: i,
                                    })
                                }
                                return options
                            })()}
                            renderOption={({ option, ...restProps }) => (
                                <CustomSelectOption {...restProps}>{option.label}</CustomSelectOption>
                            )}
                        />
                    </FormItem>
                </FormLayoutGroup>

                <FormItem top="Комментарий для баристы">
                    <Textarea placeholder="Ваши пожелания к заказу" />
                </FormItem>
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
