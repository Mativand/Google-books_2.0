import React from 'react';
import {useDispatch} from "react-redux";
import {changeSortCategoryAction} from "../../../../store/sortReducer";
import SortOnCategory from "./SortOnCategory";

const SortOnCategoryContainer = () => {

    const dispatch = useDispatch();

    const changeCategory = (category) => {
        dispatch(changeSortCategoryAction(category))
    }
    const optionsCategory = [
        {value: '', name: 'all'},
        {value: 'Art', name: 'art'},
        {value: 'Biography', name: 'biography'},
        {value: 'Computers', name: 'computers'},
        {value: 'History', name: 'history'},
        {value: 'Medical', name: 'medical'},
        {value: 'Poetry', name: 'poetry'},
    ]
    return (
        <SortOnCategory optionsCategory={optionsCategory} changeCategory={changeCategory} />
    );
};

export default SortOnCategoryContainer;