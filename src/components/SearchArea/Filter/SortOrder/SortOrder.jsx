import React from 'react';
import s from './SortOrder.module.css'
import {useDispatch} from "react-redux";
import {changeSortOrderAction} from "../../../../store/sortReducer";

const SortOrder = () => {

    const dispatch = useDispatch();

    const changeOrder = (order) => {
        dispatch(changeSortOrderAction(order))
    }

    return (
        <select
            defaultValue="relevance"
            onChange={event => changeOrder(event.target.value)}
            className={s.select}
        >
            <option value="relevance">relevance</option>
            <option value="newest">newest</option>
            )}
        </select>
    );
};

export default SortOrder;