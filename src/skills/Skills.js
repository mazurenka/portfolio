import React from "react";
import style from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={'JS'} description={'Hey Yo!!'} />
                    <Skill  title={'CSS'} description={'Hey Yo mf!!'}/>
                    <Skill title={'React'} description={'Hey YoYo'}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
