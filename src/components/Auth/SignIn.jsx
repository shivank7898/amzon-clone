import styles from './signin.module.css'
import { useState } from 'react'
import {auth} from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { Link,useNavigate } from 'react-router-dom'
import { useSelector,useDispatch} from 'react-redux'
import { setName } from '../../redux/slice/nameSlice'
const SignIn = () => {
    // const name = useSelector((state) => state.name.name)
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [email ,setEmail] = useState()
    const [password ,setPassword] = useState()

    const signIn = (e) =>{
        e.preventDefault()
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential) =>{
            dispatch(setName(userCredential.user.displayName));
             

            if(auth.currentUser){

                navigate("/")
            }else{
                console.error("User not signed up successfully.");
            }
            
            console.log(userCredential)
             
        }).catch((error) => {
            alert("inavlid email password")
            console.log(error)
        })
    }



  return (
    <div className={styles.signInCont}>
            {/* <div className="img"> */}
                <Link to={"/"}  className={styles.img}>
                <img src="https://assets.aboutamazon.com/88/05/0feec6ff47bab443d2c82944bb09/amazon-logo.png" alt="" />       
                </Link>
            {/* </div> */}
            <box >
                <div className={styles.cont1}>
                    <p>Sign In</p>
                    <div >
                        <label htmlFor="email">Email</label> <br />
                        <input id='email' type="text" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label><br />
                        <input  id='password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    </div>
                </div>
                <div className={styles.cont2}>
                    <Link to={"/"}>
                        <button onClick={signIn}>Continue</button>
                    </Link>
                    <p>By continuing, you agree to Amazon's <span>
                        Conditions of <br />Use </span> and <span>Privacy Notice.</span>
                      </p>
                </div>
                    
            </box>
            <div className={styles.new}>New to amazon?</div>
            <Link to={'/signUp'}>
                <button className={styles.newCountBtn}>Create Your amazon account</button>
            </Link>
         
    </div>
  )
}

export default SignIn