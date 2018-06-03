import C from '../../Constants'

// init state
const init = {
    products: [],
    redirect: false,
    whereTo: ''
}

// actions
export const actions = {
    redirect: (dispatch,id) => dispatch({type: C.REDIRECT, whereTo: id}),
    resetRedirect: (dispatch) => dispatch({type: C.RESET_REDIRECT})
}

// reducer
export const productListing = (state=init, action) => {
    switch(action.type){
        case C.REDIRECT:
            return {
                ...state,
                redirect: true,
                whereTo: action.whereTo
            }
        case C.RESET_REDIRECT:
            return{
                ...state,
                redirect: false,
                whereTo: ''
            }
        default:
            return state
    }
}