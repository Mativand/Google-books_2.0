import React from 'react';
import Form from "./Form/Form";
import s from "./SearchArea.module.css"
import Filter from "./Filter/Filter";

const SearchArea = ({
                        value,
                        handleChange,
                        handleSubmit,
                        optionsType,
                        optionsCategory,
                        valueSort,
                        onChange,
                        onChangeCategory,
                        valueCategory,
                    }) => {
    return (
        <div className={s.area}>
            areaSearch
            <Form value={value}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
            />
            <Filter
                optionsType={optionsType}
                valueSort={valueSort}
                valueCategory={valueCategory}
                onChange={onChange}
                onChangeCategory={onChangeCategory}
                optionsCategory={optionsCategory}
            />
        </div>
    );
};

export default SearchArea;