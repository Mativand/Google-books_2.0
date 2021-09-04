import React from 'react';
import SortOnCategoryContainer from "./SortOnCategory/SortOnCategoryContainer";
import SortOrderContainer from "./SortOrder/SortOrderContainer";

const Filter = () => {
    return (
        <div>
            <SortOnCategoryContainer/>
            <SortOrderContainer/>
        </div>
    );
};

export default Filter;