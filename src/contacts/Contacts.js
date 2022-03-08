import React from "react";
import style from './Contacts.module.css'
import styleContainer from '../common/styles/Container.module.css'

function Contacts() {
    return (

        <div className={style.contactsBlock}>

            <div className={styleContainer.container}>
                <h2 className={style.title}>Contacts</h2>
                <form>
                    <input type={'text'}/>
                    <input type={'text'}/>

                    <textarea></textarea>
                </form>
            </div>

        </div>
    );
}

export default Contacts;