import React from "react";
import style from './Hire.module.scss'
import styleContainer from '../common/styles/Container.module.scss'

function Hire() {
    return (
        <div className={style.hireBlock}>
            <div className={`${styleContainer.container} ${style.hireContainer}`}>
                <h2 className={style.title}>I am available for Freelance</h2>
                <a href={''}>Hire me</a>
            </div>
        </div>
    )
}

export default Hire

