import styles from './App.css'
import Navbar from './components/Navbar/Navbar'
import MiniNav from './components/Navbar/MiniNav/MiniNav'
import Home from './components/Home/Home'

const App = () => {
  return (
    <div className='App'>
      
        <Navbar />
        <MiniNav />

        <div className={styles.main}>
          <Home />
        </div>
         
         
    </div>
  )
}

export default App
