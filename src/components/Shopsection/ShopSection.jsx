import { Link } from 'react-router-dom';
import { auth } from '../../firebase';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './shopsection.module.css'
// import nameSlice from '../../redux/slice/nameSlice';
 


const ShopSection = ({ products }) => {
   

    const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
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
   

   
  console.log(products)
return (
    <div className={styles.container}>
      <div className={styles.row1}>
        <div className={styles.card}>
          <Link to='/shop'>
            <p>AmazonBasics</p>
            <img   src="https://images-fe.ssl-images-amazon.com/images/G/35/kindle/merch/2020/aucc/pc_cat_be_1x._SY304_CB417974003_.jpg" alt="Basics" />
            <div className= {styles.spanBottom}>
              <span >see more</span>
            </div>
          </Link>
              </div>
            <div className={styles.card}>
              <Link to='/shop'>
              <p>Shop by Category</p>
              <div className={styles.category}>
                <div className={styles.c1}>
                  <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/computer120x._SY85_CB468850970_.jpg" alt="Basics" />
                  <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/August/DashboardCard/PS4_120X._SY85_CB438749318_.jpg" alt="" />
                </div>
                <div className={styles.c2}>
                  <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/February/Dashboard/Baby120X._SY85_CB468850882_.jpg" alt="" />
                  <img src="https://m.media-amazon.com/images/G/01/img20/events/Q4/Holiday/Gifthub/trafficdrivers/hol20_gifthub_profilecard_FGG._AC_SR120,80_.png" alt="" />
                </div>
              </div>
              <span>see all</span>
              </Link>  
            </div>
              
            <div className={styles.card}>
            <Link to='/shop'>
              <p>Get US $10 off</p>
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/November/Fuji_Dash_BXGY_1x._SY304_CB416796032_.jpg" alt="Basics" />
              <span>Use code NZ10 on purchase</span>
            </Link>
            </div>
            <div className={styles.card}>
                 <Link to='/shop'>
              <p>Shop & Pay | Earn rewards daily</p>
              <div className={styles.rewards}>
                <div className={styles.r1}>
                  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_ScratchCard._SY116_CB627364845_.jpg" alt="Basics" />
                  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonPay/Rewards/GWBTFPercolateCards/PC_Quard_Card_186X116_CollectedOffers._SY116_CB627364845_.jpg" alt="" />
                </div>
                <div className={styles.r2}>
                  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/APay/GWQC/PC_Pay__Win0.5x._SY116_CB616103432_.jpg" alt="" />
                  <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/APay/GWQC/PC_Shop__collect0.5x._SY116_CB616103432_.jpg" alt="" />
                </div>
              </div>
              <span>see all</span>
              </Link>  
                
            </div>
          </div>
          <div className={styles.row2}>
              <div className={styles.carouselHead}>
                <p>Related to items You've Viewed <span>See more</span></p>
                <Slider {...settings} className={styles.slider}>
                    {products.map((product, id) => (
                     <Link to={`/product/${product.id}`}>
                        <div key={id} className={styles.slickCard}>
                            <img  src={product.image} alt={`Product ${id}`} />
                            {/* <p>{product.title}</p> */}
                        </div>
                      </Link>
                    ))}
                </Slider>
              </div>
          </div>
          <div className={styles.row2}>
              <div className={styles.carouselHead}>
                <p>Related to items You've Viewed <span>See more</span></p>
                <Slider {...settings} className={styles.slider}>
                    {products.map((product, id) => (
                      <Link to={`/product/${product.id}`}>
                        <div key={id} className={styles.slickCard}>
                            <img  src={product.image} alt={`Product ${id}`} />
                            {/* <p>{product.title}</p> */}
                        </div>
                      </Link>
                    ))}
                </Slider>
              </div>
          </div>
          <div className={styles.row3}>
        <div className={styles.card2}>
          <Link to='/shop'>
            <p>Find unique gifts</p>
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2019/img/Social_Shopping/B00YBC17FK_260._CB442485249_SY260_.jpg" alt="Basics" />
            <div className={styles.spanBottom}>

              <span >See more gift ideas</span>
            </div>
          </Link>
              </div>
            <div className={styles.card2}>
              <Link to='/shop'>
              <p>Inexpensive finds</p>
               <img src="https://images-na.ssl-images-amazon.com/images/G/01/xba/BTF_US_All_Sep2019_1x._CB440956261_SY260_.jpg" alt="Basics" />
            
              <span>See more</span>
              </Link>  
            </div>
              
            <div className={styles.card2}>
            <Link to='/shop'>
              <p>New gift card designs</p>
              <img src="https://images-na.ssl-images-amazon.com/images/G/01/gift-certificates/consumer/2019/NewGCs/New/NewGCs_catcard_260x260_amazon_egc_1._CB438911828_SY260_.jpg" alt="Basics" />
              <span>Shop the collection</span>
            </Link>
            </div>
            <div className={styles.card2}>
                 <Link to='/shop'>
              <p>Renewd electronics</p>
               <img src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2019/img/Certified_Refurbished/XCM_Manual_1170890_desktop_tiles_260x260_Certified_Refurbished_XCM_Manual_1170890_us_certified_refurbished_desktop_tiles_260x260_2_1557752691_jpg._CB464246644_SY260_.jpg" alt="Basics" />
             
              <span>See from renewed</span>
              </Link>  
                
            </div>
          </div>
           
      </div>
  )
}

export default ShopSection