import {connect} from 'react-redux'
import CreateForm from '../../Components/DynamicForm/CreateForm'
import {actions} from '../../Actions/DynamicForm'

export default connect(
    state => ({
        forms: state.formList,
        current: state.current,
        dropdownState: state.dropdownState,
        date: state.date
    }), 
    dispatch => ({
        fetchForms: () => actions.fetchForms(dispatch),
        toggleDropdown: () => actions.toggleDropdown(dispatch),
        selectForm: id => actions.selectForm(dispatch, id),
        changeDate: date => actions.changeDate(dispatch, date),
        updateInput: e => actions.updateInput(dispatch, e.currentTarget)
    })
)(CreateForm)