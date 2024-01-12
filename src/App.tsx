import AppRoutes from './AppRoutes'
import { GithubDataProvider } from './context/GithubDataContext'

const App: React.FC = () => {
  return (
    <GithubDataProvider>
      <AppRoutes />
    </GithubDataProvider>
  )
}

export default App
