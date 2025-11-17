import "./Header.css"
import logo from "../../assets/logo.png"

export default function Header() {
    return (
        <>
            <header className="head">
                <div className="container">
                    <div className="head__box">
                        <img className="head__logo" width={230} src={logo} alt="" />

                        <ul className="head__list">
                            <li className="head__item">
                                Home
                            </li>
                            <li className="head__item">
                                About
                            </li>
                            <li className="head__item">
                                My works
                            </li>
                            <li className="head__item">
                                <button className="head__btn">
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}