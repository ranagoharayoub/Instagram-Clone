import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Avatar, Checkbox } from '@material-ui/core'
import { InfoOutlined } from '@material-ui/icons'
import './ChatDetails.css'


function ChatDetails(props) {

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
          width: theme.spacing(9),
          height: theme.spacing(9),
        },
      }));
      const classes = useStyles(); 


    return (
        <div>
            <div className='chat-info'>
                            <div className='cm'>
                                <div className='details'>
                                    <p>Details</p>
                                </div>
                                
                                <button className='info-btn' onClick={props.bool}>
                                    <InfoOutlined></InfoOutlined>
                                </button>
                            </div>
                        </div>
                        <div className='chat-cont'>
                            <div className='mute'>
                                <Checkbox></Checkbox>
                                <p>Mute Messages</p>
                            </div>
                            <div className='members'>
                                
                                    <div className='p-mem'>
                                        <p>Members</p>
                                    </div>
                                    <div className='manu'>
                                        <div>
                                            <Avatar className={classes.large}></Avatar>
                                        </div>
                                        
                                        <div className='mnu'>
                                            <p>Name</p>
                                            <p>Username</p>
                                        </div>
                                    </div>
                            
                            </div>
                            <div className='actions'>
                                <div className='a-margin'>
                                <p>Delete Chat</p>
                                <p>Block</p>
                                <p>Report</p>
                                </div>
                            </div>
                        </div>
        </div>
    )
}

export default ChatDetails
