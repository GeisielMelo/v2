import config from '../../config/config'

const About: React.FC = () => {
  const { languages, framework, tools, others } = config.tech

  return (
    <section className='flex flex-col max-w-5xl w-full px-12 py-28 gap-16 border border-t-0 border-zinc-700 text-white font-inter'>
      <div className='flex gap-8 md:gap-16 flex-col md:flex-row'>
        <div className='max-w-36 w-full'>
          <h1 className='text-cyan-400 font-inter font-semibold'>BACKGROUND</h1>
        </div>
        <div className='flex flex-col gap-4'>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore perspiciatis incidunt illum placeat possimus veniam vitae omnis aliquid molestiae distinctio voluptas
            fugiat non temporibus ullam iusto, eligendi saepe et ab.
          </p>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore perspiciatis incidunt illum placeat possimus veniam vitae omnis aliquid molestiae distinctio voluptas
            fugiat non temporibus ullam iusto, eligendi saepe et ab.
          </p>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore perspiciatis incidunt illum placeat possimus veniam vitae omnis aliquid molestiae distinctio voluptas
            fugiat non temporibus ullam iusto, eligendi saepe et ab.
          </p>
        </div>
      </div>

      <div className='flex gap-8 md:gap-16 flex-col md:flex-row'>
        <div className='max-w-36 w-full'>
          <h1 className='text-cyan-400 font-inter font-semibold'>SKILLS</h1>
        </div>

        <div className='grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-8 justify-between w-full'>
          <ul>
            <h1 className='font-semibold mb-2 text-zinc-600'>LANGUAGES</h1>
            {languages.map((element, key) => (
              <li className='text-xs font-fira' key={key}>
                {element}
              </li>
            ))}
          </ul>

          <ul>
            <h1 className='font-semibold mb-2 text-zinc-600'>FRAMEWORKS</h1>
            {framework.map((element, key) => (
              <li className='text-xs font-fira' key={key}>
                {element}
              </li>
            ))}
          </ul>

          <ul>
            <h1 className='font-semibold mb-2 text-zinc-600'>TOOLS</h1>
            {tools.map((element, key) => (
              <li className='text-xs font-fira' key={key}>
                {element}
              </li>
            ))}
          </ul>

          <ul>
            <h1 className='font-semibold mb-2 text-zinc-600'>OTHERS</h1>
            {others.map((element, key) => (
              <li className='text-xs font-fira' key={key}>
                {element}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
