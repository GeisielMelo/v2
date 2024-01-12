import { useGithubData } from '../context/GithubDataContext'
import Nav from '../components/sections/Nav'
import ArchiveData from '../components/sections/ArchiveData'
import Footer from '../components/sections/Footer'

const Archive: React.FC = () => {
  const { data, loading } = useGithubData()

  return (
    <>
      <Nav />
      <main className='flex flex-col items-center px-4 sm:px-8 lg:px-24 dark:bg-black'>
        <ArchiveData data={data} loading={loading} />
      </main>
      <Footer />
    </>
  )
}

export default Archive
