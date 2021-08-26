import React from 'react';
import s from './Button.module.css'

const Button = ({reloadBooks}) => {
    return (
        <div className={s.wrapperButton}>
            <button className={s.button} onClick={reloadBooks}>reload books</button>
        </div>
    );
};

export default Button;