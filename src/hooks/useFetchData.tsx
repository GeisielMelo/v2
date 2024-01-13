import { useState, useEffect } from 'react'

type FetchDataError = {
  status: number
  message?: string
}

type FetchDataReturnType<T> = {
  data: T | null
  loading: boolean
  error: FetchDataError | null
}

export function useFetchData<T>(url: string): FetchDataReturnType<T> {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<FetchDataError | null>(null)

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const response = await fetch(url)

        if (response.status === 404) {
          throw { status: response.status, message: 'Not Found' }
        }

        if (response.status === 403) {
          throw { status: response.status, message: 'Forbidden' }
        }

        const jsonData = await response.json()
        setData(jsonData)
      } catch (error) {
        setError(error as FetchDataError)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { data, loading, error }
}
