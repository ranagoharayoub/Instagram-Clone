import React from 'react'
import './SettingsPopUp.css'

function SettingsPopUp(props) {

    return (
        <div className='setpopup-ont'>
            <div className='ch-pass'>
                <p>Change Password</p>
            </div>
            <div className='ch-pass'>
                <p>Name Tag</p>
            </div>
            <div className='ch-pass'>
                <p>Apps and Websites</p>
            </div>
            <div className='ch-pass'>
                <p>Notifications</p>
            </div>
            <div className='ch-pass'>
                <p>Privacy and Security</p>
            </div>
            <div className='ch-pass'>
                <p>Login Activity</p>
            </div>
            <div className='ch-pass'>
                <p>Emails from Instagram</p>
            </div>
            <div className='ch-pass'>
                <p>Report a problem</p>
            </div>
            <div className='ch-pass'>
                <p>LogOut</p>
            </div>
            <div className='ch-pass' id='cancel' onClick={props.bool}>
                <p>Cancel</p>
            </div>
        </div>
    )
}

export default SettingsPopUp
