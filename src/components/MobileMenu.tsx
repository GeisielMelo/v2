import logo from '../assets/logo.png'
import config from '../config/config'
import { MenuRounded, CloseRounded } from '@mui/icons-material'

type Menu = {
  handleInternalLinkClick: (url: string) => void
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
  openMenu: boolean
}

export const MobileMenu: React.FC<Menu> = ({ handleInternalLinkClick, setOpenMenu, openMenu }) => {
  const { navBar } = config

  return (
    <ul className='fixed top-0 left-0 h-[100dvh] w-full z-40 flex flex-col items-center justify-center lg:hidden gap-4 backdrop-blur-md bg-white/80  dark:text-white dark:bg-black/80 '>
      <div
        className='flex items-center w-8 h-8 bg-cyan-400 rounded-full dark:bg-transparent'
        onClick={() => handleInternalLinkClick('/#')}
      >
        <img className='hover:cursor-pointer mb-8' src={logo} alt='Logo image' />
      </div>
      <button
        onClick={() => setOpenMenu(!openMenu)}
        className='fixed top-5 right-8'
      >
        {openMenu ? <CloseRounded /> : <MenuRounded />}
      </button>
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
  )
}
