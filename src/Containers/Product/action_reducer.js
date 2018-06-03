import C from '../../Constants'
import data from '../../TempAPI'

// init state
const init = {
    id: '', 
    category: '', 
    name: '', 
    material: '', 
    price: '', 
    description: ''
}

// actions
export const actions = {
    fetchData:(dispatch,id) => {
        let product = data[id-1]
        return dispatch({type: C.FETCH_DATA, product: {...product}})
    },
    clearData: dispatch => {
        return dispatch({type: C.CLEAR_DATA})
    }
}

// reducer
export const product = (state=init, action) => {
    switch (action.type){
        case C.FETCH_DATA:
            return {
                ...action.product
            }
        case C.CLEAR_DATA:
            return {
                ...init
            }
        default:
            return state
    }
}