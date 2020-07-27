import React from "react";
import "./about.css";
import { Link } from "react-router-dom";

const skills = [
    {
        "type": "Java",
        "level": 95
    },
    {
        "type": "Python",
        "level": 85
    },
    {
        "type": "FullStack Development",
        "level": 90
    },
    {
        "type": "Machine Learning",
        "level": 95
    },
    {
        "type": "Artificial Intelligence",
        "level": 85
    },
    {
        "type": "Competitive Programming",
        "level": 93
    }
]

function About() {
  return (
    <div className="aboutContainer">
      <div className="primaryAbt">
        <p className="titleText">About Me</p>
        <p className="paraText">I'm a Computer Science Grad student at the University of Texas at Dallas, specializing in the Intelligence Systems Track.
A Full Stack Developer with industry experience building websites and web applications. I specialise in FullStack Development and have experience working with React and Node.
I also enjoy delving in the realm of Machine Learnign and Artificial Intelligence. 
        <p>
        I can help you with the skills mentioned on the right hand side. I believe the best way to gain expertise in a certain skill is to learn first and then teach it to someone. Happy to Help!
        </p>
        </p>
        <Link to="/contact">
          <input type="button" className="primaryBtn" value="Contact Me" />
        </Link>
      </div>

      <div className="secondaryAbt">
        <div class="u-center">
          <section class="skills">
            {
                skills.map((skill, i) => {
                    return(
                        <div class="skill">
                            <h3 class="skill__type">{skill.type}</h3>
                            <div class="skill__outer-bar">
                                <div style={{width: `${skill.level}%`}} class="skill__inner-bar"></div>
                            </div>
                        </div>
                    );
                })
            }

          </section>
        </div>
      </div>
    </div>
  );
}

export default About;
