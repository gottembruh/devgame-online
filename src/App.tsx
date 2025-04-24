import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { GlobalStyle } from './styles/global'
import Home from './Home'
import Error from './Error'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <>`
      <BrowserRouter>
        <GlobalStyle></GlobalStyle>
        <Routes>
          <Route path="/404" element={<Error />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
