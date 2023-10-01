import { fetchProducts } from '../../redux/slice/products';
import Shopsection from './Shopsection/ShopSection';
import Poster from './Poster/Poster'
import styles from './home.module.css'
import { useEffect } from 'react';
import {useSelector,useDispatch } from 'react-redux';
 

const Home = () => {

  const  products= useSelector((state) => state.products.data);
  const dispatch = useDispatch()
  const state = useSelector((state) => state )
  // console.log("State", state)

  useEffect(() =>{
    dispatch(fetchProducts())
  }, [dispatch])
  
   console.log(products)
  return (
    <div className={styles.content}>
      <div className={styles.poster}>
        <Poster />
      </div>
     
      <Shopsection products={products?products:[]}/>

    </div>
        
         
    
  )
}

export default Home