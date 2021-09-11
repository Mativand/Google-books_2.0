import React from 'react'
import './App.css';
import SearchArea from "./components/SearchArea/SearchArea";
import ResultArea from "./components/ResultArea/ResultArea";
import ModalWindow from "./components/ModalWindow/ModalWindow";
import DetailDesc from "./components/DetailDesc/DetailDesc";
import Loader from "./components/Loader/Loader";
import {useSelector} from "react-redux";

function App() {

    const loader = useSelector(state => state.result.loader)
    const currentBook = useSelector(state => state.modal.currentBook)

    return (
        <div className="App">
            <SearchArea/>
            {loader ? <Loader/> :<div></div>}
            <ResultArea/>
            <ModalWindow>
                {currentBook === null ? <div></div> : <DetailDesc/>}
            </ModalWindow>
        </div>
    );
}

export default App;
