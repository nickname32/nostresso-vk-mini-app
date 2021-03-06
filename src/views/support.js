import PropTypes from 'prop-types'

import {
    Panel
} from "@vkontakte/vkui"

function Support({ id }) {
    return (
        <Panel id={id}>
            
        </Panel>
    )
}

Support.propTypes = {
    id: PropTypes.string.isRequired,
}

export default Support
