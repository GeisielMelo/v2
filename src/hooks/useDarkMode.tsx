import { useEffect, useState } from 'react'



export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const sysTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
    const userTheme = localStorage.getItem('theme')

    if (!userTheme) {
      setIsDarkMode(sysTheme)
    } else {
      setIsDarkMode(userTheme === 'dark')
    }
  }, [])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDarkMode])

  const setDarkMode = (value: boolean) => {
    if (value) {
      localStorage.setItem('theme', 'dark')
    } else {
      localStorage.removeItem('theme')
    }
    setIsDarkMode(value)
  }

  return { isDarkMode, setDarkMode }
}
