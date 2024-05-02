import react from "react"


const Socials = ({ link, icon }) => {
    return <a href={link} target="_blank"><i className={icon}></i></a>
}

export default Socials;