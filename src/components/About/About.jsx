import "./About.css"
import myPhoto from "../../assets/myphoto.png"


export default function About() {
    return (
        <>
            <section id="about" className="about">
                <div className="container">
                    <div className="about__box">
                        <div className="about__left">
                            <h2 className="about__text">Let’s get know about me closer</h2>
                            <p className="about__info">
                                Hi, I'm <strong>Akmalxonov Saidazimxon</strong> and I'm 15 years old.
                                I'm a Front-End Developer who loves building modern and responsive websites.
                                I focus on writing clean and easy-to-understand code.
                                In my free time, I enjoy watching movies and listening to music.
                                I study at <strong>PDP School</strong>, an IT-focused school where I’ve learned how to create modern and responsive websites. During my studies, I’ve gained strong knowledge of front-end development, including HTML, CSS, JavaScript, and React.
                            </p>


                            
                        </div>

                        <div className="about__right">
                            <img className="about__photo" src={myPhoto} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}