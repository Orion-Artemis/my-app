import React from 'react'
import About from "../Pages/About";
import Blogs from "../Pages/Blogs";
import Contact from "../Pages/Contact";
import Game from "../Pages/Game";
import Hero from "../Pages/Hero";
import Hire from "../Pages/Hire";
import Projects from "../Pages/Projects";
import Skills from "../Pages/Skills";
import Socials from "../Pages/Socials";

const Grid = () => {
  return (
    <div className="grid">
        <Hero />
        <About />
        <Blogs />
        <Contact />
        <Hire />
        <Projects />
        <Skills />
        <Socials />
        <Game />
    </div>
  )
}

export default Grid