import styles from './productdetails.module.css'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProductDetails } from '../../redux/slice/productdetails';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';
import {auth} from '../../firebase'
import {SlLocationPin} from 'react-icons/sl'
import {GrNext,GrPrevious} from 'react-icons/gr'
import { fetchProducts } from '../../redux/slice/products'; 
import { CircularProgress } from '@mui/material';
import  { addToCart  } from '../../redux/slice/cartSlice';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51NwgeqSBSCB6xpqGPUKnUbvApp77lh7qlULBJBpPNm1Ut1N1EA0AQVpPmB3Ff3WjhHhc7x1vR9dIXCTFbYPZ7mKd00UWfjqp2x');


const ProductDetails = () => {
  const  products= useSelector((state) => state.products.data);
  const { id } = useParams();
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productdetails);
  const user = auth.currentUser?.email
  const product = productDetails.data;
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleBuyNow = async (e) => {
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{
        price: "price_1NwjUySBSCB6xpqGsRDxybg2", // Replace with the ID of your price
        quantity:1
      }],
      mode: 'payment',
      successUrl: 'http://localhost:3000/thankyou',
      cancelUrl: 'https://example.com/cancel',
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
  };

  


  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value)
    setSelectedQuantity(newQuantity)
  } 

   const handleAddToCart = () => {
    dispatch(addToCart({product, quantity: selectedQuantity}))
   }
  


    

  console.log(selectedQuantity)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    prevArrow:<CustomPrevArrow />,
    nextArrow:<CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  

    
    
   


  useEffect(() =>{
    dispatch(fetchProducts())
  }, [dispatch])

  useEffect(() => {
    dispatch(fetchProductDetails({ id }));
  }, [dispatch, id]);

  if (productDetails.loading === 'pending') {
    return ;
  }

  if (productDetails.loading === 'failed') {
    return <p>Error: {productDetails.error}</p>;
  }
