import React, { useEffect, useState } from 'react'
import './Profile.css'
import '@material-ui/core'
import '@material-ui/icons'
import { Avatar } from '@material-ui/core'
import { AssignmentIndOutlined, BookmarkBorderOutlined, GridOnOutlined, ImageSearchOutlined, Settings} from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';
import Modal from 'react-modal'
import SettingsPopUp from './SettingsPopUp'
import Posts from './Posts'
import { Link, useParams } from 'react-router-dom'
import IGTV from './IGTV'
import Saved from './Saved'
import Tagged from './Tagged'
import {useStateValue} from './UserContext'
Modal.setAppElement('#root')

function Profile() {
    const {profile} = useParams()

    useEffect(() => {
        document.title=profile
    }, [profile])


    const [state, setstate] = useState(false)
    const [{user, name}] = useStateValue()
    
    const useStyles = makeStyles((theme) => ({
        root: {
          display: 'flex',
          '& > *': {
            margin: theme.spacing(1),
          },
        },
        small: {
          width: theme.spacing(3),
          height: theme.spacing(3),
        },
        large: {
          width: theme.spacing(22),
          height: theme.spacing(22),
        },
      }));
      const classes = useStyles();

      


    return (
        <div className='profile-cont'>
            <Modal 
                    isOpen={state} 
                    onRequestClose={() => setstate(false) }
                    shouldCloseOnOverlayClick={true}

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
                          top: '50px',
                          left: '470px',
                          right: '467px',
                          bottom: '50px',
                          border: '1px solid #ccc',
                          background: '#fff',
                          overflow: 'visible',
                          WebkitOverflowScrolling: 'touch',
                          borderRadius: '10px',
                          outline: 'none',
                          padding: '10px 0px'
                          
                        }
                      }}
                    >
                   <SettingsPopUp bool = {() =>setstate(false)}></SettingsPopUp>
            </Modal>
            <div className='profile-div'>
                <div className='upper-profile'>
                    <div className='up-avatar'>
                        <Avatar className={classes.large}></Avatar>
                    </div>
                    <div className='up-info'>
                        <div className='up-nes'> 
                            <p className='up-pn'>{user}</p>
                            <button className='ep-btn'>Edit Profile</button>
                            <button className='settings-btn' onClick={() => setstate(true)}>
                                <Settings></Settings>
                            </button>
                        </div>
                        <div className='up-pff'>
                            <div className='up-pp'>
                                <p className='up-num'>62</p>
                                <p>post</p>
                            </div>
                            <div className='up-pp'>
                                <p className='up-num'>197</p>
                                <p >follower</p>
                            </div>
                            <div className='up-pp'>
                                <p className='up-num'>1024</p>
                                <p>following</p>
                            </div>

                        </div>
                        <div>
                            <p className='up-name'>{name}</p>
                        </div>
                    </div>
                </div>
                <div className='central-profile'>
                    <div className='cp-left'>

                    </div>
                    <div className='cp-right'>
                        <Link to='/username/posts' className='cp-border' id='posts' 
                         style={{ color: profile === 'posts' ? "black" : "dimgray", borderTop : profile === 'posts' ? '1px solid black' : 'none'}}
                        >
                            <GridOnOutlined></GridOnOutlined>
                            <p>POSTS</p>
                        </Link>
                        <Link to='/username/channel' className='cp-border' id='channel'
                        style={{ color: profile === 'channel' ? "black" : "dimgray", borderTop : profile === 'channel' ? '1px solid black' : 'none'}}
                        >
                            <ImageSearchOutlined></ImageSearchOutlined> 
                            <p>IGTV</p>
                        </Link>
                        <Link to='/username/saved' className='cp-border' id='saved'
                        style={{ color: profile === 'saved' ? "black" : "dimgray", borderTop : profile === 'saved' ? '1px solid black' : 'none'}}
                        >
                            <BookmarkBorderOutlined></BookmarkBorderOutlined>
                            <p>SAVED</p>
                        </Link>
                        <Link to='/username/tagged' className='cp-border' id='tagged'
                        style={{ color: profile === 'tagged' ? "black" : "dimgray", borderTop : profile === 'tagged' ? '1px solid black' : 'none'}}
                        >
                            <AssignmentIndOutlined></AssignmentIndOutlined>
                            <p>TAGGED</p>
                        </Link>
                    </div>   
                </div>
                {  profile === 'posts'?
                    <div className='lower-profile'>
                    <Posts></Posts>
                </div>
                :
                profile === 'channel'?
                <div className='igtv'>
                    <IGTV></IGTV>
                </div>
                :
                profile === 'saved'?
                <div className='saved'>
                    <Saved></Saved>
                </div>
                :
                profile === 'tagged'?
                <div className='tagged'>
                    <Tagged></Tagged>
                </div>
                :
                <div>
                    <p>Sorry! Nothing to Show</p>
                    </div>    
            }
            </div>
        </div>
    )
}

export default Profile
