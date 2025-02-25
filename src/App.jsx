import './App.css'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import Navbar from './components/NavBar'
import Sidebar from './components/Sidebar'

function App() {
 

  return (
    <>
    <Navbar />
    
    <div style={{display: "flex", flexDirection: "row"}} >
      <Sidebar />
      <HomePage />
    </div>

    <Footer />
    </>
       
  )
}

export default App
