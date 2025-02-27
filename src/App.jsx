import './App.css'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import Navbar from './components/NavBar'
import Sidebar from './components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import ItemDetails from './pages/ItemDetails'
import NotFound from './pages/NotFound'
import About from './pages/About'

function App() {
  

  return (
    <>
    <Navbar />
    <Sidebar />
    <Routes>
      <Route path = "/" element ={<HomePage />}></Route>
      <Route path = "/recipes/:recipeId" element={<ItemDetails/>}></Route>
      <Route path='/about' element={<About/>}></Route>

      <Route path = "*" element={<NotFound/>}></Route>
    </Routes>
    <Footer />
    </>
  )
}

export default App
