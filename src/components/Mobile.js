import React from "react";
import "./header.css"

export default function Mobile({isOpen, setIsOpen}) {
return (
    <div className="mobile">
        <div className="close-icon" onClick={()=>setIsOpen(!isOpen)}>
        <i class="far fa-times-circle"></i>
        </div>
        <div className="mobile-options">
        <div className="mobile-icons">
                <a href="#projects">
                    <i class="fas fa-project-diagram" id="font-icon"></i> Projects
                </a>
            </div>
            <div className="mobile-icons">
                <a href="#skills">
                    <i class="fab fa-leanpub"id="font-icon" ></i> Skills
                </a>
            </div>
            <div className="mobile-icons">
                <a href="#resume">
                    <i class="fas fa-file"id="font-icon"></i> Resume
                </a>
            </div>
            <div className="mobile-icons">
                <a href="#contact">
                    <i class="fas fa-address-book"id="font-icon"></i> Contact
                </a>
            </div>
        </div>
    </div>
)
}