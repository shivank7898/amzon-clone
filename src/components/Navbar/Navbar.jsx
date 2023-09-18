import { IoLocationOutline, IoSearch} from "react-icons/io5";
import { PiShoppingCartSimpleThin } from "react-icons/pi"
import styles from './navbar.modules.css'
import LangDropdown from "./LangDropdown/LangDropdown";
// import { auth } from "../../firebase";
import { Link,useNavigate} from "react-router-dom";
import { useSelector } from "react-redux"
import { auth } from "../../firebase";
const Navbar = () => {
  const navigate = useNavigate()
  const name = useSelector((state) => state.name.name)

  const signOutUser = () => {
    console.log(auth.currentUser);
          auth.signOut()
          .then(() =>{
            
            console.log("User sign out successfully")
          }).catch((error) => {
            console.log("Error during sign out")
          })
  }

  return (
      <div className="nav">     
        <div className="image">
      <Link to={'/'}>
            <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" />     
      </Link> 
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

        
          
          <Link to={ !auth.currentUser ? "/signIn" : "" }>
              <div className='sign' onClick={ auth.currentUser ? signOutUser : () => navigate("/signIn") }>
                <span className='sign-frst' >Hello,  {auth.currentUser  ? name : "Guest"}</span> <br />
              
                <span className="sign-scnd">{!auth.currentUser ? "Sign In" : "Sign Out"} </span>
               </div>
          </Link>
             
         
        <Link to={'/'}>
          <div className="rtrn">
            <span className='rtrn-frst'>Returns</span> <br />
            <span className='rtrn-scnd' >& Orders</span>
          </div>
        </Link>
        
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
