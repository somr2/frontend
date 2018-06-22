import C from '../../Constants'
import moment from 'moment'

// init state
const init = {
    formList:[{ Id: 0, Name: 'All' }],
    current:{},
    startDate: moment(),
    endDate: moment(),
    limitedDateRange: 'All',
}

// reducer
export const CreateFormReducer = (state=init, action) => {
    switch(action.type){
        case C.FETCH_DROPDOWN:
            console.log('done')
            return state
        case C.SELECT_FORM:
            console.log('done')
            return state
        case C.CHANGE_DATE_FILTER:
            return {
                ...state,
                limitedDateRange: action.limitedDateRange
            }
        case C.SELECT_START_DATE:
            return {
                ...state,
                startDate: action.date
            }
        case C.SELECT_END_DATE:
            return {
                ...state,
                endDate: action.date
            }
        default:
            return state
    }
}