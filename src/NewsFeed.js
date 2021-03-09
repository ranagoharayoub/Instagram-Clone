import { Avatar } from '@material-ui/core'
import { MoreHoriz } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import './NewsFeed.css'
import axios from 'axios'


function NewsFeed(props) {


    const [loading, setloading] = useState(null)
    const [newsfeed, setnewsfeed] = useState([])

    // const baseurl = 'https://pixabay.com/api/'
    // const token = '20038195-2ca1800555f8137847ef0eba6'

    // const authaxios = axios.create({
    //   baseURL:baseurl,
    //   headers:{
    //     'Authorization': `Bearer ${token}`
    //   }
    // })

    const fetchuser = async () =>{


        const user = await axios.get('https://randomuser.me/api/')
        setnewsfeed(user.data.results[0])
        setloading(!null)
    }


    useEffect(() => {
        fetchuser()
    }, [])

    return (

                        <div className='post-card'>
                          <div className='post-name'>
                              {
                                  loading!== null?
                                  <div className='post-title'>
                                    <Avatar src={newsfeed.picture.large}></Avatar>
                                    <p>{newsfeed.name.first}</p>
                                  </div >
                                    :
                                    <div>Loading</div>
                              }
                            
                            <button className='post-action' onClick={props.open}>
                              <MoreHoriz></MoreHoriz>  
                            </button>  
                          </div>
                          <div className='post-div'>
                            <div className='post-cont'>
                                <img className='nf-img' src='https://wallpapercave.com/wp/wp2634222.jpg' alt='img'></img>
                            </div>
                          </div>
                        </div>
    )
}

export default NewsFeed
