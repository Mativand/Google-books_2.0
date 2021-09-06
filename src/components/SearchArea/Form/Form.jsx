import React from 'react';
import s from './Form.module.css'
import {useDispatch, useSelector} from "react-redux";
import {changeValueAction} from "../../../store/sortReducer";

const Form = ({handleSubmit}) => {

    const value = useSelector(state => state.sort.value)
    const dispatch = useDispatch()

    const onInputChange = (text) => {
        dispatch(changeValueAction(text))
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