import React, { useEffect, useState } from 'react'
import './HomePage.css'
import '@material-ui/core'
import '@material-ui/icons'
import { Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Modal from 'react-modal'
import SwitchPopUp from './SwitchPopUp'
import PostPopUp from './PostPopUp'
import Status from './Status'
import NewsFeed from './NewsFeed'
import Suggestion from './Suggestion'
import {useStateValue} from './UserContext'
Modal.setAppElement('#root')


function HomePage({width}) {
  
    const [post, setpost] = useState(false)
    const [switchaccount, setswitchaccount] = useState(false)
    const[{user, name}]=useStateValue()
    

  useEffect(() => {
    document.title= 'Instagram'
    
  }, [])
  let rows = []

  for (let i = 0; width > 400? i < 7 : i< 4  ; i++) {
    rows.push(<Status></Status>)
  }
  
  const clickhandler = () =>{
    setpost(true)
    setswitchaccount(true)
  }

  const clickhandlertwo = () =>{
    setpost(false)
    setswitchaccount(false)
  }

    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          '& > *': {
            margin: theme.spacing(1),
          },
        },
        small: {
          width: theme.spacing(4),
          height: theme.spacing(4),
        },
        large: {
          width: theme.spacing(6),
          height: theme.spacing(6),
        },
      }));
      const classes = useStyles(); 

   

    return (
        <div className='home-page'>
            <Modal 
                isOpen={post}
                onRequestClose={clickhandlertwo}
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
                { 
                  switchaccount===true && post===true?
                    <SwitchPopUp alter={clickhandlertwo}></SwitchPopUp>
                    :
                  post===true && switchaccount===false?  
                    <PostPopUp alter={clickhandlertwo}></PostPopUp>
                    :
                    <div></div>
                }  
                
            </Modal>
            <div className='center'>
                <div className='timeline'>
                    <div className='story'>
                         {rows}
                    </div>
                    <div className='newsfeed'>
                        <NewsFeed open = {() => setpost(true)} ></NewsFeed>
                    </div>

                    <div className='newsfeed'>
                        <NewsFeed open = {() => setpost(true)} ></NewsFeed>
                    </div>
                  </div>

                <div className='suggestion'>
                  <div className='suggestion-cont'>
                    <div className='user-info'>
                      <div className='user-avatar'>
                        <Avatar className={classes.large}></Avatar>
                        <div className='user-name'>
                          <p className='id-name'>{user}</p>
                          <p className='profile-name'>{name}</p>
                        </div>
                      </div>
                      
                      <button className='switch' onClick={clickhandler} >
                        <p>Switch</p>
                      </button>
                    </div>
                    <div className='p-sug'>
                      <p className='sfu'>Suggestions For You</p>
                      <p className='see-all'>See All</p>
                    </div>
                    <div className='sp'>

                       <Suggestion></Suggestion>
                       <Suggestion></Suggestion>
                       <Suggestion></Suggestion>
                       <Suggestion></Suggestion>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage
