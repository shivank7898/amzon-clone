import styles from './signup.module.css'
import { useState } from 'react'
import {auth} from '../../firebase'
import { createUserWithEmailAndPassword,updateProfile} from 'firebase/auth'
import { Link,useNavigate} from 'react-router-dom'
import { useSelector,useDispatch} from 'react-redux'
import { setName } from '../../redux/slice/nameSlice'

const SignUP = () => {
    const name = useSelector((state) => state.name.name)
    const dispatch = useDispatch()
    const [email ,setEmail] = useState()
    const [password ,setPassword] = useState()
    const [error,setError] = useState()
    const navigate = useNavigate()
    const [nameError, setNameError] = useState(false)
    
   const handlerror = () => {
        setError(alert("Invalid email or password"))
    }
    
   const handleNameError = () => {
    setNameError(alert("First name not filled"))
   }
  
 
    

    
    const handleSetName = (newName) =>{
        dispatch(setName(newName))
    }

    const signUp = (e,) =>{
         console.log(name)
        //  return
        
        e.preventDefault()
        if(name === ""){
            return(handleNameError())
        }else{

            createUserWithEmailAndPassword(auth,email,password)
            
            
            .then((userCredential) =>{
                if(userCredential.user.displayName === null){
                    
                }
                
                
                
                return updateProfile(userCredential.user, {
                    displayName: name,
                })
                
                
                
            }).then(() =>{
                if (auth.currentUser){
                    navigate("/signIn");
                    // console.error("User not signed up successfully.");
                }
                
                
               
                console.log( auth.currentUser)
            })
            
            .catch((error) => {
                console.log("FirebaseAuthenticationError:",error)
                handlerror() ;
            })
    }
        
    
}
     
  return (
    <div className={styles.signInCont}>
       <Link to={"/"}  className={styles.img}>
            <img src="https://assets.aboutamazon.com/88/05/0feec6ff47bab443d2c82944bb09/amazon-logo.png" alt="" />       
        </Link>
        <box >
                <div className={styles.cont1}>
                    <p>Create Account</p>
                    <div >
                        
                        <label htmlFor="name">First Name</label> <br />
                        <input id='name' type="text" placeholder="" value={name} onChange ={(e)=> handleSetName(e.target.value)} required/>
                        
                        {/* {nameError && <p className={styles.nameError}>Field Required</p>} */}
                    </div>
                     <div >
                        <label htmlFor="lstname">Last Name <span style={{color:"grey",fontWeight:"500"}}>(Optional)</span></label> <br />
                        <input id='lstname' type="text" placeholder=''  />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label><br />
                        <input  id='email' placeholder='user@mail.com' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                        {/* { mailError && <p>Fill vaild mail</p>} */}
                    </div>
                    <div>
                        <label htmlFor="password">Password</label><br />
                        <input  id='password' placeholder='' type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    </div>
                </div>
                < div className={styles.cont2}>
                   <button onClick={signUp} >Continue</button>             
                    <p>By continuing, you agree to Amazon's <span>
                        Conditions of <br />Use </span> and <span>Privacy Notice.</span>
                      </p>
                </div>
                    
            </box>
             
    </div>
  )
  
}

export default SignUP