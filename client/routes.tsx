import { Routes, Route } from 'react-router-dom'
import App from './components/App'
import Home from './components/Home'


export const routes = (
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/home" element={<Home />} />
    {/* <Route path="/shop" element={<Shop />} /> */}
    
  </Routes>
)
