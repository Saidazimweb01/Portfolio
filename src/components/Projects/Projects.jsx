import "./projects.css"
import medClinic from "../../assets/med-clinic.png"
import weather from "../../assets/weather.webp"
import pixer from "../../assets/pixer.webp"
import meals from "../../assets/meals.webp"


export default function Projects() {
    return (
        <>
            <section id="works" className="projects">
                <div className="container">
                    <h2 className="projects__title">My Projects Highlight</h2>

                    <ul className="projects__list">
                        <li className="projects__item">
                            <img className="projects__poster" width={300} height={200} src={medClinic} alt="" />
                            <h3 className="projects__name">Med-clinic website</h3>
                            <div className="projects__link">
                                <a href="https://med-clinic-25.netlify.app/" target="_blank" className="projects__live">See live</a>
                                <a target="_blank" href="https://github.com/Saidazimweb01/Med-clinic.git" className="projects__hub">See code</a>
                            </div>
                        </li>
                        <li className="projects__item">
                            <img className="projects__poster" width={300} height={200} src={weather} alt="" />
                            <h3 className="projects__name">Open-weather App website</h3>
                            <div className="projects__link">
                                <a href="https://weather-website25.netlify.app/" target="_blank" className="projects__live">See live</a>
                                <a href="https://github.com/Saidazimweb01/Weather-app.git" target="_blank" className="projects__hub">See code</a>
                            </div>
                        </li>
                        <li className="projects__item">
                            <img className="projects__poster" width={300} height={200} src={meals} alt="" />
                            <h3 className="projects__name">Meals & receipts website</h3>
                            <div className="projects__link">
                                <a href="https://meals-receipts.netlify.app/" target="_blank" className="projects__live">See live</a>
                                <a href="https://github.com/Saidazimweb01/Meals-with-backEnd.git" target="_blank" className="projects__hub" >See code</a>
                            </div>
                        </li>
                        <li className="projects__item">
                            <img className="projects__poster" width={300} height={200} src={[pixer]} alt="" />
                            <h3 className="projects__name">Pixer website</h3>
                            <div className="projects__link">
                                <a href="https://pixer-pdp-uz.netlify.app/" target="_blank" className="projects__live">See live</a>
                                <a href="https://github.com/Saidazimweb01/Pixer-maket.git" target="_blank" className="projects__hub">See code</a>
                            </div>
                        </li>
                    </ul>

                </div>
            </section>
        </>
    )
}