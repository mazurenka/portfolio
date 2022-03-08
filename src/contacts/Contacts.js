import React from "react";
import style from './Contacts.module.css'
import styleContainer from '../common/styles/Container.module.css'

function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}>
                    <span>Hi There</span>
                    <h1>I am Andrei Mazurenka</h1>
                    <p>Front-end Developer</p>
                </div>
                <div className={style.photo}></div>
            </div>

        </div>
    );
}

export default Contacts;