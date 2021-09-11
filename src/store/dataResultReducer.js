const defaultState = {
    loader: false,
    indexPagination: '0',
    books: [],
}

const TOGGLE_LOADER = "TOGGLE_LOADER"
const PAGINATION = "PAGINATION"
const GET_DATA = "GET_DATA"

export const dataResultReducer = (state = defaultState, action) => {
    switch (action.type) {
        case "TOGGLE_LOADER":
            return {...state, loader: action.payload}
        case "PAGINATION":
            action.payload.map(book => {
                if (book.volumeInfo.hasOwnProperty('imageLinks') === false) {
                    book.volumeInfo['imageLinks'] =
                        {thumbnail: "https://w7.pngwing.com/pngs/388/487/png-transparent-computer-icons-graphy-img-landscape-graphy-icon-miscellaneous-angle-text.png"};
                }
                return book
            })
            return {...state, books: [...state.books, ...action.payload]}
        case "GET_DATA":
            action.payload.map(book => {
                if (book.volumeInfo.hasOwnProperty('imageLinks') === false) {
                    book.volumeInfo['imageLinks'] =
                        {thumbnail: "https://w7.pngwing.com/pngs/388/487/png-transparent-computer-icons-graphy-img-landscape-graphy-icon-miscellaneous-angle-text.png"};
                }
                return book
            })
            return {...state, books: action.payload}
        default:
    }
    return state
}

export const paginationAction = (payload) => ({type: PAGINATION, payload: payload})
export const getDataAction = (payload) => ({type: GET_DATA, payload: payload})
export const toggleLoaderAction = (payload) => ({type: TOGGLE_LOADER, payload: payload})


