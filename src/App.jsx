import react from 'react'
import './App.css'
import Nav from './Components/Nav/Nav'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Projects from './Components/Projects/Projects'

function App() {
  return (
    <>
      <Nav/>
      <Hero/>
      <About/>
      <Projects/>
    </>
  )
}

export default App;