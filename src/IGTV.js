import React from 'react'
import './IGTV.css'
import {Button} from '@material-ui/core'
import {SlowMotionVideoOutlined} from '@material-ui/icons'

function IGTV() {
    return (
        <div className='igtv'>
            <SlowMotionVideoOutlined style={{fontSize:75}}></SlowMotionVideoOutlined>
            <p>Upload a Video</p>
            <p>Videos must be between 1 and 60 minutes long.</p>
            <Button variant="contained" color="primary" >Upload</Button>
        </div>
    )
}

export default IGTV
