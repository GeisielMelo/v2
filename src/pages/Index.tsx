import Hero from '../components/sections/Hero'
import Footer from '../components/sections/Footer'
import About from '../components/sections/About'
import Contact from '../components/sections/Contact'
import Projects from '../components/sections/Projects'
import Featured from '../components/sections/Featured'
import { useGithubData } from '../context/GithubDataContext'

const Index: React.FC = () => {
  const { data } = useGithubData()

  return (
    <>
      <main className='flex flex-col items-center px-4 sm:px-8 lg:px-24'>
        <Hero />
        <About />
        <Featured />
        <Projects data={data}/>
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default Index
