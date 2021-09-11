import React from 'react';
import s from './Button.module.css'
import {useDispatch, useSelector} from "react-redux";
import {reloadBooks} from "../../../API/booksService";

const Button = () => {
    const value = useSelector(state => state.search.value)
    const order = useSelector(state => state.search.order)
    const category = useSelector(state => state.search.category)

    const dispatch = useDispatch()
    const onReloadBooks = () => {
        dispatch(reloadBooks(value, category, order))
    }
    return (
        <div className={s.wrapperButton}>
            <button className={s.button} onClick={onReloadBooks}>reload books</button>
        </div>
    );
};

export default Button;