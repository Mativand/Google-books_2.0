
const defaultState = {
    order: 'relevance',
    category: '',
}

const SORT_ON_ORDER = "SORT_ON_ORDER"
const SORT_ON_CATEGORY = "SORT_ON_CATEGORY"

export const sortReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SORT_ON_ORDER":
            return {...state, order: action.payload}
        case "SORT_ON_CATEGORY":
            return {...state, category: action.payload}
    }
    return state
}

export const changeSortOrderAction = (payload) => ({type: SORT_ON_ORDER, payload: payload})
export const changeSortCategoryAction = (payload) => ({type: SORT_ON_CATEGORY, payload: payload})

