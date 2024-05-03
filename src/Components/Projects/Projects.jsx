import React from 'react'
import ProjectsCSS from './Projects.module.css'
import movies_sitepng from "./../../../public/movies-sites.png";
import portfoliopng from "./../../../public/portfolio.png";
import agencypng from "./../../../public/agency.png";
import weatherpng from "./../../../public/weather.png";
import livepng from "./../../../public/live.png";
import githubpng from "./../../../public/github.png";

function Projects() {
    return (
        <>
            <section id="projects">
                <div>
                    <h1 className={ProjectsCSS.pro}>Projects</h1>
                    <div className={ProjectsCSS.flex_container}>
                        <div className={ProjectsCSS.flex_child}>

                            <div className={ProjectsCSS.movies}>
                                <img src={movies_sitepng} alt="movies site" />
                            </div>

                            <h1 className={ProjectsCSS.mh1}>Movies Site</h1>

                            <p className={ProjectsCSS.pdata}>All your favorite movies, websites, software, and mobile apps in one place with easy download links.
                                .</p>

                            <a href="https://movies-website-swart.vercel.app/" target="_blank"><div className={ProjectsCSS.live}> <img src={livepng} alt="Live Png" />Live Preview</div> </a>
                            <a href="https://github.com/faisallhf/movies-website-" target="_blank"><div className={ProjectsCSS.repo}> <img src={githubpng} alt="Github Png" />Github Repository</div> </a>
                        </div>

                        <div className={ProjectsCSS.flex_child}>
                            <div className={ProjectsCSS.movies}>
                                <img src={portfoliopng} alt="portfolio site" />
                            </div>
                            <h1 className={ProjectsCSS.mh1}>Portfolio</h1>
                            <p className={ProjectsCSS.pdata}>Stunning Personal Website using React JS, Type-Writer and Different Animations</p>

                            <a href="https://uzzam-portfolio.netlify.app/" target="_blank"><div className={ProjectsCSS.live}> <img src={livepng} alt="Live Png" />Live Preview</div></a>
                            <a href="https://github.com/faisallhf/personal-portfolio" target="_blank"><div className={ProjectsCSS.repo}> <img src={githubpng} alt="Github Png" />Github Repository</div> </a>
                        </div>
                    </div>


                    <div className={ProjectsCSS.flex_container}>
                        <div className={ProjectsCSS.flex_child}>
                            <div className={ProjectsCSS.movies}>
                                <img src={weatherpng} alt="weather site" />
                            </div>
                            <h1 className={ProjectsCSS.mh1}>Weather App</h1>
                            <p className={ProjectsCSS.pdata}>Weather App using weather Api</p>
                            <a href="https://weather-api-zeta-lac.vercel.app/" target="_blank"><div className={ProjectsCSS.live}> <img src={livepng} alt="Live Png" />Live Preview</div></a>
                            <a href="https://github.com/faisallhf/weather-app-api" target="_blank"><div className={ProjectsCSS.repo}> <img src={githubpng} alt="Github Png" />Github Repository</div> </a>
                        </div>

                        <div className={ProjectsCSS.flex_child}>
                            <div className={ProjectsCSS.movies}>
                                <img src={agencypng} alt="agency site" />
                            </div>
                            <h1 className={ProjectsCSS.mh1}>Toursim Agency </h1>
                            <p className={ProjectsCSS.pdata}>Toursim Agency for business travelers, and special interest travelers</p>
                            <a href="https://lhf-agencyy.vercel.app/" target="_blank"><div className={ProjectsCSS.live}> <img src={livepng} alt="Live Png" />Live Preview</div></a>
                            <a href="https://github.com/faisallhf/lhf-agencyy" target="_blank"><div className={ProjectsCSS.repo}> <img src={githubpng} alt="Github Png" />Github Repository</div> </a>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Projects;