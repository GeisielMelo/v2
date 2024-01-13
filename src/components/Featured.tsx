import { GitHub, OpenInNew } from '@mui/icons-material'
import { openNewTab } from '../utils/handleFunctions'

type FeaturedProps = {
  floatContent: 'left' | 'right'
  name: string
  description: string
  topics: string[]
  homepage: string
  html_url: string
  image_preview: string
}

export const Featured: React.FC<FeaturedProps> = ({ floatContent = 'right', name, description, topics, homepage, html_url, image_preview }) => {
  return (
    <div className={`relative flex w-full items-center my-20 ${floatContent === 'right' && 'md:justify-end'}`}>
      <div className={`z-10 p-4 md:p-12 static md:absolute left-0 flex flex-col justify-center xs:w-full ${floatContent === 'right' ? 'items-start' : 'items-end'}`}>
        <h1 className='text-cyan-400'>Featured Project</h1>
        <h2 className='my-2 text-[clamp(24px,5vw,28px)] font-semibold text-white bg-black/55 md:p-1 md:rounded-lg dark:bg-transparent'>{name}</h2>

        <p className={`max-w-lg my-6 p-2 bg-black/55 rounded-lg text-white text-md ${floatContent === 'right' ? 'text-left' : 'text-right'}`}>{description}</p>

        <ul className='flex flex-wrap mt-auto gap-2 my-2 text-white md:bg-black/55 md:p-1 md:rounded-lg dark:bg-transparent'>
          {topics.map((_, key) => (
            <li key={key}>{_}</li>
          ))}
        </ul>

        <div className='flex gap-2 mt-auto text-cyan-400'>
          <button className='hover:text-cyan-200' onClick={() => openNewTab(html_url)}><GitHub /></button>
          <button className='hover:text-cyan-200' onClick={() => openNewTab(homepage)}><OpenInNew /></button>
        </div>
      </div>

      <div className='max-w-xl hidden md:inline-block relative '>
        <img className='rounded-lg' src={image_preview} alt='' />
        <div className='absolute inset-0 bg-black bg-opacity-80 rounded-md' />
      </div>

      <div className='inline-block md:hidden absolute top-0 w-full h-full rounded-lg bg-center bg-cover bg-no-repeat blur-[2px]'
      style={{backgroundImage: `url(${image_preview})`}}>
        <div className='absolute inset-0 bg-black bg-opacity-80 rounded-md' />
      </div>
    </div>
  )
}
