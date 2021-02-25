import PropTypes from 'prop-types'

import {
    View,
} from '@vkontakte/vkui'

import CoffeehouseSelection from './coffeehouse-selection'
import CoffeehouseMenu from './coffeehouse-order'

function Coffeehouses({ id }) {
    return (
        <View id={id} activePanel="coffeehouse_order">
            <CoffeehouseSelection id="coffeehouses_map" />
            <CoffeehouseMenu id="coffeehouse_order" />
        </View>
    )
}

Coffeehouses.protoTypes = {
    id: PropTypes.string.isRequired,
}

export default Coffeehouses
