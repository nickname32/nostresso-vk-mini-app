import {
    useState,
    useEffect,
} from 'react'

import PropTypes from 'prop-types'

import {
    Button,
    ContentCard,
    Div,
    FormItem,
    FormLayout,
    ModalPage,
    ModalRoot,
    Radio,
    View,
} from '@vkontakte/vkui'

import Selection from './selection'
import Order from './order'

import router from '../../router'
import { Checkbox } from '@vkontakte/vkui/dist/components/Checkbox/Checkbox'

function Coffeehouses({ id }) {
    const [activePanel, setActivePanel] = useState('selection')
    const [activeModal, setActiveModal] = useState(null)

    const [userOrder, setUserOrder] = useState([])

    useEffect(() => {
        const routerUnsubscribe = router.subscribe(({ toState }) => {
            console.log(toState)
            let nextActivePanel = toState.page.substring(toState.page.indexOf('.') + 1)

            switch (nextActivePanel) {
                case 'selection':
                    break
                case 'order':
                    break
                default:
                    nextActivePanel = 'selection'
            }

            setActivePanel(nextActivePanel)

            if (toState.modal != null) {
                let nextActiveModal = toState.modal.substring(toState.page.indexOf('.') + 1)

                switch (nextActiveModal) {
                    case 'order_add_item':
                        break
                    default:
                        nextActiveModal = null
                }

                setActiveModal(nextActiveModal)
            } else {
                setActiveModal(null)
            }
        })

        return routerUnsubscribe
    }, [])

    const modal = (
        <ModalRoot

            activeModal={activeModal}
            onClose={() => {
                router.back()
            }}
        >
            <ModalPage
                id="order_add_item"
                settlingHeight={100}
            >
                {router.getState().params.item ? (() => {
                    let item = router.getState().params.item

                    return (<>
                        <Div>
                            <ContentCard
                                key={item.title}
                                disabled
                                image={item.image}
                                header={item.title}
                                caption={item.description}
                                maxHeight={200}
                            />
                        </Div>

                        <FormLayout>
                            {item.options.map(optionsBlock => (
                                <FormItem
                                    key={optionsBlock.title}
                                    top={optionsBlock.title}
                                >
                                    {optionsBlock.multiple ? optionsBlock.values.map(value =>
                                        <Checkbox
                                            key={value.title}
                                            name={optionsBlock.title}
                                            value={value.title}
                                        >
                                            {`${value.title}` + (value.price !== 0 ? ` ${value.price}₽` : '')}
                                        </Checkbox>
                                    ) : optionsBlock.values.map((value, index) =>
                                        <Radio
                                            defaultChecked={index === 0}
                                            key={value.title}
                                            name={optionsBlock.title}
                                            value={value.title}
                                        >
                                            {`${value.title}` + (value.price !== 0 ? ` ${value.price}₽` : '')}
                                        </Radio>
                                    )}
                                </FormItem>
                            ))}

                            <FormItem>
                                <Button
                                    stretched
                                    size="l"
                                >Добавить к заказу</Button>
                            </FormItem>
                        </FormLayout>
                    </>)
                })() : null}
            </ModalPage>
        </ModalRoot>
    )

    return (
        <View id={id} activePanel={activePanel} modal={modal}>
            <Selection id="selection" />
            <Order id="order" userOrder={userOrder} setUserOrder={setUserOrder} />
        </View>
    )
}

Coffeehouses.protoTypes = {
    id: PropTypes.string.isRequired,
}

export default Coffeehouses
