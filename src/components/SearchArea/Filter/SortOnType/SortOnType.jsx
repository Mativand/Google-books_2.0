import React from 'react';
import s from './SortOnType.module.css'

const SortOnType = ({optionsType, valueSort, onChange}) => {
    return (
        <select
            value={valueSort}
            onChange={event => onChange(event.target.value)}
            className={s.select}
        >
            <option value="relevance">relevance</option>
            {optionsType.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>
    );
};

export default SortOnType;