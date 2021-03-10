import React, { useEffect, useState } from 'react'
import './Inbox.css'
import '@material-ui/core'
import '@material-ui/icons'
import {  ExpandMore, RateReview, Telegram } from '@material-ui/icons'
import { Avatar } from '@material-ui/core'
import {Link} from 'react-router-dom'
import PopUp from './PopUp'
import Modal from 'react-modal'
import SwitchPopUp from './SwitchPopUp'
import ChatBox from './ChatBox'
import axios from 'axios'
Modal.setAppElement('#root')

function Inbox({width}) {

    
    const [state, setstate] = useState(false)
    const [chatclick, setchatclick] = useState(false)
    const [open, setopen] = useState(false)
    const [switchaccount, setswitchaccount] = useState(false)

    useEffect(() => {
        document.title='inbox-chat'
    }, [])

    const clickhandler = () =>{
        setopen(false)
        
    }

    const clickhandlertwo = () =>{
        setswitchaccount(false)
    }

    const mobilechat = () =>{
        setchatclick(true)
        setstate(true)
    }


    const [chat, setchat] = useState([])
    const [loading, setloading] = useState(null)

    const  fetchapi = async ()=>{
        const userdata = await axios.get('https://randomuser.me/api/')
        console.log(userdata.data.results[0])
        setchat(userdata.data.results[0])
        setloading(!null)
    }

    useEffect( ()=>{
        fetchapi()

    }, [])

    return (
        <div className='inbox'>
            
            <Modal 
                    isOpen={open} 
                    onRequestClose={() => setopen(false) }
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
                          top: '150px',
                          left: '470px',
                          right: '467px',
                          bottom: '150px',
                          border: '1px solid #ccc',
                          background: '#fff',
                          overflow: 'visible',
                          WebkitOverflowScrolling: 'touch',
                          borderRadius: '10px',
                          outline: 'none',
                          padding: '0px'
                        }
                      }}
                    >
                    {/* <div className='popup'> */}
                        <PopUp bool={clickhandler}></PopUp>
                    {/* </div> */}
            </Modal>
            <Modal 
                isOpen={switchaccount}
                onRequestClose={() => setswitchaccount(false)}
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
                <SwitchPopUp alter={clickhandlertwo}></SwitchPopUp>
            </Modal>
            <div className='inbox-container'>

                <div className={chatclick===true? 'rightmob-cont': 'right-cont' }>
                    <div className='name-cont'>
                        <div className='name-arrow'>
                                <p>ranagohar1163</p>
                                <div>
                                    <button className='btn-nc' onClick={() =>setswitchaccount(true)}>
                                        <ExpandMore ></ExpandMore>
                                    </button>
                                </div>
                        </div>
                        <div className='new-chat'>
                            <button className='btn-nc' onClick={() => setopen(true)}>
                                <RateReview></RateReview>
                            </button>    
                        </div>
                    </div>
                    <div>
                    {
                        loading!==null?
                        <Link className='id' to={`/inbox/${chat.name.first}`} onClick={ width <400 ? mobilechat: () => setstate(true)}>
                            <div className='chat-box'>
                                    <div className='ic'>
                                        <div>
                                            <Avatar src={chat.picture.large}></Avatar>
                                        </div>
                                        <div className='ic-name'>
                                            <p className='cn'>{chat.name.first}</p>
                                            <p className='lastmsg'>Last msg</p>
                                        </div>
                                    </div>                               
                            </div>
                        </Link>
                        
                        :
                        <div>Loading</div> 
                        
                    }
                     </div>
                    </div>
                <div className='left-cont'>
                    
                    {
                        state===false?
                        <div className='wcw'>
                            <Telegram color='primary' style={{ fontSize: 100 }}></Telegram>
                            <p>Your Messages</p>
                            <p>Send private photos and messages to a friend or group.</p>
                            <button className='btn' onClick={() => setopen(true)}>Send Message</button>
                        </div>
                    :
                        <div>
                            <ChatBox img = {chat.picture.large}></ChatBox>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Inbox
