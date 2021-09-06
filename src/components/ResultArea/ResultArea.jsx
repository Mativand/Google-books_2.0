import React from 'react';
import s from "./ResultArea.module.css"
import Card from "./Card/Card";
import Button from "./Button/Button";
import Loader from "../Loader/Loader";
import {useDispatch, useSelector} from "react-redux";

const ResultArea = ({ setModal, handData, reloadBooks, isBooksLoading}) => {
    const books = useSelector(state => state.result.books)
    const loader = useSelector(state => state.result.loader)
    const dispatch = useDispatch();

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
                    : loader
                    ? <Loader/>
                    : <Button />
            }
        </div>
    );
};

export default ResultArea;