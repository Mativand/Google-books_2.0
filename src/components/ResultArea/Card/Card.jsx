import React from 'react';
import s from './Card.module.css'

const Card = (props) => {

    return (
        <div className={s.wrapper} {...props}>
            <div className={s.container} onClick={props.getBookInfo}>
                <div className={s.image}>
                    <img src= {props.image} alt=""/>
                </div>
                <div className={s.text}>
                    <div className={s.category}>{props.categories}</div>
                    <div className={s.title}>{props.title}</div>
                    <div className={s.author}>{props.authors}</div>
                </div>
            </div>
        </div>
    );
};

export default Card;