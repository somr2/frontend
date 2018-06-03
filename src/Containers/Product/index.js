import {connect} from 'react-redux'
import Product from '../../Components/Product'
import {actions} from './action_reducer'

export default connect(
    state => ({
       ...state.product
    }),
    dispatch => ({
        clearData: () => actions.clearData(dispatch),
        fetchData: id => actions.fetchData(dispatch, id)
    })
)(Product)