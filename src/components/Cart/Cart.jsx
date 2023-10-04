import { useDispatch, useSelector } from 'react-redux'
import styles from './cart.module.css'
import { removeFromCart } from '../../redux/slice/cartSlice'
import { selectCartCount } from '../../store/store'
import { Link } from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react'
 
// TEST CARD : SUCCESFULL PAYMENT - 4242 4242 4242 4242
// TEST CARD : FAILED PAYMENT - 4000 0000 0000 0002

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.


 
const stripePromise = loadStripe('pk_test_51NwgeqSBSCB6xpqGPUKnUbvApp77lh7qlULBJBpPNm1Ut1N1EA0AQVpPmB3Ff3WjhHhc7x1vR9dIXCTFbYPZ7mKd00UWfjqp2x');

 
const Cart = () => {
   const cartItems = useSelector(state => state.cart)
   const dispatch = useDispatch()
   const cartCount = useSelector(selectCartCount);
   const [loading,setLoading] = useState(false)
   
   
   

   const handleClick = async (e) => {
    try {
    setLoading(true);
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{
        price: "price_1NwjUySBSCB6xpqGsRDxybg2",  
        quantity:1
      }],
      mode: 'payment',
      successUrl: 'http://localhost:3000/thankyou',
      cancelUrl: 'https://example.com/cancel',
    });

    if(error){
      console.log('Error during payment',error)
    }
    }finally{
      setLoading(false)
    }
     
  };

   
   
   const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      const itemPrice = item.product.price.toFixed(0);
      const itemQuantity = item.quantity;
      return total + itemPrice * itemQuantity;
    }, 0);
  };
    
 const handleRemove = (productId) => {
    if (window.confirm('Are you sure you want to remove this item from your cart?')) {
      dispatch(removeFromCart(productId));
    }
  };

   console.log(cartItems)
  return (
      
    <>
      
         
    
    <div className={styles.main} style={{display:"flex",gap:"1.4%" ,backgroundColor:"",width:"75%",margin:"20px 0px 0px 15% "}}>
      <div className={styles.cart}>
      <p style={{fontWeight:"500",fontSize:"25px", }}>Shopping Cart</p>
      {cartItems.length === 0 ? (
            <p  className={styles.empty}style={{fontSize:"30px",margin:"60px 0px 0px 430px",color:""}}>Your cart is empty.</p>
          ) : (
            <> 
      <ul >
      
      {
            cartItems.map(item  => (
            <li style={{display:"flex"}} key={item.product.id}>
              <div className={styles.img}>
              <Link to={`/product/${item.product.id}`}>
                <img src={item.product.image} alt="" />
              </Link>
              </div>
            
              <div className={styles.productInfo}>
                <div>
                  <Link to={`/product/${item.product.id}`}>

                  <p style={{fontSize:'20px',marginBottom:"5px"}}>{item.product.title}</p>
                  </Link>
                  <p style={{fontSize:"19px",fontWeight:"600",marginBottom:"5px"}}><sup style={{fontSize:"11px"}}>₹</sup>{item.product.price.toFixed(0)}.00</p>
                  <p style={{fontSize:"12px",color:"#217600",marginBottom:"5px"}}>In stock</p>
                  <p style={{fontSize:"12px",color:"#5F6060", marginBottom:"5px"}}>Eligible for free FREE Shipping</p>
                </div>
                  <div className={styles.cartBottom}>
                    <input type="checkbox"  style={{width:"10px",marginTop:"26px",marginBottom:"10px"}}/>

                    <label htmlFor="gift" style={{fontSize:"14px",marginLeft:"5px"}}>This will be a gift. <span className={styles.learnMore}>Learn more</span></label>

                    <div  style={{display:"flex", gap:"10px"}} className={styles.infoBottom}>
                      <p className={styles.quantity}>Qty:{item.quantity}</p>
                      <p onClick={() => handleRemove(item.product.id)}> Delete</p>
                      <p>Save for later</p>
                      <p>See morer like this</p>
                      <p className={styles.hovercolor}>Share</p>
                    </div>
                  </div>
              </div>
              <div></div>
                </li>  
            ))
          } 
          </ul>
            <div>
              <p className={styles.subtotal}style={{fontSize:"18px",padding:"12px",marginLeft:"76%"}}>Subtotal ({cartCount} item): <span style={{fontWeight:"600"}}>₹{calculateSubtotal()}.00</span></p>
            </div>
             </>
          )}
          
          </div>
          <div className={styles.priceCard}>
            {cartItems.length === 0 ? (
            <p style={{fontSize:"20px",margin:"90px 40px 20px",color:""}}>Your cart is empty.</p>
          ) : (
            <> 
          <div className= {styles.top}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Flat_tick_icon.svg/512px-Flat_tick_icon.svg.png" alt="" />
            <p style={{fontSize:"13px",lineHeight:"15px",color:"#565959"}}><span style={{color:"#2EC772"}}>Your order is eligible for FREE Delivery.</span> Select this option at checkout. <span className={styles.learnMore} >Details</span></p>
          </div>
          <div>
            <p style={{fontSize:"18px",marginLeft:"5px" }}>Subtotal ({cartCount} item): <span style={{fontWeight:"600"}}>₹{calculateSubtotal()}.00</span></p>
            <input type="checkbox"  style={{width:"10px",marginLeft:"5px", marginTop:"3px"}}/>
            <label htmlFor="gift" style={{fontSize:"14px",marginLeft:"3px" }}>This will be a gift. <span className={styles.learnMore}>Learn more</span></label>
            <button style={{
                    marginTop:"12px",
                    width:"100%",
                    padding:"8px 60px 8px",
                    color:"#0F1111",
                    backgroundColor:"#FFD814",
                    border:"0px solid ",
                    borderRadius:"7px",
                    cursor:"pointer",
                  }} onClick={handleClick} disabled={loading}>Proceed to Buy</button>
          </div>
            </>
          )}

          
          </div>
    </div>
        
        
        </>
        
       
    )
}

 
export default Cart