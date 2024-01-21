import { useState, useEffect } from 'react'
import { internalLinkClick } from '../../utils/handleFunctions'
import { CloseRounded, MenuRounded } from '@mui/icons-material'
import config from '../../config/config'

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { navBar } = config
  const [activeClass, setActiveClass] = useState('0px')
  const [prevScrollPos, setPrevScrollPos] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY || document.documentElement.scrollTop

      if (currentScrollPos > prevScrollPos) {
        setActiveClass('-100px')
        setIsOpen(false)
      } else if (currentScrollPos < prevScrollPos) {
        setActiveClass('0px')
      }

      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [prevScrollPos])

  const handleInternalLinkClick = (url: string) => {
    if (isOpen) setIsOpen(false)
    internalLinkClick(url)
  }

  return (
    <nav
      className='fixed flex justify-between w-full h-16 items-center px-8  z-30 shadow-lg font-inter backdrop-blur-md bg-white/80 dark:text-white dark:bg-black/80 dark:shadow-md dark:shadow-cyan-400/40'
      style={{ top: activeClass, transition: 'top 0.2s ease' }}
    >
      <h1
        className='flex items-center justify-center h-11 w-11 font-semibold text-xl rounded-full  cursor-pointer border-2 border-zinc-500/40 dark:border-zinc-500/80'
        onClick={() => handleInternalLinkClick('/#')}
      >
        G
      </h1>

      <ul className='hidden lg:flex gap-4'>
        {navBar.map((element, key) => (
          <li
            className='py-1 px-2 hover:cursor-pointer hover:underline decoration-cyan-400'
            key={key}
            onClick={() => handleInternalLinkClick(element.url)}
          >
            {element.name}
          </li>
        ))}
      </ul>

      <div className='flex flex-row-reverse items-center md:flex-row lg:hidden'>
        <button className='flex px-4 py-1 gap-1' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <CloseRounded /> : <MenuRounded />}
        </button>
      </div>

      <div
        className={`fixed top-20 right-0 px-4 z-10 rounded-l-lg backdrop-blur-lg shadow bg-white/80 dark:text-white dark:bg-black/90 transition-transform transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className='flex flex-col gap-4 lg:hidden'>
          {navBar.map((element, key) => (
            <li
              className='py-1 px-2 hover:cursor-pointer hover:underline decoration-cyan-400'
              key={key}
              onClick={() => handleInternalLinkClick(element.url)}
            >
              {element.name}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Nav
