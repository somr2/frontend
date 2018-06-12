import C from '../../Constants'
import moment from 'moment'

// init state
const init = {
    formList:[],
    current:{
        Id: "101",
        Name: "101 Form",
        Fields : [
            {
                FieldId: "1",
                Name: "field 1",
                Type: "string",
                Input: ""
            },
            {
                FieldId: "2",
                Name: "field 2",
                Type: "integer",
                Input: ""
            },
            {
                FieldId: "3",
                Name: "field 3",
                Type: "string",
                Input: ""
            }
        ]
    },
    dropdownState: false,
    date: moment()
}

// reducer
export const CreateFormReducer = (state=init, action) => {
    switch(action.type){
        case C.FETCH_FORMS:
            return {
                ...state,
                formList: action.formList
            }
        case C.TOGGLE_DROPDOWN:
            return {
                ...state,
                dropdownState: !state.dropdownState
            }
        case C.SELECT_FORM:
            const current = (state.formList.filter(v =>  v.Id === action.formId))
            return {
                ...state,
                current: current[0]
            }
        case C.CHANGE_DATE:
            return {
                ...state,
                date: action.date
            }
        case C.UPDATE_INPUT:
            console.log(action.currentTarget.id)
            return {
                ...state,
                current: {
                    ...state.current, 
                    Fields: [
                        ...state.current.Fields.map(
                            v => ( v.FieldId === action.currentTarget.id?
                                   {...v, Input: action.currentTarget.value} : v))
                    ]
                }
            }
        default:
            return state
    }
}