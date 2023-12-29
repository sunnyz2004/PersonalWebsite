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
            <h3 className="skills__title"> ✏️ Product Designer</h3>
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
                            <h3 className="skills__name">Design Thinking</h3>
                            <span className="skills_level"></span>

                        </div> 
                    </div>

                    <div className="skills__data">
                    <i class = 'bx bx-sun'></i>

                       <div>
                            <h3 className="skills__name">HTML/CSS</h3>
                            <span className="skills_level"></span>

                        </div> 
                    </div>

                    <div className="skills__data">
                    <i class = 'bx bx-sun'></i>

                       <div>
                            <h3 className="skills__name">User Research</h3>
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
                            <h3 className="skills__name">Dev Handoffs</h3>
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
                            <h3 className="skills__name">Risk Management</h3>
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
                            <h3 className="skills__name">Communication Plan</h3>
                            <span className="skills_level"></span>

                        </div> 
                    </div>

                    <div className="skills__data">
                    <i class = 'bx bx-sun'></i>

                       <div>
                            <h3 className="skills__name">Resource Allocation</h3>
                            <span className="skills_level"></span>

                        </div> 
                    </div>

                    <div className="skills__data">
                    <i class = 'bx bx-sun'></i>

                       <div>
                            <h3 className="skills__name">Critical Path</h3>
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
                            <h3 className="skills__name">HTML/CSS</h3>
                            <span className="skills_level"></span>

                        </div> 
                    </div>

                    <div className="skills__data">
                    <i class = 'bx bx-sun'></i>

                       <div>
                            <h3 className="skills__name">React</h3>
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
                            <h3 className="skills__name">Typescript</h3>
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
                            <h3 className="skills__name">Responsive Design</h3>
                            <span className="skills_level"></span>

                        </div> 
                    </div>
                </div> 

            </div>

        </div>        
        </section>

        <section className="card hidden">
    <div className="skills__content">
        <h3 className="skills__title">🚀 Back-End Engineer</h3>
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__data">
                    <i className="bx bx-sun"></i>

                    <div>
                        <h3 className="skills__name">Python</h3>
                        <span className="skills_level"></span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bx-sun"></i>

                    <div>
                        <h3 className="skills__name">Django</h3>
                        <span className="skills_level"></span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bx-sun"></i>

                    <div>
                        <h3 className="skills__name">Datadog Tracking</h3>
                        <span className="skills_level"></span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bx-sun"></i>

                    <div>
                        <h3 className="skills__name">Database Management (e.g., MongoDB, MySQL)</h3>
                        <span className="skills_level"></span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bx-sun"></i>

                    <div>
                        <h3 className="skills__name">RESTful APIs</h3>
                        <span className="skills_level"></span>
                    </div>
                </div>

                <div className="skills__data">
                    <i className="bx bx-sun"></i>

                    <div>
                        <h3 className="skills__name">Testing Frameworks (e.g., PyTest)</h3>
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