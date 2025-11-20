import { useState } from "react";

import "./app.css"
import Header from "../header/header";
import Hero from "../hero/hero";
import Projects from "../projects/projects";
import Skills from "../skills/skills";
import About from "../about/about";

import Footer from "../footer/footer";

function App() {
    const [isOpen, setIsOpen] = useState(false)
    let countScroll = 0;
    window.onscroll = () => {
        if (window.scrollY > countScroll) {
            document.querySelector(".head").classList.add("back")
            countScroll = window.scrollY
        }
        else {
            document.querySelector(".head").classList.remove("back")
            countScroll = window.scrollY
        }
    }


    function burgerBtn() {
        setIsOpen(!isOpen)
    }


    return (
        <>
            <Header isOpen={isOpen} setIsOpen={setIsOpen} burgerBtn={burgerBtn} />
            <main>
                <Hero />
            
                <Projects />
                <Skills />
            </main>
           
        </>
    )
}


export default App