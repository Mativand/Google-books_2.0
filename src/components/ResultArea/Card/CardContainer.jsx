import React from 'react';
import {useDispatch} from "react-redux";
import {getCurrentBookAction, toggleVisibleAction} from "../../../store/dataModalReducer";
import Card from "./Card";

const CardContainer = (props) => {

    const dispatch = useDispatch();
    const getBookInfo = () => {
        dispatch(getCurrentBookAction(book))
        dispatch(toggleVisibleAction(true))
    }

    const image = props.book.imageLinks.thumbnail;
    const book = props.book;
    const categories = props.book.categories;
    const title = props.book.title;
    const authors = props.book.authors


    return (
        <Card image={image} getBookInfo={getBookInfo} categories={categories} title={title} authors={authors}/>
    );
};

export default CardContainer;