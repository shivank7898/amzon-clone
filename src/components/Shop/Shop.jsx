import  styles from './shop.module.css'
import ProductCard from '../ProductCard/ProductCard'
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from '../../redux/slice/products';
import Sidebar from '../Sidebar/Sidebar';


const Shop = () => {
  const dispatch = useDispatch()
  const  products= useSelector((state) => state.products.data);

  useEffect(() =>{
    dispatch(fetchProducts())
  }, [dispatch])

  return (
    <div className={styles.productPage} style={{display:"flex",marginBottom:"20px",justifyContent:"space-around"}}>
      <div className={styles.sideBar} style={{width:"15%"}}>
        <Sidebar />
      </div>
      <div className={styles.productCards} style={{display:"flex",marginTop:"20px",flexWrap:"wrap",gap:"20px",width:"90%",backgroundColor:""}}>
      {
        products?.map((product) => (
          <ProductCard key={product?.id} product={product?product:[]}
          style={{width:"10%"}}/>
          ))
      }
        </div>
    </div>
     
  )
}

export default Shop