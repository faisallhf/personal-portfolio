import React from "react";
import AboutCSS from "./About.module.css";
import {Typewriter} from "react-simple-typewriter";


function About() {
  return (
    <>
      <section id="about" className={AboutCSS.aboutsize}>
        <div>
        <h1 className={AboutCSS.pro}>About</h1>
        <div className={AboutCSS.flex_container}>
          <div className={AboutCSS.flex_child}>
            <div>
              <h2>Who am I?</h2>
              <p className={AboutCSS.pname}>Hi I am Faisal Khan</p>
              <p>
                ⚡ I'm a web developer mainly focusing on emerging
                technologies
              </p>
              <p>
                ⚡ You can find me working mainly with Java, Javascript, React,
                Express, Firebase, Mongoo and Tailwind CSS
              </p>
              <p>⚡
              <span>
                            {}
                        <Typewriter
                            words={['I love fixing hard-to-fix bugs', 'I love creating new Websites', 'I love learning new technologies']}
                            loop={true}
                            cursor
                            cursorStyle='|'
                            typeSpeed={120}
                            deleteSpeed={50}
                            delaySpeed={700}
                        />
                        </span>
                        </p>
              <p>Since 2021 - I've spent my time seeking and learning new
              technologies and techniques. This has lead me to working on some
              awesome personal projects</p>
            </div>
          </div>

          <div className={AboutCSS.flex_child}>
            <h2>Skills</h2>

            <div className={AboutCSS.skills}> 

                    <div className={AboutCSS.fullbar}>
                        <div className={AboutCSS.text}>JavaScript</div>
                        <div className={AboutCSS.bar}></div>
                    </div>

                    <div className={AboutCSS.fullbar}>
                        <div className={AboutCSS.text}>React JS</div>
                        <div className={AboutCSS.bar}></div>
                    </div>

                    <div className={AboutCSS.fullbar}>
                        <div className={AboutCSS.text}>Tailwind</div>
                        <div className={AboutCSS.bar}></div>
                    </div>

                    <div className={AboutCSS.fullbar}>
                        <div className={AboutCSS.text}>Bootstrap</div>
                        <div className={AboutCSS.bar}></div>
                    </div>

                    <div className={AboutCSS.fullbar}>
                        <div className={AboutCSS.text}>Github</div>
                        <div className={AboutCSS.bar}></div>
                    </div>

                    <div className={AboutCSS.fullbar}>
                        <div className={AboutCSS.text}>Python</div>
                        <div className={AboutCSS.bar}></div>
                    </div>

                    <div className={AboutCSS.fullbar}>
                        <div className={AboutCSS.text}>C++</div>
                        <div className={AboutCSS.bar}></div>
                    </div>

            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}

export default About;
