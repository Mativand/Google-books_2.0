import React from 'react';
import {useDispatch} from "react-redux";
import {changeSortOrderAction} from "../../../../store/sortReducer";
import SortOrder from "./SortOrder";

const SortOrderContainer = () => {

    const dispatch = useDispatch();

    const changeOrder = (order) => {
        dispatch(changeSortOrderAction(order))
    }

    const optionsOrder = [
        {value: "relevance"},
        {value: "newest"},
    ]

    return (
            <SortOrder changeOrder={changeOrder} optionsOrder={optionsOrder}/>
    );
};

export default SortOrderContainer;