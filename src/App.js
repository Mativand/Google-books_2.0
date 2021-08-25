import React, {useMemo, useState} from 'react'
import './App.css';
import SearchArea from "./components/SearchArea/SearchArea";
import ResultArea from "./components/ResultArea/ResultArea";
import axios from "axios";

function App() {

    const [value, setValue] = useState('')
    const [result, setResult] = useState([])
    const [selectedSort, setSelectedSort] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('')
    const [relevanceData, setRelevanceData] = useState([])
    const apiKey = 'AIzaSyAuf9NwMBBwgQYKZprb_HwRGqdwNG5Hvtg'

    function handleSubmit(event) {
        event.preventDefault();
        getData();
    }

    function handleChange(event) {
        const value = event.target.value;
        setValue(value);
    }

    function getData() {
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + value + "&key=" + apiKey + "&maxResult=16")
            .then(data => {
                setResult(data.data.items)
                setRelevanceData(data.data.items)
            })
    }

    const sortOnType = (sort) => {
        setSelectedSort(sort);
        if (sort === 'newest') {
            setResult([...result].sort((a, b) => {
                return parseInt(b.volumeInfo.publishedDate.substring(0, 4), 10) - parseInt(a.volumeInfo.publishedDate.substring(0, 4), 10)
            }))
        } else if (sort === 'relevance') {
            setResult(relevanceData)
        }
    }

    const sortOnCategory = (category) => {
        if (category === 'All') console.log('all')
        setSelectedCategory(category);
        setResult(result.filter(e => {
                if (e.volumeInfo.categories === undefined) {
                    return false
                } else if (category === 'All') {
                    return true
                } else {
                    return e.volumeInfo.categories[0] === category
                }
            })
        )
    }



    // const sortedBooks = useMemo(() => {
    //     console.log('usememo')
    //         sortOnCategory()
    //     }, [selectedCategory]
    // )

    return (
        <div className="App">
            <SearchArea
                value={value}
                valueSort={selectedSort}
                valueCategory={selectedCategory}
                onChange={sortOnType}
                onChangeCategory={sortOnCategory}
                setValue={setValue}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                optionsType={[
                    {value: 'newest', name: 'newest'},
                ]}
                optionsCategory={[
                    {value: 'Art', name: 'art'},
                    {value: 'Biography', name: 'biography'},
                    {value: 'Computers', name: 'computers'},
                    {value: 'History', name: 'history'},
                    {value: 'Medical', name: 'medical'},
                    {value: 'Poetry', name: 'poetry'},
                ]}
            />
            <ResultArea
                books={result}
            />
        </div>
    );
}

export default App;
