import React from 'react';
import s from './ModalWindow.module.css'

const ModalWindow = ({children, visible, setVisible}) => {

    const rootClasses = [s.modalWindow]
        if (visible) {
            rootClasses.push(s.active)
        }

    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={s.modalWindowContent} onClick={(event => event.stopPropagation())}>
                {children}
            </div>
        </div>
    );
};

export default ModalWindow;