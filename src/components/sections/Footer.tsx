import { GitHub, LinkedIn, Email, WhatsApp } from '@mui/icons-material'
import { openNewTab, mailTo } from '../../utils/handleFunctions'
import config from '../../config/config'

const Footer: React.FC = () => {
  const styledButtons = 'ease-in-out duration-300 p-2 border border-transparent hover:text-cyan-400 hover:border-cyan-400 hover:bg-zinc-700'

  return (
    <footer className='text-white py-4 font-inter text-sm'>
      <div className='flex items-center justify-center p-4 gap-4'>
        <div className='flex gap-4 lg:fixed bottom-0 left-8 lg:flex-col lg:items-center'>
          <button className={styledButtons} onClick={() => openNewTab(config.url.github)}>
            <GitHub />
          </button>
          <button className={styledButtons} onClick={() => openNewTab(config.url.linkedIn)}>
            <LinkedIn />
          </button>
          <div className='hidden h-36 w-[0.125rem] bg-white lg:block' />
        </div>
        <div className='flex gap-4 lg:fixed bottom-0 right-8 lg:flex-col lg:items-center'>
          <button className={styledButtons} onClick={() => openNewTab(config.url.whatsApp)}>
            <WhatsApp />
          </button>
          <button className={styledButtons} onClick={() => mailTo(config.contact.email)}>
            <Email />
          </button>
          <div className='hidden h-36 w-[0.125rem] bg-white lg:block' />
        </div>
      </div>

      <p className='py-4 px-2 text-zinc-700'>
        © Designed & Built by{' '}
        <span className='ease-in-out duration-300 hover:cursor-pointer hover:text-cyan-400' onClick={() => openNewTab(config.url.github)}>
          {config.contact.git}
        </span>
        .
      </p>
    </footer>
  )
}

export default Footer
