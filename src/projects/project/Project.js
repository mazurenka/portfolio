import React from "react";
import style from './Project.module.css'

function Project(props) {

    return (
        <div className={style.project}>
            <h3>{props.title}</h3>
            <a href={'https://github.com/mazurenka'} target="_blank" >Check Project</a>
            <span className={style.description}>{props.description}</span>
        </div>
    );
}

export default Project;