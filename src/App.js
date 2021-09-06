import React, {useState} from 'react'
import './App.css';
import SearchArea from "./components/SearchArea/SearchArea";
import ResultArea from "./components/ResultArea/ResultArea";
import axios from "axios";
import ModalWindow from "./components/ModalWindow/ModalWindow";
import DetailDesc from "./components/DetailDesc/DetailDesc";
import Loader from "./components/Loader/Loader";
import {useDispatch, useSelector} from "react-redux";
import {fetchBooks} from "./API/booksService";

function App() {

    const [modal, setModal] = useState(false)
    const [currentBook, setCurrentBook] = useState([])

    const loader = useSelector(state => state.result.loader)
    const dispatch = useDispatch()

    const apiKey = 'AIzaSyAuf9NwMBBwgQYKZprb_HwRGqdwNG5Hvtg'



    // const reloadBooks = () => {
    //     setIndexPagination(String(Number(indexPagination) + 30))
    // }


    // function getData(pagination) {
    //     setIsBooksLoading(true)
    //     axios.get("https://www.googleapis.com/books/v1/volumes?q=" + inputValue + "+subject:" + category + "&orderBy=" + order + "&key=" + apiKey + "&startIndex=" + indexPagination + "&maxResults=30")
    //         .then(data => {
    //             data.data.items.map((book) => {
    //                 if (book.volumeInfo.hasOwnProperty('imageLinks') === false) {
    //                     book.volumeInfo['imageLinks'] = {thumbnail: "https://w7.pngwing.com/pngs/388/487/png-transparent-computer-icons-graphy-img-landscape-graphy-icon-miscellaneous-angle-text.png"};
    //                 }
    //                 return book;
    //             })
    //             if (pagination === 'execute') {
    //                 setResult([...result, ...data.data.items])
    //             } else {
    //                 setResult(data.data.items)
    //             }
    //         })
    //         .catch((e) => console.log(e))
    //         .then(() => setIsBooksLoading(false))
    // }

    const handData = (data) => {
        setCurrentBook(data)
    }

    return (
        <div className="App">
            <SearchArea/>
            {
                loader
                    ? <Loader/>
                    :<div></div>
            }

            <ResultArea
                        setModal={setModal}
                        handData={handData}
                        // reloadBooks={reloadBooks}
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
