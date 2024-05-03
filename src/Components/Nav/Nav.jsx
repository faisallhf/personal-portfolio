import React, { useState } from "react";
import NavCSS from './Nav.module.css'



function Nav(){
    AOS.init();
    let [navbar, setnavbar] = useState({height: 0,   padding:0})

    const activeNav = ()=>{
        if(navbar.height == 0){
            setnavbar({height: "330px", padding:"20px"})
        }
        else{
            setnavbar({height: 0, padding:0})
        }
    }

    return(
        <>
            <section>
                <header className= {NavCSS.header}>
                    <div className= {NavCSS.logo} data-aos="fade" data-aos-duration="1500">
                    <h2><span>Faisal</span> Ishaq Khan</h2>
                    </div>
                    <div className={NavCSS.nav} style={{height:navbar.height,padding:navbar.padding}}>
                        <a href="#hero" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="200">Home</a>
                        <a href="#about" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="300">About Me</a>
                        <a href="#projects" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="400">Projects</a>
                        <a href="#contact" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="500">Contact Me</a>
                    </div>
                    <div className={NavCSS.bars} onClick={activeNav} >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </header>
            </section>
        </>
    )

}
export default Nav