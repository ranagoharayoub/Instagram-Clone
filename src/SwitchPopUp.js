import React from 'react'
import '@material-ui/core'
import '@material-ui/icons'
import { CheckCircleOutlineOutlined, Close } from '@material-ui/icons'
import { Avatar } from '@material-ui/core'
import './SwitchPopup.css'
import {Link} from 'react-router-dom'

function SwitchPopUp(props) {
    return (
        <div className='spu-cont'>
            <div className='spu-sc'>
                <p>Switch</p>
                <button onClick={props.alter} className='spu-close'>
                     <Close ></Close>
                </button>
                
            </div>
            <div className='spu-p'>
                <Avatar></Avatar>
                <p>Name</p>
                <div className='spu-check'>
                    <CheckCircleOutlineOutlined></CheckCircleOutlineOutlined>
                </div>
            </div>
            <div className='spu-p'>
                <Avatar></Avatar>
                <p>Name</p>
                <div className='spu-check'>
                    <CheckCircleOutlineOutlined></CheckCircleOutlineOutlined>
                </div>
            </div>
            <div className='spu-la'>
                <Link to='/' className='spu-link'>
                    <p>Log into an existing account</p>
                </Link>
            </div>
        </div>
    )
}

export default SwitchPopUp
