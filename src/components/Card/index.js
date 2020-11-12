import React from "react";
import "./style.css";

function Project(props) {
    return (
        <div className="card card1">
            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong>Name:</strong> {props.name}
                    </li>
                    <li>
                        <strong>App:</strong> <a href={props.link}>{props.link}</a>
                    </li>
                    <li>
                        <strong>GitHub Repo:</strong> <a href={props.gitLink}>{props.gitLink}</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Project;