import React from 'react';
import style from "./Projects.module.scss";
import PrimaryButton from "../Buttons/PrimaryButton";


interface ProjectsProps {
    title: any,
    text: JSX.Element,
    button_text: string,
}


const Projects = ({text, title, button_text}: ProjectsProps) => {
    return (
        <div className={style.project_block}>
            <h1>{title}</h1>
            {text}
            <PrimaryButton>{button_text}</PrimaryButton>
        </div>
    );
};

export default Projects;