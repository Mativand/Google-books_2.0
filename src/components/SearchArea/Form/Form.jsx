import React from 'react';
import s from './Form.module.css'

const Form = ({value, handleChange, handleSubmit}) => {

    return (
        <form onSubmit={handleSubmit} className={s.form} >
            <input
                className={s.input}
                type="text"
                value={value}
                onChange={handleChange}
            />
            <button  className={s.button}>start</button>
        </form>
    );
};

export default Form;