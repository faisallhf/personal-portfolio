import React, { useEffect, useState } from "react";
import HeaderCSS from "./Header.module.css";
import Hero from "./../../../public/profile.jpg";
import Socials from "../socials/socials";
import { links, icons } from "../../constants/constants";

function Header() {

    let i=0, j=0;
    let text = ["Hi, I am Faisal Ishaq Khan", "This is a test text"];
    let textI = "";
    const [textCleared, setTextCleared] = useState(false);
    const [headingText, setheadingText] = useState("")
    let random = 300;
    let myLoop;

    useEffect(() => {
        _typeWriter();
    }, [])

    let _typeWriter = () => {
         myLoop = setInterval(() => {
                    _eachLoop(i);
        }, random)
    }

    const _eachLoop = () => {
        if(!(i < text[j].length)) {
            textI = "";
            i = 0;
            setheadingText(textI);
            setTextCleared(true);
        }else if (i < text[j].length) {
            textI += text[textCleared ? 1 : 0].charAt(i).concat("|");
            setheadingText(textI);
            textI = textI.slice(0, -1)
            if(i == text[j].length) {
                console.log(textI);
                setTextCleared(false);   
            }
            i++;
        } else {
            console.log("Hello loop should restart");
        }
    }

    const _endInterval = () => clearInterval(myLoop);

    function _getRandomNumber(intervals) {
        let randomIndex = Math.floor(Math.random() * intervals.length);
        return intervals[randomIndex];
    }
    

    return (
        <>
            <section id="home">
                <div className={HeaderCSS.hero}>
                    <div className={HeaderCSS.hero_info}>
                            <h2 style={{ color: 'white' }}>{ headingText }</h2>
                            <p>I have a degree in Computer Science.<br />I know some languages like Python and Java.</p>
                        
                        <div className={HeaderCSS.social_icons}>
                            { 
                                links.map((value, index, _) => {
                                    return <Socials key={index} link={value} icon={icons[index]} />
                                })
                            }
                        </div> 
                       
                        <div className={HeaderCSS.hero_btns}>
                            <button>Hire Me</button>
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
