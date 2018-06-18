import C from '../../Constants'
import moment from 'moment'

// init state
const init = {
    formList:[],
    current:{},
    date: moment(),
    submitStatus: ''
}

// reducer
export const CreateFormReducer = (state=init, action) => {
    switch(action.type){
        case C.FETCH_FORMS:
            return {
                ...state,
                formList: action.formList
            }
        case C.SELECT_FORM:
            const current = (state.formList.filter(v =>  v.Id === action.formId))
            const Fields = current[0].Fields.slice().map(((v, i) => ( { ...v, Input: '' } )))
            return {
                ...state,
                current: {
                    ...current[0],
                    Fields: Fields
                }
            }
        case C.CHANGE_DATE:
            return {
                ...state,
                date: action.date
            }
        case C.UPDATE_INPUT:
            console.log(typeof action.currentTarget.id)

            return {
                ...state,
                current: {
                    ...state.current, 
                    Fields: [
                        ...state.current.Fields.map(
                            v => ( v.FieldId === action.currentTarget.id?
                                   {...v, Input: action.currentTarget.value} : v))
                    ]
                },
            }
        case C.SUBMIT_FORM:
            return {
                ...state,
                submitStatus: action.submitStatus
            }
        default:
            return state
    }
}