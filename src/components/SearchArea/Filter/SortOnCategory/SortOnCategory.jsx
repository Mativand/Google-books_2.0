import React from 'react';
import s from './SortOnCategory.module.css'

const SortOnCategory = ({optionsCategory, valueCategory, onChangeCategory}) => {
    return (
        <select
            className={s.select}
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