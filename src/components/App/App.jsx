import { useState } from "react";

import "./App.css"
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import About from "../About/About";

import Footer from "../Footer/Footer";

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
            <About/>
                <Projects />
                <Skills />
            </main>
           <Footer/>
        </>
    )
}


export default App