import { useNavigate } from "react-router-dom";
import hiddenRoutes from "../hidddenRoutes";
import Footer from "../components/Footer/Footer";

const ConditionalFoot = ({children}) => {

    const navigate = useNavigate()
    const currentPath = window.location.pathname


    if (hiddenRoutes.includes(currentPath)){
        return null
    } 
  return (
    <>
        <Footer />
    </>
  )
}

export default ConditionalFoot