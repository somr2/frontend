import C from '../../Constants'
import {formList} from '../../TempAPI/getForms'

// actions
export const actions = {
    fetchForms: dispatch => dispatch({type: C.FETCH_FORMS, formList: formList}),
    selectForm: (dispatch, id) => dispatch({type: C.SELECT_FORM, formId: id}),
    changeDate: (dispatch,date) => dispatch({type: C.CHANGE_DATE, date: date}),
    updateInput: (dispatch, currentTarget) => dispatch({type: C.UPDATE_INPUT, currentTarget: currentTarget}),
    submitForm: (dispatch, e, current) => {
        console.log('before fetch')
        return () => {
            const submitStatus = 200
            dispatch({type: C.SUBMIT_FORM}, submitStatus);
    
            fetch('www.tntsupermarket.com')
                .then((response) => {
                    console.log(response)
                    // if (!response.ok) {
                    //     throw Error(response.statusText);
                    // }
    
                    // dispatch(itemsIsLoading(false));
    
                    // return response;
                    dispatch({type: C.SUBMIT_FORM}, submitStatus);
                })
                // .then((response) => response.json())
                // .then((items) => dispatch(itemsFetchDataSuccess(items)))
                // .catch(() => dispatch(itemsHasErrored(true)));
        };

       
        // console.log(current)
        // dispatch({type: C.SUBMIT_FORM}, submitStatus)
    }
}