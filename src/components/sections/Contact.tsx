import { mailTo } from '../../utils/handleFunctions'
import config from '../../config/config'

const Contact: React.FC = () => {
  return (
    <section id='contact' className='flex flex-col items-center text-center max-w-5xl w-full px-4 md:px-12 py-28 gap-16 border border-t-0 border-zinc-700 text-white font-inter'>
      <div className='max-w-[600px] w-full'>
        <p className='text-cyan-400 font-inter'>Let's work together!</p>
        <h1 className='mt-8 text-[clamp(40px,5vw,60px)] font-semibold'>Get In Touch</h1>
        <p className='mb-16 mt-6 px-4'>
          If you have any questions, inquiries, or if you're interested in collaborating on a project, don't hesitate to reach out. My inbox is always open, and I'd love to chat
          and explore how we can work together!
        </p>
        <button className='px-6 py-4 border text-cyan-400 border-cyan-400 rounded hover:bg-zinc-700 ease-in-out duration-300' onClick={() => mailTo(config.contact.email)}>
          Say Hello!
        </button>
      </div>
    </section>
  )
}

export default Contact
