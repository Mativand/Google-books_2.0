import React from 'react';
import s from './ModalWindow.module.css'
import {useDispatch, useSelector} from "react-redux";
import {toggleVisibleAction} from "../../store/dataModalReducer";

const ModalWindow = ({children}) => {

    const visible = useSelector(state => state.modal.visible)
    const dispatch = useDispatch();

    const offVisible = () => {
        dispatch(toggleVisibleAction(false))
    }

    const rootClasses = [s.modalWindow]
        if (visible) {
            rootClasses.push(s.active)
        }

    return (
        <div className={rootClasses.join(' ')} onClick={offVisible}>
            <div className={s.modalWindowContent} onClick={(event => event.stopPropagation())}>
                {children}
            </div>
        </div>
    );
};

export default ModalWindow;