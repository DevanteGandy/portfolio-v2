import About from "../summary/about.js";
import React from "react";
import "./body.css"
import Projects from "../projects/projects.js";
import Skills from "../skills/skills.js";
import Resume from "../resume/resume.js";
import Contact from "../contact/contact.js";

export default function Body() {
    return (
        <div className="body">

            <section id="about">
            <About />
            </section>

            <section id="projects">
            <Projects />
            </section>

            <section id="skills">
            <Skills />
            </section>

            <section id="resume">
            <Resume />
            </section>

            <section id="contact">
            <Contact />
            </section>
        </div>
    )
  }