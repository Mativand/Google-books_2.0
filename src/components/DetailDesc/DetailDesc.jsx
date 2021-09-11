import React from 'react';
import s from './DetailDesc.module.css'
import {useSelector} from "react-redux";

const DetailDesc = () => {

    const currentBook = useSelector(state => state.modal.currentBook)

    return (
        <div className={s.container}>
            <div className={s.image}>
                <img src={currentBook.imageLinks.thumbnail} alt=""/>
            </div>
            <div className={s.text}>
                <div className={s.categories}>{currentBook.categories}</div>
                <div className={s.title}>{currentBook.title}</div>
                <div className={s.authors}>{currentBook.authors}</div>
                <div className={s.description}>{currentBook.description}</div>
            </div>
        </div>
    );
};

export default DetailDesc;