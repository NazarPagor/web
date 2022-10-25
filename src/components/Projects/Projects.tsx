import React from 'react';
import style from "./Projects.module.scss";
import PrimaryButton from "../Buttons/PrimaryButton";
import {Link} from 'react-router-dom';


interface ProjectsProps {
    title: any,
    text: JSX.Element,
    button_text: string,
    link_button?: string,
}


const Projects = ({text, title, button_text, link_button}: ProjectsProps) => {
    return (
        <div className={style.project_block}>
            <h1>{title}</h1>
            {text}
            <a href={`${link_button}`} style={{
                textDecoration:"none"
            }}>
                <PrimaryButton>{button_text}</PrimaryButton>
            </a>
        </div>
    );
};

export default Projects;