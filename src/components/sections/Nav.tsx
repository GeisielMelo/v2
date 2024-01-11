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
    { name: 'Archive', url: '/#archive' },
  ]

  const handleInternalLinkClick = (url: string) => {
    if (openMenu) setOpenMenu(false)
    internalLinkClick(url)
  }

  return (
    <nav className='fixed top-0 flex w-full h-16 justify-between items-center px-8 text-white bg-black'>
      <div className='flex items-center w-8 h-8' onClick={() => handleInternalLinkClick('/#')}>
        <img src={logo} alt='Logo image' />
      </div>

      <div className='w-full'>
        <ul className='items-center gap-4 px-4 lg:flex'>
          {menu.map((element, key) => (
            <li key={key} onClick={() => handleInternalLinkClick(element.url)}>
              {element.name}
            </li>
          ))}
        </ul>

        <ul className='items-center gap-4 px-4 lg:flex'>
          <li>Contact</li>
          <li>Resume</li>
          <li>LinkedIn</li>
        </ul>
      </div>

      <button onClick={() => setOpenMenu(!openMenu)} className='block lg:hidden'>
        {openMenu ? <CloseRounded /> : <MenuRounded />}
      </button>
    </nav>
  )
}

export default Nav
