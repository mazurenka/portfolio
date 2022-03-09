import React from "react";
import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={'Skills'}/>
                <div className={style.skills}>
                    <Skill title={'JS'} description={'Hey Yo!!'}/>
                    <Skill title={'CSS'} description={'Hey Yo mf!!'}/>
                    <Skill title={'React'} description={'Hey YoYo'}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
