import {connect} from 'react-redux'
import ProductListing from '../../Components/ProductListing'
import {actions} from './action_reducer'

export default connect(
    state => ({
        products: state.productListing.products,
        redirect: state.productListing.redirect,
        whereTo: state.productListing.whereTo
    }), 
    dispatch => ({
        onClick: id => actions.redirect(dispatch, id),
        onRedirect: () => actions.resetRedirect(dispatch)
    })
)(ProductListing)