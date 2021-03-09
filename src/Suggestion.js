import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Suggestion.css'
function Suggestion() {

    const [suggestion, setsuggestion] = useState([])
    const [loading, setloading] = useState(null)



    const  fetchapi = async ()=>{
        const userdata = await axios.get('https://randomuser.me/api/')
        // console.log(userdata.data.results[0])
        setsuggestion(userdata.data.results[0])
        setloading(!null)
    }

    useEffect( ()=>{
        fetchapi()

    }, [])

    return (
        
        <div>
            {loading!==null?
            <div className='su'>
                <div className='sui'>
                <Avatar src={suggestion.picture.large}></Avatar>
                    <div>
                        <p className='sun'>{suggestion.name.first}</p>
                        <p className='nti'>New to instagram</p>
                    </div>
                </div>
                <p className='follow'>Follow</p>
            </div>
        :
        <div>Loading</div>
        }
        </div>
    )
}

export default Suggestion
