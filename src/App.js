import React, {useState} from 'react'
import './App.css';
import SearchArea from "./components/SearchArea/SearchArea";
import ResultArea from "./components/ResultArea/ResultArea";
import axios from "axios";
import ModalWindow from "./components/ModalWindow/ModalWindow";
import DetailDesc from "./components/DetailDesc/DetailDesc";

function App() {

    const [value, setValue] = useState('')
    const [result, setResult] = useState([])
    const [selectedSort, setSelectedSort] = useState('relevance')
    const [selectedCategory, setSelectedCategory] = useState('')
    const [categorySearch, setCategorySearch] = useState('')
    const [indexPagination, setIndexPagination] = useState('0')
    const [modal, setModal] = useState(false)
    const [currentBook, setCurrentBook] = useState([])
    const [isBooksLoading, setIsBooksLoading] = useState(false)

    const apiKey = 'AIzaSyAuf9NwMBBwgQYKZprb_HwRGqdwNG5Hvtg'

    function handleSubmit(event) {
        event.preventDefault();
        getData();
        console.log(result)
    }

    function handleChange(event) {
        const value = event.target.value;
        setValue(value);
    }

    const reloadBooks = () => {
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

    const sortOnType = (sort) => setSelectedSort(sort);

    function getData(pagination) {
        setIsBooksLoading(true)
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + value + "+subject:" + categorySearch + "&orderBy=" + selectedSort + "&key=" + apiKey + "&startIndex=" + indexPagination + "&maxResults=30")
            .then(data => {
                data.data.items.map((book) => {
                    if (book.volumeInfo.hasOwnProperty('imageLinks') === false) {
                        book.volumeInfo['imageLinks'] = {thumbnail: "https://w7.pngwing.com/pngs/388/487/png-transparent-computer-icons-graphy-img-landscape-graphy-icon-miscellaneous-angle-text.png"};
                    }
                    return book;
                })
                if (pagination === 'execute') {
                    setResult([...result, ...data.data.items])
                } else {
                    setResult(data.data.items)
                }
            })
            .catch((e) => console.log(e))
        setIsBooksLoading(false)
    }

    const handData = (data) => {
        console.log(data)
        setCurrentBook(data)
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
            <ResultArea books={result}
                        setModal={setModal}
                        handData={handData}
                        reloadBooks={reloadBooks}
                        isBooksLoading={isBooksLoading}
            />

            <ModalWindow visible={modal} setVisible={setModal}>
                {currentBook.length === 0
                    ? <div> </div>
                    :  <DetailDesc data={currentBook}/>}
            </ModalWindow>

        </div>
    );
}

export default App;
