import React from 'react';
import s from './DetailDesc.module.css'

const DetailDesc = ({data}) => {
    return (
        <div className={s.container}>
            <div className={s.image}>
                <img src={data.imageLinks.thumbnail} alt=""/>
            </div>
            <div className={s.text}>
                <div className={s.categories}>{data.categories}</div>
                <div className={s.title}>{data.title}</div>
                <div className={s.authors}>{data.authors}</div>
                <div className={s.description}>{data.description}</div>
            </div>
        </div>
    );
};

export default DetailDesc;