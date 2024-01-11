import { UpMotion } from '../animated/Motion'

const Hero: React.FC = () => {
  return (
    <section
      id='#'
      className='flex flex-col h-[calc(100dvh-100px)] justify-center text-white max-w-5xl mt-[100px] w-full p-12 border border-zinc-700 transition-all font-inter'
    >
      <UpMotion>
        <p className='text-cyan-400 font-sans mb-2'>Hi, my name is</p>
      </UpMotion>

      <UpMotion delay={0.2}>
        <h1 className='text-[clamp(20px,8vw,80px)] leading-tight font-semibold tracking-tighter'>Geisiel Melo.</h1>
      </UpMotion>

      <UpMotion delay={0.4}>
        <h2 className='text-[clamp(12px,5vw,60px)] leading-none font-semibold tracking-tighter'>I'm a Full Stack Developer</h2>
      </UpMotion>

      <UpMotion delay={0.6}>
        <p className='text-[clamp(9px,5vw,16px)] mt-6 max-w-xl leading-tight text-zinc-600'>
          Software engineer with experience in web application development. I'm currently seeking new opportunities to apply my skills and knowledge. With a
          special focus on creating accessible and user-centric solutions, I am committed to building products that stand out and provide amazing experiences
          for users.
        </p>
      </UpMotion>
    </section>
  )
}

export default Hero
