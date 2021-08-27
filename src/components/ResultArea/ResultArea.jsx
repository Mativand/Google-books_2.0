import React from 'react';
import s from "./ResultArea.module.css"
import Card from "./Card/Card";
import Button from "./Button/Button";
import Loader from "../Loader/Loader";

const ResultArea = ({books, setModal, handData, reloadBooks, isBooksLoading}) => {

    return (
        <div className={s.area}>
            <div className={s.container}>
                {
                    books.map((el, index) =>
                        <Card bookInfo={el.volumeInfo} key={index + 1} setModal={setModal}
                              handData={handData}>карточка</Card>
                    )}
            </div>

            {
                books.length === 0
                    ? <div></div>
                    : isBooksLoading
                    ? <Loader/>
                    : <Button reloadBooks={reloadBooks}/>
            }
        </div>
    );
};

export default ResultArea;