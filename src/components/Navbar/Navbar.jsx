import { IoLocationOutline, IoSearch} from "react-icons/io5";
import { PiShoppingCartSimpleThin } from "react-icons/pi"
import styles from './navbar.modules.css'
import LangDropdown from "./LangDropdown/LangDropdown";
import MiniNav from "./MiniNav/MiniNav";

const Navbar = () => {
  return (
      <div className="nav">      
        <div className="image">
            <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" />     
        </div>
        
        <div className="address">

            <div className="icon1">
              <IoLocationOutline />
            </div>

            <div className="lines">
              <span className='adr-frst'>Delivering to </span>  
              <span className='adr-scnd'>Sign in to update.</span>
            </div>

        </div>

        <div className="searchbox">
         
          <select>
              <option value="">All</option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
          </select>
          
          <input placeholder="Search Amazon.in"></input>
          
          <div className="searchicon">
            <IoSearch />
          </div>
        </div>

        <>
          <LangDropdown />        
        </>

        <div className="sign">
          <span className='sign-frst'>Hello,sign in</span> <br />
          <span className='sign-scnd'>Accounts & Lists</span>
        </div>
        
        <div className="rtrn">
          <span className='rtrn-frst'>Returns</span> <br />
          <span className='rtrn-scnd'>& Orders</span>
        </div>
        
        <div className="cart">
          <div className="cartIcon">
            <PiShoppingCartSimpleThin />
            <div className="cartText">
              <p>0</p>
              <p id="cart">Cart</p>
            </div>
          </div>
        </div> 
      </div>
      
    
    
  )
}

export default Navbar