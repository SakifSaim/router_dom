import { Route, Routes } from 'react-router-dom'
import About from '../../01-VanLife/pages/About'
import Home from '../pages/Home'
import Nav from '../Nav'

function VanlifeRoute() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default VanlifeRoute
