import React, { useState } from 'react'
import './DropDown.css'
import '@material-ui/core'
import '@material-ui/icons'
import { AccountCircleOutlined, BookmarkBorderOutlined, SettingsOutlined, SwapHorizontalCircleOutlined } from '@material-ui/icons'
import 'react-router-dom'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'
import SwitchPopUp from './SwitchPopUp'
import {useStateValue} from './UserContext'
import {actiontype} from './Reducer'
Modal.setAppElement('#root')


function DropDown(props) {

    const [state, setstate] = useState(false)
    const [{user},dispatch]= useStateValue()
    console.log(user)
    
    const logout = () =>{
        dispatch({
            type: actiontype.SetUser,
            user: null
        })
    }

    const clickclose = () =>{
        setstate(false)
    }

    
    const userprop = () => {
        setstate(true)
    }

   

    return (
        <div className='dropdown-cont'>
            <Modal 
                isOpen={state}
                onRequestClose={clickclose}
                style={{
                    overlay: {
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'rgba(0, 0, 0, 0.75)'
                    },
                    content: {
                        position: 'absolute',
                        top: '190px',
                        left: '450px',
                        right: '450px',
                        bottom: '190px',
                        border: '1px solid #ccc',
                        background: '#fff',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '20px',
                        outline: 'none',
                        padding: '10px'
                    }
                  }}
                >
                <SwitchPopUp alter={clickclose}></SwitchPopUp>
            </Modal>
            <Link to='/username/posts' className='dd-div' onClick={props.bool}>
                <AccountCircleOutlined className='icon'></AccountCircleOutlined>
                <p>Profile</p>
            </Link>
            <Link to='/username/saved' className='dd-div' onClick={props.bool}>
                <BookmarkBorderOutlined className='icon'></BookmarkBorderOutlined>
                <p>Saved</p>
            </Link>
            <Link to='/username/settings' className='dd-div'>
                <SettingsOutlined className='icon'></SettingsOutlined>
                <p>Settings</p>
            </Link>
            
            <button className='dd-div' id='dd-sa' onClick={userprop}>
                <SwapHorizontalCircleOutlined className='icon'></SwapHorizontalCircleOutlined>
                <p>Switch Account</p>
            </button>
            
            <Link to='/' className='dd-div' id='dd-lo' onClick={logout}>
                <p >Log Out</p>
            </Link>
        </div>
    )
}

export default DropDown
