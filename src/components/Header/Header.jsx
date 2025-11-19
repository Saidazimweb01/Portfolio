import "./Header.css"
import logo from "../../assets/logo.png"
import burgeBtn from "../../assets/burgerbtn.svg"

export default function Header({ burgerBtn, isOpen }) {
    return (

        <header id="head" className="head">
            <div className="container">
                <div className="head__box">
                    <a href="#head">
                        <img className="head__logo" width={230} src={logo} alt="" />
                    </a>

                    <nav className={`head__navbar ${isOpen ? "head--open" : ""}`}>
                        <ul className="head__list">
                            <li className="head__item">
                                <a href="#hero">Home</a>
                            </li>
                            <li className="head__item">
                                <a href="#about">About</a>
                            </li>
                            <li className="head__item">
                                <a href="#works">My works</a>
                            </li>
                            <li className="head__item">
                                <a href="#contact" className="head__btn">
                                    Contact
                                </a>
                            </li>

                        </ul>
                    </nav>

                    <button onClick={() => burgerBtn()} className="head__burgerbtn"><img className="head__burgerbtn__img" width={30} height={30} src={burgeBtn} alt="" /></button>
                </div>
            </div>
        </header >

    )
}