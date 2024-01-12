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

export const Featured: React.FC<FeaturedProps> = ({
  floatContent = 'right',
  name,
  description,
  topics,
  homepage,
  html_url,
  image_preview,
}) => {
  return (
    <div
      className={`flex w-full items-center relative my-16 rounded-lg ${
        floatContent === 'right' && 'md:justify-end'
      }`}
    >
      <div
        className={`z-10 p-12 static md:absolute left-0 flex flex-col justify-center md:bg-none bg-[url(${image_preview})] bg-center bg-cover bg-no-repeat xs:w-full ${
          floatContent === 'right' ? 'items-start' : 'items-end'
        }`}
      >
        <h1>Featured Project</h1>
        <h2 className='my-2 text-[clamp(24px,5vw,28px)] font-semibold'>
          {name}
        </h2>

        <p
          className={`max-w-lg my-6 bg-zinc-700 px-4 py-2 rounded-lg ${
            floatContent === 'right' ? 'text-left' : 'text-right'
          }`}
        >
          {description}
        </p>

        <ul className='flex flex-wrap mt-auto gap-2 my-2'>
          {topics.map((_, key) => (
            <li key={key}>{_}</li>
          ))}
        </ul>

        <div className='flex gap-2 mt-auto'>
          <button onClick={() => openNewTab(html_url)}>
            <GitHub />
          </button>
          <button onClick={() => openNewTab(homepage)}>
            <OpenInNew />
          </button>
        </div>
      </div>

      <div className='max-w-xl hidden md:inline-block relative'>
        <img className='rounded-lg' src={image_preview} alt='' />
        <div className='absolute inset-0 bg-black bg-opacity-80' />
      </div>
    </div>
  )
}
