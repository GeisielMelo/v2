import { MenuRounded, CloseRounded } from '@mui/icons-material'
import logo from '../../assets/logo.png'
import { useState } from 'react'
import { internalLinkClick } from '../../utils/handleFunctions'

const Nav: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const menu = [
    { name: 'About', url: '/#about' },
    { name: 'Featured', url: '/#featured' },
    { name: 'Projects', url: '/#projects' },
  ]

  const handleInternalLinkClick = (url: string) => {
    if (openMenu) setOpenMenu(false)
    internalLinkClick(url)
  }

  return (
    <nav className='flex justify-between top-0 w-full h-16 items-center px-8 text-white bg-black'>
      <div
        className='flex items-center w-8 h-8'
        onClick={() => handleInternalLinkClick('/#')}
      >
        <img src={logo} alt='Logo image' />
      </div>

      <ul className='hidden lg:flex gap-4'>
        {menu.map((element, key) => (
          <li
            className='py-1 px-2'
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
