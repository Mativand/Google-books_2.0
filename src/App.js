import React, {useState} from 'react'
import './App.css';
import SearchArea from "./components/SearchArea/SearchArea";
import ResultArea from "./components/ResultArea/ResultArea";
import axios from "axios";

function App() {

    const [value, setValue] = useState('')
    const [result, setResult] = useState([])
    const [selectedSort, setSelectedSort] = useState('')
    const [selectedCategory, setSelectedCategory] = useState('')
    const [defaultData, setDefaultData] = useState([])
    const [categorySearch, setCategorySearch] = useState('')
    const [indexPagination, setIndexPagination] = useState('0')
    const apiKey = 'AIzaSyAuf9NwMBBwgQYKZprb_HwRGqdwNG5Hvtg'

    function handleSubmit(event) {
        event.preventDefault();
        getData();
    }

    function handleChange(event) {
        const value = event.target.value;
        setValue(value);
    }

    const reloadBooks = () => {
        console.log('bla')
        setIndexPagination(String(Number(indexPagination) + 30))
        getData('execute')
    }

    const sortOnCategory = (category) => {
        setSelectedCategory(category);
        if (category === 'All' || category === undefined) {
            setCategorySearch('')
        } else {
            setCategorySearch(category)
        }
    }

    function getData(pagination) {
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + value + "+subject:" + categorySearch + "&key=" + apiKey + "&startIndex=" + indexPagination + "&maxResults=30")
            .then(data => {
                data.data.items.map((book) => {
                    if (book.volumeInfo.hasOwnProperty('imageLinks') === false) {
                        book.volumeInfo['imageLinks'] = {smallThumbnail: "https://w7.pngwing.com/pngs/388/487/png-transparent-computer-icons-graphy-img-landscape-graphy-icon-miscellaneous-angle-text.png"};
                    }
                    return book;
                })
                if (pagination === 'execute') {
                    console.log('blblbll')
                    setResult([...result, ...data.data.items])
                } else {
                    setResult(data.data.items)
                    setDefaultData(data.data.items)
                }
            })
    }

    const sortOnType = (sort) => {
        setSelectedSort(sort);
        if (sort === 'newest') {
            setResult([...result].sort((a, b) => {
                return parseInt(b.volumeInfo.publishedDate.substring(0, 4), 10) - parseInt(a.volumeInfo.publishedDate.substring(0, 4), 10)
            }))
        } else if (sort === 'relevance') {
            setResult(defaultData)
        }
    }

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
            <button onClick={reloadBooks}>reload books</button>
        </div>
    );
}

export default App;
