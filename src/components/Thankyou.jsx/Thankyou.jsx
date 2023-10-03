import styles from './thankyou.module.css'
import { Link } from 'react-router-dom'
import React from 'react'

const Thankyou = () => {
  return (
    <div style={{width:"50%",backgroundColor:"#ffff",margin:"10% 0px 10% 25%",textAlign:"center",height:"200px"}}>
        <p style={{fontSize:"28px",paddingTop:'70px'}}>Thank you for shopping with us <span style={{}}><img src="../images/thank.png" alt="" /></span></p>
       <Link to={'/'}>
        <button style={{
            marginTop:"12px",
            // width:"100%",
            padding:"8px 60px 8px",
            color:"#0F1111",
            backgroundColor:"#FFD814",
            border:"0px solid ",
            borderRadius:"7px",
            cursor:"pointer",
        }}  >Back to Home</button>
        </Link>
    </div>
  )
}

export default Thankyou