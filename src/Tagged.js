import React from 'react'
import './Tagged.css'
import '@material-ui/icons'
import '@material-ui/core'
import { Loyalty } from '@material-ui/icons'

function Tagged() {
    return (
        <div className='tagged'>
            <Loyalty style={{fontSize: 75}}></Loyalty>
                                <p className='tag-p'>Photos of you</p>
                    <p>When people tag you in photos, they'll appear here.</p>
        </div>
    )
}

export default Tagged
