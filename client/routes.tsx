import { Routes, Route } from 'react-router-dom'
import App from './src/components/App'
import Home from './src/components/Home'


export const routes = (
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/home" element={<Home />} />

    
  </Routes>
)
