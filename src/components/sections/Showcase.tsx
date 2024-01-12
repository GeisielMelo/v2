import { Featured } from '../Featured'
import featured from '../../config/featured.json'

const Showcase: React.FC = () => {
  const isOdd = (num: number) => num % 2 !== 0

  return (
    <section
      id='featured'
      className='flex flex-col justify-center items-center max-w-5xl w-full px-4 md:px-12 py-28 font-inter dark:text-white'
    >
      <h1 className='text-xl font-semibold dark:font-normal'>Some Things I’ve Built</h1>
      <p className='text-cyan-400 font-inter mt-2 text-center font-semibold dark:font-normal'>
        A catalog of significant personal projects I've undertaken in my spare
        time. 
      </p>

      {featured.map((element, key) => (
        <Featured
          key={key}
          floatContent={isOdd(key) ? 'left' : 'right'}
          name={element.name}
          description={element.description}
          topics={element.topics}
          homepage={element.homepage}
          html_url={element.html_url}
          image_preview={element.image_preview}
        />
      ))}
    </section>
  )
}

export default Showcase
