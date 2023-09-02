import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './poster.module.css'
import { bannerData } from '../../../constants/data';
// import styled from 'styled-component'

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

const Poster = () => {
  return (
    <Carousel 
    swipeable={false}
    draggable={false}
    responsive={responsive} 
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={4000}
    keyBoardControl={true}
    customTransition="all .5"
    transitionDuration={500}
    className={styles.carousel}> 
        {
            bannerData.map(data => (
                
                <img src={data.url} alt="image" className={styles.image} key={data.url} />

             ))
        }

    </Carousel>
  )
}

export default Poster