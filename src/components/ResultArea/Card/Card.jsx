import React from 'react';
import s from './Card.module.css'

const Card = ({bookInfo}) => {

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.image}>
                    <img src= {bookInfo.imageLinks.smallThumbnail} alt=""/>
                   </div>
                <div className={s.category}>{bookInfo.categories}</div>
                <div className={s.title}>{bookInfo.title}</div>
                <div className={s.author}>{bookInfo.authors}</div>
                <div>{bookInfo.publishedDate}</div>
            </div>
        </div>
    );
};

export default Card;