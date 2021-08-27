import React from 'react';
import s from './Card.module.css'

const Card = ({bookInfo, setModal, handData}) => {

    return (
        <div className={s.wrapper} >
                <div className={s.container} onClick={(event) => {
                    setModal(true)
                    handData(bookInfo)
                }}>
                    <div className={s.image}>
                        <img src= {bookInfo.imageLinks.thumbnail} alt=""/>
                    </div>
                    <div className={s.text}>
                        <div className={s.category}>{bookInfo.categories}</div>
                        <div className={s.title}>{bookInfo.title}</div>
                        <div className={s.author}>{bookInfo.authors}</div>
                    </div>
                </div>
        </div>
    );
};

export default Card;