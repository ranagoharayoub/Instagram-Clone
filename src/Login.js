import React, { useEffect, useState } from 'react'
import './Login.css'
import {useStateValue} from './UserContext'
import {actiontype} from './Reducer'

function Login() {
    const initialcount = 1
    const [count, setcount] = useState(initialcount)
    const [username, setusername] = useState('')
    const [name, setname] = useState('')
    const [{user},dispatch] = useStateValue()
    console.log(user)
    const signin = () =>{
        dispatch({
            type: actiontype.SetUser,
            user: username,
            name: name
        })
    }

    // let i=0

    const userid = () =>{
        setusername(username)
    }

    useEffect((i) => {

        document.title = 'Instagram-Login'

       const interval= setInterval(() => {
            if(i<5){
                setcount(count => count+1)
                i++
                if(i===5){
                    i=0
                    setcount(i)
                }
            }

        }, 3000);
        return () =>{
            clearInterval(interval)
        }
        
    }, [])
    
    
    return (
        <div className='body'>
            <div className='pics'>
                {
                count ===0? 
                    <img src='https://www.instagram.com/static/images/homepage/screenshot1.jpg/d6bf0c928b5a.jpg' alt='insta'/>
                :
                count ===1?
                    <img src='https://www.instagram.com/static/images/homepage/screenshot2.jpg/6f03eb85463c.jpg' alt='insta'/>
                :
                count ===2?
                    <img src='https://www.instagram.com/static/images/homepage/screenshot3.jpg/f0c687aa6ec2.jpg' alt='insta'/>
                :
                count ===3?
                    <img src='https://www.instagram.com/static/images/homepage/screenshot4.jpg/842fe5699220.jpg' alt='insta'/>
                :
                count ===4?
                    <img src='https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg' alt='insta'/>
                :
                    <img src='https://www.instagram.com/static/images/homepage/screenshot5.jpg/0a2d3016f375.jpg' alt='insta'/>    
    
            }

            </div>
            <div className='login-contents'>
                <div className='uper-container'>
                    <p className='logo'>Instagram</p>
                    <form className='input-fields' onSubmit={userid}>
                        <input
                         type='text'
                          value={username}
                           onChange={(e) =>setusername(e.target.value)}
                            placeholder='username'>
                        </input>
                        <input type='text' placeholder='name' value={name} onChange={(e) =>setname(e.target.value)}></input>
                        {
                            username.length>=5 && name.length>=5 ?
                            <button id='login' className='login-btn' type='submit' onClick={signin}>Login</button>
                            :
                            <button id ='b-login' onClick={(e) => {e.preventDefault()}}>Login</button>
                        }
                    </form>
                    <hr></hr>
                    <div className='fb'>
                        <img src='facebook.png' alt='fb'/>
                        <p>Log in with facebook</p>
                    </div>
                    <p className='forget-pass'> Forgot Password?</p>
                </div>
                <div className='dont-account'>
                    <p>Don't Have an account? </p>
                    <p className='signup'>SignUp</p>
                </div>
                <div className='app'>
                    <p>Get the app</p>
                    <div className='badge'>
                        <img src="apple-store-badge.svg" alt='img' className='apple'/>
                        <img src='google-play-badge.png' alt='google-play' className='playstore' /> 
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Login
