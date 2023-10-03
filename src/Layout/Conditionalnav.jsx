import { Link,useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar";
import MiniNav from "../components/Navbar/MiniNav/MiniNav";
import hiddenRoutes from "../hidddenRoutes";
 

const Conditionalnav = ({children}) => {
    const navigate = useNavigate()
    const currentPath = window.location.pathname;

    if (hiddenRoutes.includes(currentPath)){
        return null
    }
  return (
    <> 
        <Navbar />
        <MiniNav />      
    </>
  )
}

export default Conditionalnav