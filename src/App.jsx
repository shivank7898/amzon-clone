import styles from './App.css'
import Home from './components/Home/Home'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import SignIn from './components/Auth/SignIn'
import SignUP from './components/Auth/SignUp'
import ProductDetails from './components/ProductDetails/ProductDetails'
import Cart from './components/Cart/Cart'
import Thankyou from './components/Thankyou.jsx/Thankyou'
import Shop from './components/Shop/Shop'

 
const App = () => {
  return (
     

          <Layout >
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route  path='/shop' element={<Shop   />}/>
              <Route path='/product/:id' element={<ProductDetails />}/>
              <Route path='/signIn' element={<SignIn />}/>
              <Route path='/signUp' element={<SignUP />} />
              <Route path='/cart' element={<Cart />}/> 
              <Route path='/thankyou' element={<Thankyou />}/> 
               
            </Routes>
          </Layout>
    
  )
}

export default App
