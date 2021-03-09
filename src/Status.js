import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import axios from "axios";
import './Status.css'

function Status(props) {
    
    const [loading, setloading] = useState(null)
    const [status, setstatus] = useState([])
    
    const fetchuser = async () =>{
        const user = await axios.get('https://randomuser.me/api/')
        // console.log(user.data.results[0])
        setstatus(user.data.results[0])
        setloading(!null)
    }

    useEffect(() => {
        fetchuser()
    }, [])

    return (
        <div>
            {
                loading === null?
                <div>Loading</div>
                :
                <div className='avatar'>
                    <Avatar src= {status.picture.large} alt={status.name.first} className={props.size}></Avatar>
                    <p>{status.name.first}</p>
                </div>
            }
        </div>
    )
}

export default Status
