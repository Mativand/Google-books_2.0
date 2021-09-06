
import {getDataAction, paginationAction} from "../store/dataResultReducer";
import axios from "axios";
import {toggleLoaderAction} from "../store/dataResultReducer";



const apiKey = 'AIzaSyAuf9NwMBBwgQYKZprb_HwRGqdwNG5Hvtg'

export const fetchBooks = (value, category, order, indexPagination) => {
    return function(dispatch) {
        dispatch(toggleLoaderAction(true))
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + value + "+subject:" + category + "&orderBy=" + order + "&key=" + apiKey + "&startIndex=" + indexPagination + "&maxResults=30")
            .then(data => data.data.items)
            .then(books => dispatch(getDataAction(books)))
            .then(data => console.log(data))
            .then(() => dispatch(toggleLoaderAction(false)))
    }
}