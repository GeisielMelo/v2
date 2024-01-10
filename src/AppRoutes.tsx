import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Index from './pages/Index'
import Archive from './pages/Archive'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Index />} />
        <Route path='/archive' element={<Archive />} />
        <Route path='/' element={<Index />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
