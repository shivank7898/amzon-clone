// import MiniNav from '../Navbar/MiniNav/MiniNav'
// import Navbar from '../Navbar/Navbar'
import ProductCrd from '../ProductCrd/ProductCrd'
import Poster from './Poster/Poster'
import styles from './home.module.css'
 
const Home = () => {
  return (
    <div className={styles.content}>
    <div className={styles.poster}>
      <Poster />
    </div>
    
     <ProductCrd />
    
    </div>
        
         
    
  )
}

export default Home