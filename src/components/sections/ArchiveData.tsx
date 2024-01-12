import { GitHub } from '@mui/icons-material'
import { RepoProps } from '../../context/GithubDataContext'
import { TableTrUpMotion } from '../animated/Motion'

type ProjectsProps = {
  data: RepoProps[] | null
  loading: boolean
}

const ArchiveData: React.FC<ProjectsProps> = ({ data, loading }) => {
  if (loading)
    return (
      <div className='flex flex-col min-h-[calc(100dvh-60px)] justify-center'>
        Loading...
      </div>
    )

  const handleFormatYear = (value: string) => {
    const timestamp = new Date(value)
    return timestamp.getFullYear()
  }

  const handleFormatName = (value: string) => {
    return value.replace(/[-_]+/g, ' ')
  }

  const handleDefineDelay = (value: number): number => {
    const integerPart = Math.floor(value / 10)
    const decimalPart = value % 10
    return parseFloat(`${integerPart}.${decimalPart}`)
  }

  return (
    <section
      id='archive'
      className='flex flex-col min-h-[calc(100dvh-60px)] justify-center  max-w-5xl mt-[60px] w-full px-4 md:p-12 border border-zinc-700 transition-all font-inter text-black dark:text-white'
    >
      <h1 className='text-center'>Archive</h1>
      <p className='text-center mb-16'>A big list of things I’ve worked on</p>
      <table>
        <thead>
          <tr>
            <th className='p-2 hidden xs:block'>Year</th>
            <th className='p-2'>Title</th>
            <th className='p-2 hidden lg:block'>Topics</th>
            <th className='p-2'>Links</th>
          </tr>
        </thead>

        {data?.map((item, indice) => (
          <tbody key={item.id}>
            <TableTrUpMotion delay={handleDefineDelay(indice)}>
              <td className='text-center p-2 hidden xs:block'>
                {handleFormatYear(item.created_at)}
              </td>

              <td className='text-center p-2'>{handleFormatName(item.name)}</td>
              <td className='text-center p-2 hidden lg:block'>
                <ul className='flex flex-wrap justify-center text-xs gap-2'>
                  <li>{item.language}</li>
                  {item.topics.map((topic, index) => (
                    <li key={index}>{handleFormatName(topic)}</li>
                  ))}
                </ul>
              </td>

              <td className='text-center'>
                <button
                  className='ml-2'
                  onClick={() => console.log(item.html_url)}
                >
                  <GitHub />
                </button>
              </td>
            </TableTrUpMotion>
          </tbody>
        ))}
      </table>
    </section>
  )
}

export default ArchiveData
