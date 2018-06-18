import {connect} from 'react-redux'
import CreateForm from '../../Components/DynamicForm/CreateForm'
import {actions} from '../../Actions/DynamicForm'

export default connect(
    state => ({
        forms: state.formList,
        current: state.current,
        date: state.date,
        submitStatus: state.submitStatus
    }), 
    dispatch => ({
        fetchForms: () => actions.fetchForms(dispatch),
        selectForm: id => actions.selectForm(dispatch, id),
        changeDate: date => actions.changeDate(dispatch, date),
        updateInput: e => actions.updateInput(dispatch, e.currentTarget),
        submitForm: (e, current) => actions.submitForm(dispatch, e, current)()
    })
)(CreateForm)