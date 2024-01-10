const Hero: React.FC = () => {
  return (
    <section
      id='#'
      className='flex flex-col h-screen justify-center text-white max-w-5xl w-full p-12 border border-zinc-700 transition-all'
    >
      <p className='text-[rgb(2,190,199)] font-inter font-sans mb-2'>
        Hi, my name is
      </p>
      <h1 className='text-[clamp(20px,8vw,80px)] font-inter font-sans leading-tight font-semibold tracking-tighter'>
        Geisiel Melo.
      </h1>
      <h2 className='text-[clamp(12px,5vw,60px)] font-inter font-sans leading-none font-semibold tracking-tighter'>
        I'm a Full Stack Developer
      </h2>
      <p className='text-[clamp(9px,5vw,16px)] mt-6 font-inter font-sans max-w-xl leading-tight'>
        Software engineer with experience in web application development. I'm
        currently seeking new opportunities to apply my skills and knowledge.
        With a special focus on creating accessible and user-centric solutions,
        I am committed to building products that stand out and provide amazing
        experiences for users.
      </p>
    </section>
  )
}

export default Hero