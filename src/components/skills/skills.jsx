import React from "react";
import "./skills.css";


const Skills = () => {
    const observer = new IntersectionObserver ((entries, observer) => {
        console.log("hello")
        entries.forEach((entry) => {
            console.log(entry)
            if (entry.isIntersecting) {
                entry.target.classList.add('show')
            }
            else {
                entry.target.classList.remove('show')
            }

            // entry.target.classList.add('show')

        })
    })

    const hiddenElements = document.querySelectorAll('.hidden')
    hiddenElements.forEach((el) => observer.observe(el))

    console.log ("hi")
    return (
    <section className="skills__section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">a glimpse of my can-dos ʕ•́ᴥ•̀ʔっ♡</span>

        <div className="skills__container container grid">

        <section className="card show">
        <div className="skills__content">
            <h3 className="skills__title"> ✏️ UX/UI Designer</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                    <i class = 'bx bx-sun'></i>

                       <div>
                            <h3 className="skills__name">Figma</h3>
                            <span className="skills_level"></span>

                        </div> 
                    </div>

                    <div className="skills__data">
                    <i class = 'bx bx-sun'></i>

                       <div>
                            <h3 className="skills__name">HTML&CSS</h3>
                            <span className="skills_level"></span>

                        </div> 
                    </div>

                    <div className="skills__data">
                    <i class = 'bx bx-sun'></i>

                       <div>
                            <h3 className="skills__name">Prototyping</h3>
                            <span className="skills_level"></span>

                        </div> 
                    </div>

                    <div className="skills__data">
                    <i class = 'bx bx-sun'></i>

                       <div>
                            <h3 className="skills__name">Wireframing</h3>
                            <span className="skills_level"></span>

                        </div> 
                    </div>

                    <div className="skills__data">
                    <i class = 'bx bx-sun'></i>

                       <div>
                            <h3 className="skills__name">Empathy</h3>
                            <span className="skills_level"></span>

                        </div> 
                    </div>

                    <div className="skills__data">
                    <i class = 'bx bx-sun'></i>

                       <div>
                            <h3 className="skills__name">Curiousity</h3>
                            <span className="skills_level"></span>

                        </div> 
                    </div>
                </div> 

            </div>

        </div>        
        </section>

        <section className="card show">
        <div className="skills__content">
            <h3 className="skills__title">👩‍💻 Project Manager</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                    <i class = 'bx bx-sun'></i>

                       <div>
                            <h3 className="skills__name">Agile</h3>
                            <span className="skills_level"></span>

                        </div> 
                    </div>

                    <div className="skills__data">
                    <i class = 'bx bx-sun'></i>

                       <div>
                            <h3 className="skills__name">Slack</h3>
                            <span className="skills_level"></span>

                        </div> 
                    </div>

                    <div className="skills__data">
                    <i class = 'bx bx-sun'></i>

                       <div>
                            <h3 className="skills__name">JIRA</h3>
                            <span className="skills_level"></span>

                        </div> 
                    </div>

                    <div className="skills__data">
                    <i class = 'bx bx-sun'></i>

                       <div>
                            <h3 className="skills__name">Powerpoint</h3>
                            <span className="skills_level"></span>

                        </div> 
                    </div>

                    <div className="skills__data">
                    <i class = 'bx bx-sun'></i>

                       <div>
                            <h3 className="skills__name">Diplomacy</h3>
                            <span className="skills_level"></span>

                        </div> 
                    </div>

                    <div className="skills__data">
                    <i class = 'bx bx-sun'></i>

                       <div>
                            <h3 className="skills__name">Leadership</h3>
                            <span className="skills_level"></span>

                        </div> 
                    </div>
                </div> 

            </div>

        </div>
        </section>

        <section className="card show">
        <div className="skills__content">
            <h3 className="skills__title">🛠 Frontend Engineer</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                    <i class = 'bx bx-sun'></i>

                       <div>
                            <h3 className="skills__name">Python</h3>
                            <span className="skills_level"></span>

                        </div> 
                    </div>

                    <div className="skills__data">
                    <i class = 'bx bx-sun'></i>

                       <div>
                            <h3 className="skills__name">Java</h3>
                            <span className="skills_level"></span>

                        </div> 
                    </div>

                    <div className="skills__data">
                    <i class = 'bx bx-sun'></i>

                       <div>
                            <h3 className="skills__name">JavaScript</h3>
                            <span className="skills_level"></span>

                        </div> 
                    </div>

                    <div className="skills__data">
                    <i class = 'bx bx-sun'></i>

                       <div>
                            <h3 className="skills__name">C++</h3>
                            <span className="skills_level"></span>

                        </div> 
                    </div>

                    <div className="skills__data">
                    <i class = 'bx bx-sun'></i>

                       <div>
                            <h3 className="skills__name">HTML</h3>
                            <span className="skills_level"></span>

                        </div> 
                    </div>

                    <div className="skills__data">
                    <i class = 'bx bx-sun'></i>

                       <div>
                            <h3 className="skills__name">CSS</h3>
                            <span className="skills_level"></span>

                        </div> 
                    </div>
                </div> 

            </div>

        </div>        
        </section>


        </div>
    </section>
    );

}

export default Skills