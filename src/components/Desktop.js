import React from "react";
import "./desktop.css"

export default function Desktop() {
    return (
        <div className="desktop-web">
            <div className="web-icons">
                <a href="#projects">
                    <i class="fas fa-project-diagram" id="font-icon"></i> Projects
                </a>
            </div>
            <div className="web-icons">
                <a href="#skills">
                    <i class="fab fa-leanpub"id="font-icon" ></i> Skills
                </a>
            </div>
            <div className="web-icons">
                <a href="#resume">
                    <i class="fas fa-file"id="font-icon"></i> Resume
                </a>
            </div>
            <div className="web-icons">
                <a href="#contact">
                    <i class="fas fa-address-book"id="font-icon"></i> Contact
                </a>
            </div>
        </div>
    )
}