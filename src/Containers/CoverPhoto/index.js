import {connect} from 'react-redux'
import CoverPhoto from '../../Components/CoverPhoto'

// connect component with store
export default connect(
    state => ({
        photos: state.coverPhoto.photos
    }), null
)(CoverPhoto)