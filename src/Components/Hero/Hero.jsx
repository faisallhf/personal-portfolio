import React from "react";
import HeaderCSS from "./Hero.module.css";
import Hero from "./../../../public/profile.jpg";
import Socials from "../socials/socials";
import { links, icons } from "../../constants/constants";
import {Typewriter} from "react-simple-typewriter";
import CV from "./../../../public/FAISAL ISHAQ.pdf";

function Header() {
    AOS.init();
    return (
        <>
        <section id="hero">
            <div className={HeaderCSS.hero}>
                <div className={HeaderCSS.hero_info}>

                    <h2 data-aos="fade-right" data-aos-duration="1500" data-aos-delay="1000">Hi, I am {' '}
                        <span>
                            {}
                        <Typewriter
                            words={['Faisal Ishaq Khan','Mobile App Developer', 'Web Developer', 'Video-Editor']}
                            loop={true}
                            cursor
                            cursorStyle='|'
                            typeSpeed={120}
                            deleteSpeed={50}
                            delaySpeed={700}
                        />
                        </span>
                    </h2>   
                    <p data-aos="fade-right" data-aos-duration="1500" data-aos-delay="1100">I design and code beautifully simple things.<br />I like to code things from scratch and enjoy it.</p>

                    <div className={HeaderCSS.social_icons} data-aos="fade" data-aos-duration="1500" data-aos-delay="1200">
                        {links.map((value, index) => (
                            <Socials key={index} link={value} icon={icons[index]} />
                        ))}
                    </div>

                    <div className={HeaderCSS.hero_btns}>
                    <a href={CV} target="_blank"><button value="Download" data-aos="fade-right" data-aos-duration="1500" data-aos-delay="1300">Download CV</button></a>
                    <a href="#contact"><button data-aos="fade-right" data-aos-duration="1500" data-aos-delay="1400">Contact Me</button></a>
                    </div>
                </div>

                <div className={HeaderCSS.hero_img} data-aos="fade-left" data-aos-duration="1500" data-aos-delay="1500">
                    <img src={Hero} alt="Hero-Image" />
                </div>
            </div>
        </section>
        </>
    );
}

export default Header;