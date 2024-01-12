import { createContext, useContext, useEffect, useState } from 'react'
import redundancy from '../config/redundancy.json'

export type RepoProps = {
  name: string
  description: string
  topics: string[]
  homepage?: string
  html_url?: string
  language?: string
  created_at: string
  id: number
}

type FetchDataError = {
  status: number
  message?: string
}

type DataProviderProps = {
  children: React.ReactNode
}

type DataContextProps = {
  loading: boolean
  data: RepoProps[] | null
  error: FetchDataError | null
}

const DataContext = createContext<DataContextProps | undefined>(undefined)

// eslint-disable-next-line react-refresh/only-export-components
export const useGithubData = () => {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error('useGithubData must be used inside a GithubDataProvider.')
  }
  return context
}

export const GithubDataProvider: React.FC<DataProviderProps> = ({
  children,
}) => {
  const [data, setData] = useState<RepoProps[] | null>(null)
  const [error, setError] = useState<FetchDataError | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const url = 'https://api.github.com/users/geisielmelo/repos?sort=created'

    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch(url)
        const fetchedData = await response.json()

        setData(fetchedData)
      } catch (error) {
        setData(redundancy as RepoProps[])
        setError(error as FetchDataError)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const value: DataContextProps = {
    loading,
    data,
    error,
  }

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}
