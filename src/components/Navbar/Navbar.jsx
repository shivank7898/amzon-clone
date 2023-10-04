import { IoLocationOutline, IoSearch} from "react-icons/io5";
import { PiShoppingCartSimpleThin } from "react-icons/pi"
import styles from './navbar.modules.css'
import LangDropdown from "./LangDropdown/LangDropdown";
// import { auth } from "../../firebase";
import { Link,useNavigate} from "react-router-dom";
import { useSelector } from "react-redux"
import { auth } from "../../firebase";
import { selectCartCount } from "../../store/store";
import { useState } from "react";
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Divider, ListItemButton ,ListItemIcon } from '@mui/material'; 
 
const Navbar = () => {
  const navigate = useNavigate()
  const name = useSelector((state) => state.name.name)
  const cartCount = useSelector(selectCartCount);
   const [drawerOpen, setDrawerOpen] = useState(false);

 const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

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
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)} style={{zIndex:"11111111111",}}>
       <div style={{padding:"",width:"320px"}}>
        <Link to={ !auth.currentUser ? "/signIn" : "" }>
          <p style={{backgroundColor:"#232F3E",color:"#fff",padding:'15px',fontSize:"20px",fontWeight:"600",display:'flex',justifyContent:"space-between"}}>Hello, {auth.currentUser? name : "Guest"} <span onClick={toggleDrawer(false)}style={{paddingLeft:""}}>  x</span></p>
        </Link>
        <List>
        {['Trending', 'Best Sellers', 'Amazon fire TV', 'Amazon music'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>      
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Books', 'Music, Movies & Games', 'Computers', 'Electronics'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>      
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
       <ListItemButton>
        {auth.currentUser? <p onClick={() => signOutUser()} style={{fontSize:"20px",fontWeight:"600"}}>Sign Out</p>: ""}
        </ListItemButton>  
      
       </div>
      </Drawer>
       
          <img src="../images/burger.png" alt=""  className="burger" onClick={toggleDrawer(true)} variant="contained"/>
        <div className="image">
      <Link to={'/'}>
            <img src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo" className="logo"/>     
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
        <Link to={'/cart'}>
        <div className="cart">
          <div className="cartIcon">
            <PiShoppingCartSimpleThin />
            <div className="cartText">
              <p>{cartCount}</p>
              <p id="cart">Cart</p>
            </div>
          </div>
        </div> 
        </Link>
      </div>
      
    
    
  )
}

export default Navbar
