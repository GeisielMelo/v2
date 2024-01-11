const About: React.FC = () => {
  return (
    <section className='flex flex-col max-w-5xl w-full px-12 py-28 gap-16 border border-t-0 border-zinc-700 text-white'>
      <div className='flex gap-8 md:gap-16 flex-col md:flex-row'>
        <div className='max-w-36 w-full'>
          <h1 className='font-semibold'>BACKGROUND</h1>
        </div>
        <div className='flex flex-col gap-4'>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore perspiciatis incidunt illum placeat possimus veniam vitae omnis aliquid molestiae
            distinctio voluptas fugiat non temporibus ullam iusto, eligendi saepe et ab.
          </p>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore perspiciatis incidunt illum placeat possimus veniam vitae omnis aliquid molestiae
            distinctio voluptas fugiat non temporibus ullam iusto, eligendi saepe et ab.
          </p>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore perspiciatis incidunt illum placeat possimus veniam vitae omnis aliquid molestiae
            distinctio voluptas fugiat non temporibus ullam iusto, eligendi saepe et ab.
          </p>
        </div>
      </div>

      <div className='flex gap-8 md:gap-16 flex-col md:flex-row'>
        <div className='max-w-36 w-full'>
          <h1 className='font-semibold'>SKILLS</h1>
        </div>

        <div className='grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-8 justify-between w-full'>
          <ul>
            <h1 className='font-semibold mb-2'>LANGUAGES</h1>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Python</li>
            <li>Node</li>
          </ul>

          <ul>
            <h1 className='font-semibold mb-2'>FRAMEWORKS</h1>
            <li>Styled Components</li>
            <li>Tailwind</li>
            <li>React</li>
          </ul>

          <ul>
            <h1 className='font-semibold mb-2'>TOOLS</h1>
            <li>Chrome DevTools</li>
            <li>Git & Github</li>
            <li>Postman</li>
            <li>VS Code</li>
            <li>Figma</li>
          </ul>

          <ul>
            <h1 className='font-semibold mb-2'>OTHERS</h1>
            <li>Firebase</li>
            <li>Express</li>
            <li>SQLite</li>
            <li>Mongo</li>
            <li>MySQL</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
