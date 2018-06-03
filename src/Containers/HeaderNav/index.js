import {connect} from 'react-redux'
import HeaderNav from '../../Components/HeaderNav'

export default connect(
    state => ({
        links: state.headerNav.links
    }),null
)(HeaderNav)



