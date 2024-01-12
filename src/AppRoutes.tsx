import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './pages/Index'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Index />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
