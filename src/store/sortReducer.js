
const defaultState = {
    order: 'relevance',
    category: '',
    value: '',
}

const SORT_ON_ORDER = "SORT_ON_ORDER"
const SORT_ON_CATEGORY = "SORT_ON_CATEGORY"
const CHANGE_VALUE = "CHANGE_VALUE"

export const sortReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SORT_ON_ORDER":
            return {...state, order: action.payload}
        case "SORT_ON_CATEGORY":
            return {...state, category: action.payload}
        case "CHANGE_VALUE":
            return {...state, value: action.payload}
    }
    return state
}

export const changeValueAction = (payload) => ({type: CHANGE_VALUE, payload: payload})
export const changeSortOrderAction = (payload) => ({type: SORT_ON_ORDER, payload: payload})
export const changeSortCategoryAction = (payload) => ({type: SORT_ON_CATEGORY, payload: payload})

