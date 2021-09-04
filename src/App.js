import React, {useState} from 'react'
import './App.css';
import SearchArea from "./components/SearchArea/SearchArea";
import ResultArea from "./components/ResultArea/ResultArea";
import axios from "axios";
import ModalWindow from "./components/ModalWindow/ModalWindow";
import DetailDesc from "./components/DetailDesc/DetailDesc";
import Loader from "./components/Loader/Loader";
import {useSelector} from "react-redux";

function App() {

    const [value, setValue] = useState('')
    const [result, setResult] = useState([])
    const [indexPagination, setIndexPagination] = useState('0')
    const [modal, setModal] = useState(false)
    const [currentBook, setCurrentBook] = useState([])
    const [isBooksLoading, setIsBooksLoading] = useState(false)

    const order = useSelector(state => state.sort.order)
    const category = useSelector(state => state.sort.category)

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
        setIndexPagination(String(Number(indexPagination) + 30))
        getData('execute')
    }

    // const sortOnCategory = (category) => {
    //     setSelectedCategory(category);
    //     if (category === 'All' || category === undefined) {
    //         setCategorySearch('')
    //     } else {
    //         setCategorySearch(category)
    //     }
    // }


    function getData(pagination) {
        setIsBooksLoading(true)
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + value + "+subject:" + category + "&orderBy=" + order + "&key=" + apiKey + "&startIndex=" + indexPagination + "&maxResults=30")
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
            .then(() => setIsBooksLoading(false))
    }

    const handData = (data) => {
        console.log(data)
        setCurrentBook(data)
    }

    return (
        <div className="App">
            <SearchArea
                value={value}
                setValue={setValue}
                handleSubmit={handleSubmit}
                handleChange={handleChange}
                optionsType={[
                    {value: 'newest', name: 'newest'},
                ]}
            />
            {
                isBooksLoading
                    ? <Loader/>
                    :<div></div>
            }

            <ResultArea books={result}
                        setModal={setModal}
                        handData={handData}
                        reloadBooks={reloadBooks}
                        isBooksLoading={isBooksLoading}
            />

            <ModalWindow visible={modal} setVisible={setModal}>
                {currentBook.length === 0
                    ? <div></div>
                    : <DetailDesc data={currentBook}/>}
            </ModalWindow>

        </div>
    );
}

export default App;
