import React from 'react';
import s from './Button.module.css'
import {useDispatch, useSelector} from "react-redux";
import {paginationAction} from "../../../store/dataResultReducer";
import {fetchBooks} from "../../../API/booksService";


const Button = () => {

    const value = useSelector(state => state.search.value)
    const order = useSelector(state => state.search.order)
    const category = useSelector(state => state.search.category)
    const indexPagination = useSelector(state => state.result.indexPagination)

    const dispatch = useDispatch()
    const reloadBooks = () => {
        dispatch(paginationAction())
        dispatch(fetchBooks(value, category, order, indexPagination))

    }
    return (
        <div className={s.wrapperButton}>
            <button className={s.button} onClick={reloadBooks}>reload books</button>
        </div>
    );
};

export default Button;