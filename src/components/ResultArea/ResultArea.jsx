import React from 'react';
import s from "./ResultArea.module.css"
import Card from "./Card/Card";
import Button from "./Button/Button";
import Loader from "../Loader/Loader";
import {useSelector} from "react-redux";

const ResultArea = () => {
    const books = useSelector(state => state.result.books)
    const loader = useSelector(state => state.result.loader)

    return (
        <div className={s.area}>
            <div className={s.container}>
                {
                    books.map((book, index) =>
                        <Card
                            book={book.volumeInfo}
                            key={index + 1}
                        >
                            карточка
                        </Card>
                    )}
            </div>
            {
                books.length === 0
                    ? <div></div>
                    : loader
                    ? <Loader/>
                    : <Button/>
            }
        </div>
    );
};

export default ResultArea;