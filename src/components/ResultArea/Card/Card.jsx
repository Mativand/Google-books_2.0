import React from 'react';
import s from './Card.module.css'
import {useDispatch} from "react-redux";
import {getCurrentBookAction, toggleVisibleAction} from "../../../store/dataModalReducer";

const Card = (props) => {

    const dispatch = useDispatch();
    const getBookInfo = (info) => {
        dispatch(getCurrentBookAction(info))
        dispatch(toggleVisibleAction(true))
    }

    return (
        <div className={s.wrapper} {...props}>
            <div className={s.container} onClick={() => getBookInfo(props.book)}>
                <div className={s.image}>
                    <img src= {props.book.imageLinks.thumbnail} alt=""/>
                </div>
                <div className={s.text}>
                    <div className={s.category}>{props.book.categories}</div>
                    <div className={s.title}>{props.book.title}</div>
                    <div className={s.author}>{props.book.authors}</div>
                </div>
            </div>
        </div>
    );
};

export default Card;