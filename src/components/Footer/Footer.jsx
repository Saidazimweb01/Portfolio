import "./Footer.css"
import logo from "../../assets/logo.png"
import tg from "../../assets/tg.svg"


export default function Footer() {
    return (

        <>
            <footer className="foot">
                <div className="container">
                    <h3 className="foot__title">Get in Touch With Us</h3>
                    <div className="foot__tg__box">
                        <a className="foot__tg" href="https://t.me/Akh_ass">Telegram: @Akh_ass</a>
                    </div>

                    <div className="foot__box">
                        <div className="foot__logo__box">

                            <img src={logo} className="foot__logo" width={230} alt="" />

                        </div>

                        <div className="foot__adress">
                            <a target="_blank" href="https://maps.app.goo.gl/TPv88jqaVm8msm2u5">
                                Uzbekistan,
                                Tashkent,
                                Pdp School
                            </a>
                        </div>

                        <div className="foot__info">
                            <div className="foot__infos">
                                <a className="foot__tel" href="tel: +998900654141">+998900654141</a>
                                <a className="foot__telegram" href="https://t.me/Akh_ass">  <img src={tg} alt="" /></a>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <p className="foot__bottom">© 2025. <a href="https://github.com/Saidazimweb01" target="_blank">Saidazimxon</a>. All rights reserved. </p>
                </div>
            </footer>
        </>
    )
}