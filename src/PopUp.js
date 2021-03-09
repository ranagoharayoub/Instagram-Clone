import React from 'react'
import './PopUp.css'
import '@material-ui/core'
import '@material-ui/icons'
import { Close } from '@material-ui/icons'
import { Avatar } from '@material-ui/core'
import {Link} from 'react-router-dom'

function PopUp(props) {

    return (
        <div>
            <div className='popup-win'>
                <div className='popup-margin'>
                    <div className='popup-close'>
                        <div className='popup-cross'>
                            <button className='close-btn' onClick={props.bool} >
                                <Close></Close>
                            </button>
                        </div>
                        <p>New Message</p> 
                    </div>
                    <div className='popup-to'>
                        <p>To:</p>
                        <form>
                            <input className='popup-search' type='text' placeholder='Search...'></input>
                        </form>
                    </div>
                    <div className='popup-sgstn'>
                        <div className='popup-suggested'>
                            <p>Suggested</p>
                        </div>
                        <Link to='inbox/1' className='pu-anpm-link'>
                            <div className='pu-anpm'>
                                <div>
                                    <Avatar></Avatar>
                                </div>
                                <div className='n-pn'>
                                    <p className='n'>Name</p>
                                    <p className='pn'>Profile Name</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

        </div>            
        
    )
}

export default PopUp
