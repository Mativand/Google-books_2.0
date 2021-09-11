import React from 'react';
import s from './Form.module.css'
import {useDispatch, useSelector} from "react-redux";
import {changeValueAction} from "../../../store/dataSearchReducer";
import {fetchBooks} from "../../../API/booksService";

const Form = () => {

    const value = useSelector(state => state.search.value)
    const order = useSelector(state => state.search.order)
    const category = useSelector(state => state.search.category)
    const indexPagination = '0'

    const dispatch = useDispatch()
    const onInputChange = (text) => {
        dispatch(changeValueAction(text))
    }

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(fetchBooks(value, category, order, indexPagination));
    }

    return (
        <form onSubmit={handleSubmit} className={s.form} >
            <input
                className={s.input}
                type="text"
                value={value}
                onChange={event => onInputChange(event.target.value)}
            />
            <button  className={s.button}>Search</button>
        </form>
    );
};

export default Form;