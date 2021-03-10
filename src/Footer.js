import React, { useState } from 'react'
import './Footer.css'
import '@material-ui/core'
import '@material-ui/icons'
import { Avatar } from '@material-ui/core'
import { CameraAlt, ExploreOutlined, FavoriteBorderOutlined, Home, Telegram} from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom'
import DropDown from './DropDown'
import Modal from 'react-modal'
Modal.setAppElement('#root')

function Footer({userout}) {

  const [state, setstate] = useState(false)

  const clickhandler = () =>{
    setstate(false)
  }

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
          width: theme.spacing(7),
          height: theme.spacing(7),
        },
      }));
      const classes = useStyles();      

    return (
        <div className='footer-body'>
              <Modal 
                isOpen={state}
                onRequestClose={clickhandler}
                style={{
                    overlay: {
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: 'rgba(0, 0, 0, 0)'
                    },
                    content: {
                        position: 'absolute',
                        top: '55px',
                        left: '950px',
                        right: '170px',
                        bottom: '345px',
                        border: '1px solid #ccc',
                        background: '#fff',
                        overflow: 'auto',
                        WebkitOverflowScrolling: 'touch',
                        borderRadius: '10px',
                        outline: 'none',
                        padding: '00px'
                    }
                  }}
                >
                  <DropDown logout={userout} bool={clickhandler}></DropDown>
            </Modal>
            <div className='footer-container'>
                <div className='camera'>
                  <CameraAlt></CameraAlt>
                </div>
                <Link className='name' to='/'>
                  <div className='name'>Instagram</div>
                </Link>
                <input className='fs' type='text' placeholder='Search here....' ></input>
                <div className='footer-icons'>
                  <Link to='/' className='home-icon' >
                    <Home ></Home>
                  </Link>
                  <Link to='/inbox/chat' className='tele-icon'>
                    <Telegram ></Telegram>
                  </Link>  
                  <Link to='/explore' className='explore-icon' >
                    <ExploreOutlined ></ExploreOutlined>
                  </Link>  
                  <Link to='/newslist' className='news-icon'>
                    <FavoriteBorderOutlined ></FavoriteBorderOutlined>
                  </Link>
                  <button className='fp-btn' onClick={() => setstate(true)}>
                    <Avatar className={classes.small}></Avatar>
                  </button>  
                </div>
            </div>
        </div>
    )
}

export default Footer
