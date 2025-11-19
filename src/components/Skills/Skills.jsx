import "./Skills.css"
import htmlLogo from "../../assets/html5.svg"
import cssLogo from "../../assets/css.svg"
import jsLogo from "../../assets/javascript.svg"
import tsLogo from "../../assets/typescript.svg"
import reactLogo from "../../assets/react.svg"
import gitLogo from "../../assets/github.svg"


export default function Skills() {
    return (
        <>
            <section className="skills">
                <div className="container">
                    <h2 className="skills__title">My skills</h2>

                    <p className="skills__info">Technologies and tools I use to build modern, responsive websites that look good and work well on all devices. I focus on writing clean code and making websites easy to use and fast.</p>

                    <ul className="skills__list">
                        <li className="skills__item">
                            <img className="skills__image" width={50} height={50} src={htmlLogo} alt="" />
                              <p className="skills__text">HTML5</p>
                        </li>
                        <li className="skills__item">
                            <img className="skills__image" width={50} height={50} src={cssLogo} alt="" />
                              <p className="skills__text">CSS3</p>
                        </li>
                        <li className="skills__item">
                            <img className="skills__image" width={50} height={50} src={jsLogo} alt="" />
                              <p className="skills__text">JavaScript es6+</p>
                        </li>
                        <li className="skills__item">
                            <img className="skills__image" width={50} height={50} src={tsLogo} alt="" />
                            <p className="skills__text">TypeScript</p>
                        </li>
                        <li className="skills__item">
                            <img className="skills__image" width={50} height={50} src={reactLogo} alt="" />
                              <p className="skills__text">React JavaScript</p>
                        </li>
                        <li className="skills__item">
                            <img className="skills__image" width={50} height={50} src={gitLogo} alt="" />
                           <p className="skills__text">GitHub</p>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}