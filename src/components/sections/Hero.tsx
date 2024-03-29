import { UpMotion } from '../animated/Motion'

const Hero: React.FC = () => {
  return (
    <section
      id='#'
      className='flex flex-col h-[calc(100dvh-60px)] justify-center max-w-5xl mt-[60px] 
      w-full px-4 md:p-12 transition-all font-inter dark:text-white'
    >
      <UpMotion>
        <p className='text-cyan-400 font-inter mb-2 font-semibold dark:font-normal'>
          Hi, my name is
        </p>
      </UpMotion>

      <UpMotion delay={0.2}>
        <h1 className='text-[clamp(20px,8vw,80px)] leading-tight font-semibold tracking-tighter'>
          Geisiel Melo.
        </h1>
      </UpMotion>

      <UpMotion delay={0.4}>
        <h2 className='text-[clamp(12px,5vw,60px)] leading-none font-semibold tracking-tighter'>
          I'm a Full Stack Developer
        </h2>
      </UpMotion>

      <UpMotion delay={0.6}>
        <p className='text-[clamp(9px,5vw,16px)] mt-6 max-w-xl leading-tight text-zinc-600'>
          Software engineer with experience in{' '}
          <span className='text-cyan-400 dark:text-white font-semibold dark:font-normal'>
            web development
          </span>
          . I'm currently
          <span className='text-cyan-400 dark:text-white font-semibold dark:font-normal'>
            {' '}
            seeking new opportunities
          </span>{' '}
          to apply my skills and knowledge. With a special focus on creating
          accessible and user-centric solutions, I am committed to building
          products that stand out and provide amazing experiences for users.
        </p>
      </UpMotion>
    </section>
  )
}

export default Hero
