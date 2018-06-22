import {connect} from 'react-redux'
import momement from 'moment'
import CreateForm from '../../Components/DynamicForm/CreateForm'
import {actions} from '../../Actions/DynamicForm'

export default connect(
    state => ({
        forms: state.formList,
        current: state.current,
        startDate: state.startDate,
        endDate: state.endDate,
        limitedDateRange: state.limitedDateRange,

    }), 
    dispatch => ({
        fetchForms: () => actions.fetchForms(dispatch),
        selectForm: id => actions.selectForm(dispatch, id),
        changeDateFilter: e => {
            console.log(e.currentTarget.value);
            actions.changeDateFilter(dispatch, e.currentTarget.value)
        },
        changeStartDate: date => actions.changeStartDate(dispatch, date),
        changeEndDate: date => actions.changeEndDate(dispatch, date),
    })
)(CreateForm)