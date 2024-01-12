import { MenuRounded, CloseRounded } from '@mui/icons-material'
import logo from '../../assets/logo.png'
import { useState, useEffect } from 'react'
import { internalLinkClick } from '../../utils/handleFunctions'

const Nav: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [activeClass, setActiveClass] = useState('0px')
  const [prevScrollPos, setPrevScrollPos] = useState(0)

  const menu = [
    { name: 'About', url: '/#about' },
    { name: 'Featured', url: '/#featured' },
    { name: 'Projects', url: '/#projects' },
    { name: 'Contact', url: '/#contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos =
        window.scrollY || document.documentElement.scrollTop

      if (currentScrollPos > prevScrollPos) {
        setActiveClass('-100px')
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
    if (openMenu) setOpenMenu(false)
    internalLinkClick(url)
  }

  return (
    <nav
      className='fixed flex justify-between w-full h-16 items-center px-8 border-b z-50 bg-white font-inter dark:border-b-zinc-700 dark:text-white dark:bg-black shadow-lg'
      style={{ top: activeClass, transition: 'top 0.2s ease' }}
    >
      <div
        className='flex items-center w-8 h-8 bg-cyan-400 rounded-full dark:bg-transparent'
        onClick={() => handleInternalLinkClick('/#')}
      >
        <img className='hover:cursor-pointer' src={logo} alt='Logo image' />
      </div>

      <ul className='hidden lg:flex gap-4'>
        {menu.map((element, key) => (
          <li
            className='py-1 px-2 hover:cursor-pointer hover:underline decoration-cyan-400'
            key={key}
            onClick={() => handleInternalLinkClick(element.url)}
          >
            {element.name}
          </li>
        ))}
      </ul>

      <button
        onClick={() => setOpenMenu(!openMenu)}
        className='block lg:hidden'
      >
        {openMenu ? <CloseRounded /> : <MenuRounded />}
      </button>
    </nav>
  )
}

export default Nav
