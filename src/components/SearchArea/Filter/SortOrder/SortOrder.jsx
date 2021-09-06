import React from 'react';
import s from './SortOrder.module.css'

const SortOrder = ({optionsOrder, changeOrder}) => {
    return (
        <select
            defaultValue="relevance"
            onChange={event => changeOrder(event.target.value)}
            className={s.select}
        >
            {optionsOrder.map(option =>
                <option key={option.value} value={option.value}>{option.value}</option>
            )}
        </select>
    );
};

export default SortOrder;