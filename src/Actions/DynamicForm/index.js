import C from '../../Constants'
import {formList} from '../../TempAPI/getForms'

// actions
export const actions = {
    fetchForms: dispatch => dispatch({type: C.FETCH_DROPDOWN, formList: formList}),
    selectForm: (dispatch, id) => dispatch({type: C.SELECT_FORM, formId: id}),
    changeDateFilter: (dispatch, limitedDateRange) => 
    {
        console.log(limitedDateRange)
        dispatch({type: C.CHANGE_DATE_FILTER, limitedDateRange})
    },
    changeStartDate: (dispatch, date) => dispatch({type: C.SELECT_START_DATE, date}),
    changeEndDate: (dispatch, date) => dispatch({type: C.SELECT_END_DATE, date})
}