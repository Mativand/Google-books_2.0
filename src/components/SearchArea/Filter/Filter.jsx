import React from 'react';
import SortOrder from "./SortOrder/SortOrder";
import SortOnCategoryContainer from "./SortOnCategory/SortOnCategoryContainer";

const Filter = () => {
    return (
        <div>
            <SortOnCategoryContainer/>
            <SortOrder/>
        </div>
    );
};

export default Filter;