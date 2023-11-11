import { auth } from './firebase'
import React, { useState } from 'react'
import './login.css'
import { useDispatch } from 'react-redux'


function Login(){
    const[name, setName] = useState("")
    const[email, setEmail] = useState("")
    const[passward, setPassward] = useState("")
    const[profilepic, setProfilepic] = useState("")
    const dispatch = useDispatch();

    const register = () => {
        if(!name){
            return alert('Please enter a fullname');
        }
        auth.createUserWithEmailAndPassword(email,passward)
        .then((userAuth)=>{
            userAuth.user.updateProfile({
                displayName : name,
                photoURL: profilepic,
            })
            .then(()=>{
                dispatch(Login({
                    email: userAuth.user.email,
                    uid :   userAuth.user.uid,
                    displayName : name,
                    photoURL : profilepic 
                }))
            })
        }).catch((error)=>alert(error) ) 
    }
    return(
        <div className='login'> 
            
            <img src='https://www.freepnglogos.com/uploads/linkedin-logo-transparent-png-16.png' alt=''/>
            <form>
                <input placeholder="Full Name (Required if registering)" value={name} onChange={(e)=>(setName(e.target.value))} type="text" />
                <input placeholder="Profile Pic URL (Required if registering)" value={profilepic} onChange={(e)=>(setProfilepic(e.target.value))} type="text" />
                <input placeholder="Enter Your Email" value={email} onChange={(e)=>(setEmail(e.target.value))} type="Email" />
                <input placeholder="Enter Your Passward" value={passward} onChange={(e)=>(setPassward(e.target.value))} type="passward" />
                <button type='submit' onClick={register}>Get Started</button>
            </form>
            
        </div>
    )
}


export default Login