import React from 'react';
import s from "./ResultArea.module.css"
import Card from "./Card/Card";
import Button from "./Button/Button";

const ResultArea = ({books, setModal, handData, reloadBooks, isBooksLoading}) => {

    return (
        <div className={s.area}>
            {books.map((el, index) =>
                <Card bookInfo={el.volumeInfo} key={index + 1} setModal={setModal} handData={handData}>карточка</Card>
            )}
            {
                books.length === 0
                    ? <div></div>
                    : <Button reloadBooks={reloadBooks}/>
            }

            {
                isBooksLoading === true
                    ? <button>loading...</button>
                    : <div></div>
            }
        </div>
    );
};

export default ResultArea;