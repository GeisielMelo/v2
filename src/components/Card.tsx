import { GitHub, OpenInNew } from '@mui/icons-material'
import { openNewTab } from '../utils/handleFunctions'
import { RepoProps } from '../context/GithubDataContext'

export const Card: React.FC<RepoProps> = ({
  name,
  description,
  topics,
  homepage,
  html_url,
}) => {
  return (
    <div className='flex flex-col p-4 text-left rounded-md shadow-custom-black dark:bg-cyan-600 dark:shadow-md dark:shadow-cyan-300/40'>
      <div className='flex justify-between gap-2'>
        {html_url && (
          <button
            className='hover:text-cyan-400'
            onClick={() => openNewTab(html_url)}
          >
            <GitHub />
          </button>
        )}
        {homepage && (
          <button
            className='hover:text-cyan-400'
            onClick={() => openNewTab(homepage)}
          >
            <OpenInNew />
          </button>
        )}
      </div>

      <h1 className='text-lg my-4'>{name}</h1>
      <p className='text-sm mb-12'>{description}</p>

      {topics && (
        <ul className='flex flex-wrap-reverse mt-auto text-zinc-700'>
          {topics.map((element, key) => (
            <li
              key={key}
              className='p-1 m-1 text-xs rounded border capitalize border-zinc-600 hover:border-cyan-400 dark:hover:text-white hover:font-semibold dark:hover:font-normal'
            >
              {element}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
