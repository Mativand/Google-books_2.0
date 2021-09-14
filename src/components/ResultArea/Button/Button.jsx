import React from 'react';
import s from './Button.module.css'

const Button = (props) => {


    return (
        <div className={s.wrapperButton}>
            <button {...props} className={s.button} >reload books</button>
        </div>
    );
};

export default Button;