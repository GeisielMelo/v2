import { Card } from '../Card'
import { RepoProps } from '../../context/GithubDataContext'
import { useState } from 'react'

type ProjectsProps = {
  data: RepoProps[] | null
}

const Projects: React.FC<ProjectsProps> = ({ data }) => {
  const [maxCards, setMaxCards] = useState(6)

  if (!data) return null

  const handleSetCardsNumber = () => {
    if (maxCards >= data.length) setMaxCards(6)
    else setMaxCards(maxCards + 3)
  }

  return (
    <section
      id='projects'
      className='flex flex-col items-center text-center max-w-5xl w-full px-4 md:px-12 py-28  font-inter dark:text-white'
    >
      <h1 className='text-xl font-semibold dark:font-normal'>
        Other Noteworthy Projects
      </h1>
      <p className='text-cyan-400 font-inter mt-2 font-semibold dark:font-normal'>
        Take a look!
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mt-12'>
        {data.slice(0, maxCards).map((element, key) => (
          <Card
            key={key}
            name={element.name}
            description={element.description}
            topics={element.topics}
            homepage={element.homepage}
            html_url={element.html_url}
          />
        ))}
      </div>

      <button
        className='px-6 py-4 mt-12 border text-cyan-400 border-cyan-400 rounded hover:bg-zinc-700 ease-in-out duration-300 font-semibold dark:font-normal'
        onClick={() => handleSetCardsNumber()}
      >
        {maxCards >= data.length ? 'Hide!' : 'More!'}
      </button>
    </section>
  )
}

export default Projects
