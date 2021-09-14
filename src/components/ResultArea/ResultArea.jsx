import React from 'react';
import s from "./ResultArea.module.css"
import Button from "./Button/Button";
import Loader from "../Loader/Loader";
import {useDispatch, useSelector} from "react-redux";
import CardContainer from "./Card/CardContainer";
import {reloadBooks} from "../../API/booksService";

const ResultArea = () => {
    const books = useSelector(state => state.result.books)
    const loader = useSelector(state => state.result.loader)
    const value = useSelector(state => state.search.value)
    const order = useSelector(state => state.search.order)
    const category = useSelector(state => state.search.category)

    const dispatch = useDispatch()
    const onReloadBooks = () => {
        dispatch(reloadBooks(value, category, order))
    }

    return (
        <div className={s.area}>
            <div className={s.container}>
                {
                    books.map((book, index) =>
                        <CardContainer
                            book={book.volumeInfo}
                            key={index + 1}
                        />
                    )}
            </div>
            {
                books.length === 0
                    ? <div></div>
                    : loader
                    ? <Loader/>
                    : <Button onClick={onReloadBooks}/>
            }
        </div>
    );
};

export default ResultArea;