import styles from './mininav.modules.css'

const MiniNav = () => {
  return (
     <div className="mininav">
        <div className="lftNav">
            <img src="./images/burger.png" alt="" />
            <p>All</p>
        </div>
        <div className="centerNav">
          <span>Amazon miniTv</span>
          <span>Sell</span>
          <span>Best seller</span>
          <span>Today's Deals</span>
          <span>Mobiles</span>
          <span>New Releases</span>
          <span>Customer Service</span>
          <span>Prime</span>
          <span>Electronics</span>
          <span>Gift Ideas</span>
          <span>Home & Kitchen</span>
          <span>Fashion</span>
          <span>Computers</span>
          <span>Amzon Pay</span>
        </div>

        <div className="rghtNav">
          <p> New Launches from Mobiles,Electronics & more | Shop now </p>
        </div>

     </div>
  )
}

export default MiniNav