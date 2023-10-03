import styles from './productcard.module.css'
import { Link } from 'react-router-dom'
const ProductCard = ({product}) => {

    const maxRating = 5;
 const createStarRating = () => {
    const stars = [];
    for (let i = 1; i <= maxRating; i++) {
      stars.push(
        <span
          key={i}
          className={`${styles.star} ${
          i <= product.rating.rate ? styles.filledStar : styles.emptyStar
        }`}
        >
          {i <= product.rating.rate ? "★" : "☆"}
        </span>
      );
    }
    return stars;
  };


    console.log(product)

  return (
     
      <div className="product-card" style={{backgroundColor:"white",border:"0px solid",borderRadius:"5px",width:"13%",padding:"12px"}}>
        <div style={{backgroundColor:"",width:"100%",height:"200px"}}>
            <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name}  style={{width:"80%",margin:"10px 10px 0px 15px",height:"80%"}}/>   
            </Link>
        </div>
        <Link to={`/product/${product.id}`}>
            <p style={{fontSize:'15px',fontWeight:"800",textOverflow:"ellipsis",maxWidth:"100%",overflow:"hidden",whiteSpace: "nowrap"}}>{product.title}</p>
        </Link>
        
        <span>${product.price}</span>
        <p className={styles.rating} style={{fontSize:"13px"}}>  {createStarRating()} <span className={styles.ratingSpan}>({product.rating.count})</span></p>
      </div>
         
     
  )
}

export default ProductCard