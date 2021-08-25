import React from 'react';

const SortOnType = ({optionsType, valueSort, onChange}) => {
    return (
        <select
            value={valueSort}
            onChange={event => onChange(event.target.value)}
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