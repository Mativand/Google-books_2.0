import React from 'react';
import s from "./ResultArea.module.css"
import Card from "./Card/Card";

const ResultArea = ({books}) => {

    return (
        <div className={s.area}>
            {books.map((el, index) =>
                <Card bookInfo={el.volumeInfo} key={index + 1}>карточка</Card>
            )}
        </div>
    );
};

export default ResultArea;