import React from 'react';
import s from './SortOnCategory.module.css'

const SortOnCategory = ({optionsCategory, changeCategory}) => {
    return (
        <select
            defaultValue="All"
            className={s.select}
            onChange={event => changeCategory(event.target.value)}
        >
            {optionsCategory.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default SortOnCategory;