console.log(productDetails)

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

  return (
    <div className={styles.prodcuctmaincontainer}>     
      {product ? (
        <>
        <div className={styles.prdctContainer}>

          <div className={styles.imagecontainer}>
            <img src={product.image} alt="" />
          </div>

          <div className={styles.detailscontainer}>
            <p className={styles.title}>{product.title}</p>
            <p className={styles.category}>Category: {product.category}</p>
            <p className={styles.rating}> {product.rating.rate} {createStarRating()} <span className={styles.ratingSpan}>{product.rating.count} ratings</span></p>
            <p className={styles.buyhistory}>50+ bought in past month</p>
           
            <div className= {styles.line}></div>
           
            <div className={styles.amount}>
                <p className={styles.price}>
                  <sup>₹</sup>
                  {product ? product.price.toFixed(0) : ''}</p>
              <p className={styles.tax}>Inclusive of all taxes</p>
              <p className={styles.emi}><span className={styles.emispan}>EMI</span> starts at ₹92 per month. <span className={styles.emioptions}>EMI options</span> </p>
            </div>
           
            <div className={styles.offer}>
              <p className={styles.paylater}> Pay with amazon paylater. <span className={styles.paylaterBold}>Get <span className={styles.paylaterRed}>₹50</span> cashback on this order.</span> <br />
              <span>Activate Now</span></p>                          
            </div>
           
             <div className= {styles.line}></div>

             <div className={styles.cashbacks}>             
                <div className={styles.png}>
                  <img src="../images/offer.png" alt="" />
                  <p>Offers</p>
                </div>

                <div className={styles.cashbackcards}>
                  <div className={styles.cards}>
                    <p className={styles.head}>Cashback</p>
                    <p className={styles.middle}>₹20 cashback. Buy with items in cart</p>
                    <p className={styles.bottom}>2 offers</p>
                  </div>
                  <div className={styles.cards}>
                    <p className={styles.head}>Bank Offer</p>
                    <p className={styles.middle}>Upto ₹500.00 discount on SBI Credit Cards</p>
                    <p className={styles.bottom}>2 offers</p>
                  </div>
                  <div className={styles.cards}>
                    <p className={styles.head}>Cashback</p>
                    <p className={styles.middle}>Get GST invoice and save up to 28% on business purchases.</p>
                    <p className={styles.bottom}>2 offers</p>
                  </div>
                   
                </div>
             </div>

            <div className= {styles.line}></div>

              <div className={styles.perks}>
                <div className={styles.perkcard}>
                    <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png"alt="" />
                    <p>Free Delivery</p>
                </div>
                 <div className={styles.perkcard}>
                    <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-cod._CB485937110_.png"alt="" />
                    <p>Pay on Delivery</p>
                </div>
                 <div className={styles.perkcard}>
                    <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/trust_icon_free_shipping_81px._CB630870460_.png"alt="" />
                    <p>10 days Replacement</p>
                </div>
                 <div className={styles.perkcard}>
                    <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-warranty._CB485935626_.png"alt="" />
                    <p>1 Year Warranty</p>
                </div>
                 <div className={styles.perkcard}>
                    <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-top-brand._CB617044271_.png"alt="" />
                    <p>Top Brand</p>
                </div>
                 <div className={styles.perkcard}>
                    <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/icon-amazon-delivered._CB485933725_.png"alt="" />
                    <p>Amazon Delivered</p>
                </div>
                 <div className={styles.perkcard}>
                    <img src="https://m.media-amazon.com/images/G/31/A2I-Convert/mobile/IconFarm/Secure-payment._CB650126890_.png"alt="" />
                    <p>Secure transaction</p>
                </div>
              </div>

              <div className= {styles.line}></div>

               
          </div>    

          <div className={styles.pricecontainer}>
              <div className={styles.pricehead}>
                    <p style={{fontSize:"30px",
                      fontWeight:"600"
                  }}>  <sup style={{fontSize:"15px",
                  fontWeight:"500"}}>₹</sup>{product.price.toFixed(0)}</p>
                <div className={styles.child1}>
                    <p  ><span className={styles.hoverUnderline}>Free delivery</span> in 4 <br /> days. <span className={styles.hoverUnderline} >Details</span> </p><br />
                    <p>Or fastest delivery in <span style={{fontWeight: "600"}}>24hr</span>.Order within <span style={{color:"#217600"}}>10hrs 31mins</span>. <span className={styles.hoverUnderline} >Details</span></p>

                </div>
                <div style={{
                  display:"flex",
                  alignItems:"center",
                  gap:"3px",
                  fontSize:"12px",
                  margin:"8px",
                  color:"#007185",
                }}>
                   <SlLocationPin  style={{
                    color:"black",
                    // width:"19/px",
                    fontWeight:"600",
                    fontSize:"14px",
                   }}/>{
                      auth.currentUser? <p  className={styles.hoverColor} >Deliver to, {auth.currentUser.displayName} </p>:<p className={styles.hoverColor}>Deliver to,Guest</p>
                    }
                    
                </div>
              </div>

              <div className={styles.pricemiddle}>
                <p style={
                  {color:"#217600",
                   fontSize:"18px"
                  }
                }>In stock</p>
                <p style={{margin:"8px 0px 9px"}}>Sold by <span className={styles.hoverUnderline}>RED-CLOUD</span> and <span className={styles.hoverUnderline} > Fulfilled by Amazon.</span></p>
                
                <div style={{display:"flex",
                            alignItems:"center",
                            gap:"2px",
                            }}>
                  <p>Quantity:</p>
                  <select 
                  style={{width:"24%",
                          height:"28px",
                          padding:"2px",
                          border:"1px solid #DADADA",
                          borderRadius:"4px"
                        }}  value={selectedQuantity}  
                            onChange={handleQuantityChange}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>  
                  </select>
                </div>
              </div>

              <div className={styles.pricebottom}>
               <div>
                  <button style={{
                    padding:"8px 60px 8px",
                    color:"#0F1111",
                    backgroundColor:"#FFD814",
                    border:"0px solid ",
                    borderRadius:"20px",
                    cursor:"pointer"
                  }} onClick={handleAddToCart}>Add to Cart</button>
                  <button style={{
                    padding:"8px 68px 8px",
                    color:"#0F1111",
                    backgroundColor:"#FFA41C",
                    border:"0px solid ",
                    borderRadius:"20px",
                    marginTop:"7px",
                    cursor:"pointer"
                  }} onClick={handleBuyNow}>Buy Now</button>
                </div>
                <div style={{color:"#007185",
                            display:"flex",
                            alignItems:"center",
                            gap:"13px",
                            margin:"12px 0px 12px "
                            }}>
                  <img style={{width:"5.6%",height:"15px"}} src="https://m.media-amazon.com/images/G/01/x-locale/checkout/truespc/secured-ssl._CB485936932_.png" alt="lock imgage" />
                  <p className={styles.hoverColor}>Secure transaction</p>
                </div>
                <input type="checkbox" id="giftbox"  style={{marginLeft:"3px"}} />
                <label style={{marginLeft:"5px"}} htmlFor="giftbox">Add gift options</label>

                <div className= {styles.line}></div>

                <div style={{display:"flex"}}>
                      <input type="textbox" placeholder='Add to Wish List'  style={{padding:"5px",
                                                                                    width:"90%",
                                                                                    border:"1px solid #888C8C",
                                                                                    borderRadius:"6px 0px 0px 6px",
                                                                                  }}/>
                      <select style={{padding:"1px",
                                      border:"0.2px solid #888C8C",
                                      borderRadius:"0px 7px 7px 0px"
                                    }}></select>
                </div>
                  
              </div>
          </div>

          

          
                                                                    
          
        </div>  
        <div className={styles.row2}>
              <div className={styles.carouselHead}>
                <Slider {...settings} className={styles.slider}>
                    {products?.map((product, id) => (
                     <Link to={`/product/${product.id}`}>
                        <div key={id} className={styles.slickCard}>
                            <img  src={product?.image} alt={`Product ${id}`} />                           
                        </div>
                      </Link>
                    ))}
                </Slider>
              </div>
          </div> 
        </> 
         
         
      ) : (
       <p>Not Found</p>
      )}
       
    </div>
    
  );
};

 const CustomPrevArrow = (props) => {
  // Custom JSX for previous arrow
  return (
    <div
      className={styles.prevarrow}
      onClick={props.onClick}
    >
      < GrPrevious />
    </div>
  );
};

const CustomNextArrow = (props) => {
  // Custom JSX for next arrow
  return (
    <div
      className={styles.nextarrow}
      onClick={props.onClick}
    >
      < GrNext/>
    </div>
  );
};


export default ProductDetails;
