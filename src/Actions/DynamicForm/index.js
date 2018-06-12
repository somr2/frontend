import C from '../../Constants'
import {formList} from '../../TempAPI/getForms'

// actions
export const actions = {
    fetchForms: dispatch => dispatch({type: C.FETCH_FORMS, formList: formList}),
    selectForm: (dispatch, id) => dispatch({type: C.SELECT_FORM, formId: id}),
    toggleDropdown: dispatch => dispatch({type: C.TOGGLE_DROPDOWN}),
    changeDate: (dispatch,date) => dispatch({type: C.CHANGE_DATE, date: date}),
    updateInput: (dispatch, currentTarget) => dispatch({type: C.UPDATE_INPUT, currentTarget: currentTarget})
}