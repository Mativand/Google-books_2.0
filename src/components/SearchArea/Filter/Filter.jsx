import React from 'react';
import SortOnCategory from "./SortOnCategory/SortOnCategory";
import SortOnType from "./SortOnType/SortOnType";

const Filter = ({optionsType, optionsCategory, valueSort, valueCategory, onChange, onChangeCategory}) => {
    return (
        <div>
            <SortOnCategory
                optionsCategory={optionsCategory}
                valueCategory={valueCategory}
                onChangeCategory={onChangeCategory}/>
            <SortOnType
                optionsType={optionsType}
                valueSort={valueSort}
                onChange={onChange}/>
        </div>
    );
};

export default Filter;