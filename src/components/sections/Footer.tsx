import { GitHub, LinkedIn, WhatsApp, LightMode } from '@mui/icons-material'
import { openNewTab } from '../../utils/handleFunctions'
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
          <button className={styledButtons}>
            <LightMode />
          </button>
          <button className={styledButtons} onClick={() => openNewTab(config.url.whatsApp)}>
            <WhatsApp />
          </button>
          <div className='hidden h-36 w-[0.125rem] bg-white lg:block' />
        </div>
      </div>

      <div className='w-full flex justify-center py-4'>
        <p className='max-w-max px-2 text-zinc-700 ease-in-out duration-300 hover:cursor-pointer hover:text-cyan-400' onClick={() => openNewTab(config.url.github)}>
          © Designed & Built by {config.contact.git}.
        </p>
      </div>
    </footer>
  )
}

export default Footer
