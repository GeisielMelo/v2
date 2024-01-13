import Hero from '../components/sections/Hero'
import Footer from '../components/sections/Footer'
import About from '../components/sections/About'
import Contact from '../components/sections/Contact'
import Projects from '../components/sections/Projects'
// import Showcase from '../components/sections/Showcase'
import Nav from '../components/sections/Nav'

const Index: React.FC = () => {
  return (
    <>
      <Nav />
      <main className='flex flex-col items-center px-4 sm:px-8 lg:px-24 dark:bg-black'>
        <Hero />
        <About />
        {/* <Showcase /> */}
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default Index
