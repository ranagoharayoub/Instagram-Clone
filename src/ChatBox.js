import React, { useState } from 'react'
import './ChatBox.css'
import {  EmojiEmotionsOutlined,  FavoriteBorderOutlined, ImageOutlined, InfoOutlined} from '@material-ui/icons'
import { Avatar} from '@material-ui/core'
import { useParams} from 'react-router-dom'
import ChatDetails from './ChatDetails'


function ChatBox(props) {

    const [typing, settyping] = useState("")
    const [state, setstate] = useState(false)
    const [text, settext] = useState('')

    const {chatid} = useParams()
    
    const click = () =>{
        setstate(false)
    }

    const submithandler = (e) =>{
            settext(typing)
            !typing?
            document.getElementById('text').style.padding = '0px 0px'
            :
            document.getElementById('text').style.padding = '0px 10px'
            e.preventDefault()
            settyping('')
    }


    return (
            <div className='chat-window'>
                        { state===false?
                        <div className='chat'>
                            <div className='chat-info'>
                                <div className='cm'>
                                    <div className='cpls'>
                                        <div>
                                            <Avatar src={props.img}></Avatar>
                                        </div>
                                        <div className='ls'>
                                            <p className='lsn'>{chatid}</p>
                                            <p className='la'>Active</p>
                                        </div>
                                    </div>
                                    
                                    <button className='info-btn' onClick={() =>setstate(true)}>
                                        <InfoOutlined></InfoOutlined>
                                    </button>
                                </div>
                            </div>
                            <div className='chat-cont'>
                                <div className='msg-box'>
                                    <div className='sent-text'>
                                        <div className='sent-text-area' id='text'>
                                            <p>{text}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='msg-input'>
                                    <div  className='mi' >
                                        <EmojiEmotionsOutlined></EmojiEmotionsOutlined>
                                        <form onSubmit={submithandler} className='text-form' >
                                            <input type='text'
                                                value={typing}
                                                onChange={e => settyping(e.target.value)}
                                                className='inputfield'
                                                placeholder='Messege...'>    
                                            </input>
                                            {!typing?
                                            <div className='image-fav'>
                                                <ImageOutlined></ImageOutlined>
                                                <FavoriteBorderOutlined></FavoriteBorderOutlined>
                                            </div>
                                            :
                                            <button type='submit' className='send-msg'>
                                            Send
                                            </button>
                                            }
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                         <div>
                            <ChatDetails bool={click}></ChatDetails>
                        </div>
                    }
            </div>
    )
}

export default ChatBox
