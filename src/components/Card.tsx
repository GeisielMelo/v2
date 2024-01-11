import { GitHub, OpenInNew, Folder } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import { openNewTab } from '../utils/handleFunctions'
import { RepoProps } from '../context/GithubDataContext'

export const Card: React.FC<RepoProps> = ({ name, description, topics, homepage, html_url }) => {
  const navigate = useNavigate()

  return (
    <div className='flex flex-col p-4 text-left rounded-md border border-zinc-700 hover:shadow-custom'>
      <div className='flex justify-between w-full'>
        <button className='hover:text-cyan-400' onClick={() => navigate('/archive')}>
          <Folder />
        </button>
        <div className='flex gap-2'>
          {homepage && (
            <button className='hover:text-cyan-400' onClick={() => openNewTab(homepage)}>
              <OpenInNew />
            </button>
          )}
          {html_url && (
            <button className='hover:text-cyan-400' onClick={() => openNewTab(html_url)}>
              <GitHub />
            </button>
          )}
        </div>
      </div>

      <h1 className='text-lg my-4'>{name}</h1>

      <p className='text-sm mb-12'>{description}</p>

      {topics && (
        <ul className='flex flex-wrap-reverse mt-auto text-zinc-700'>
          {topics.map((element, key) => (
            <li key={key} className='p-1 m-1 text-xs rounded border capitalize font-fira border-zinc-700 hover:border-cyan-400 hover:text-white'>
              {element}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
