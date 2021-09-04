import React from 'react';
import Form from "./Form/Form";
import s from "./SearchArea.module.css"
import Filter from "./Filter/Filter";

const SearchArea = ({
                        value,
                        handleChange,
                        handleSubmit,
                    }) => {
    return (
        <div className={s.area}>
            <h1 className={s.title}>Google-books</h1>
            <Form value={value}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
            />
            <Filter/>
        </div>
    );
};

export default SearchArea;