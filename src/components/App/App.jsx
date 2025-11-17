import About from "../About/About";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
import Projects from "../projects/Projects";
import "./App.css"

function App() {
    return (

        <>
            <Header />
            <main>
                <Hero />
                <About />
                <Projects />
            </main>
            <Footer />
        </>
    )
}


export default App