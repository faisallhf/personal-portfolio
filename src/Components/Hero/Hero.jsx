import React from "react";
import HeaderCSS from "./Hero.module.css";
import Hero from "./../../../public/profile.jpg";
import Socials from "../socials/socials";
import { links, icons } from "../../constants/constants";
import {Typewriter} from "react-simple-typewriter";
import CV from "./../../../public/FAISAL ISHAQ.pdf";

function Header() {

    return (
        <>
        <section id="home">
            <div className={HeaderCSS.hero}>
                <div className={HeaderCSS.hero_info}>

                    <h2>Hi, I am {' '}
                        <span>
                            {}
                        <Typewriter
                            words={['Faisal Ishaq Khan', 'Web Developer', 'Video-Editor']}
                            loop={true}
                            cursor
                            cursorStyle='|'
                            typeSpeed={120}
                            deleteSpeed={50}
                            delaySpeed={700}
                        />
                        </span>
                    </h2>   
                    <p>I have a degree in Software Engineering.<br />I Love Implementing new designs .</p>

                    <div className={HeaderCSS.social_icons}>
                        {links.map((value, index) => (
                            <Socials key={index} link={value} icon={icons[index]} />
                        ))}
                    </div>

                    <div className={HeaderCSS.hero_btns}>
                    <a href={CV} target="_blank"><button value="Download">Download CV</button></a>
                    <button>Contact Me</button>
                    </div>
                </div>

                <div className={HeaderCSS.hero_img}>
                    <img src={Hero} alt="Hero-Image" />
                </div>
            </div>
        </section>
        </>
    );
}

export default Header;