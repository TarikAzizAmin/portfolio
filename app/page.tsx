import GMap from "./components/GMap"
import About from "./sections/About"
import Contact from "./sections/Contact"
import Hero from "./sections/Hero"
import Testimonials from "./sections/Testimonials"


import dynamic from 'next/dynamic';




const Home = () => {

  return (
    <div className='pt-16 min-h-screen overflow-x-auto overflow-y-auto scrollbar-thin'>

        <Hero />
        <About />
        <Testimonials />
        <Contact />
        
    </div>
  )
}

export default Home