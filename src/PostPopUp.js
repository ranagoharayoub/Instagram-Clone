import React from 'react'
import {Link} from 'react-router-dom'
import './PostPopUp.css'
function PostPopUp(props) {
    return (
        <div className='pp-cont'>
            <div className='pp-div'>
                <Link className='pp-link'>
                    <p className='pp-report'>Report</p>
                </Link>
            </div>
            <div className='pp-div'>
                <Link  className='pp-link'>
                    <p className='pp-unfollow'>Unfollow</p>
                </Link>
            </div>
            <div className='pp-div'>
                <Link  className='pp-link'>
                    <p>Go to Post</p>
                </Link>
            </div>
            <div className='pp-div'>
                <Link  className='pp-link' onClick={props.alter}>
                    <p>Cancel</p>
                </Link>
            </div>
        </div>
    )
}

export default PostPopUp
