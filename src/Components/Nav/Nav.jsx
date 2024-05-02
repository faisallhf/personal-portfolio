import React, { useState } from "react";
import NavCSS from './Nav.module.css'



function Nav(){

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
                    <div className= {NavCSS.logo}>
                    <h2><span>Faisal</span> Ishaq Khan</h2>
                    </div>
                    <div className={NavCSS.nav} style={{height:navbar.height,padding:navbar.padding}}>
                        <a href="#">Home</a>
                        <a href="#">About Me</a>
                        <a href="#">Projects</a>
                        <a href="#">Contact Me</a>
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