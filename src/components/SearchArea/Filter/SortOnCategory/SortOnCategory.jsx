import React from 'react';

const SortOnCategory = ({optionsCategory, valueCategory, onChangeCategory}) => {
    return (
        <select
            value={valueCategory}
            onChange={event => onChangeCategory(event.target.value)}
        >
            <option value="All">all</option>
            {optionsCategory.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default SortOnCategory;