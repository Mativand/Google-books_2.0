import s from "../components/ModalWindow/ModalWindow.module.css";

const defaultState = {
    rootClasses: [s.modalWindow],
    visible: false,
    currentBook: null,
}

const TOGGLE_VISIBLE = "TOGGLE_VISIBLE"
const GET_CURRENT_BOOK = "GET_CURRENT_BOOK"

export const dataModalReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "TOGGLE_VISIBLE":
            return {...state, visible: action.payload}
        case "GET_CURRENT_BOOK":
            return {...state, currentBook: action.payload}
        default:
    }
    return state
}

export const toggleVisibleAction = (payload) => ({type: TOGGLE_VISIBLE, payload: payload})
export const getCurrentBookAction = (payload) => ({type: GET_CURRENT_BOOK, payload: payload})


