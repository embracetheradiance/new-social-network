import '../styles/chat.css'
import File from '../images/file.svg'
import Send from '../images/send.svg'
import { NavLink } from 'react-router-dom';
import Msg from './msg';
import React from 'react';
import { addMessageActCreator, updateNewMessageTextActCreator } from '../redux/state';
const Chat = (props) =>{

    let GetMessages = () =>{
        props.dispatch(addMessageActCreator())
        
    }
    let getNewMessageText = (e) =>{
        let msg = e.target.value
        props.dispatch(updateNewMessageTextActCreator(msg))
       
    }
    return(
        <div className="chat">
            <div className="chat-header">
                <NavLink to='/messages'>
                    <div className="chat-back">
                        Back
                    </div>
                </NavLink>
                <div className="chat-name">
                    <span>{props.name}</span>
                    <div className='status'>
                        <span>last seen recently</span>
                    </div>
                   
                </div>
                <div className="chat-avatar">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/800px-Black_flag.svg.png" alt="" />
                </div>
            </div>
            <div className="chat-body"> 
               {props.state.messages.map(el=><Msg message={el.msg} />)}
            </div>
            <div className="chat-input">
                <div className="chat-media">
                    <img src={File} alt="" />
                </div>
                {/* <div className="chat-textarea" contentEditable='true' role='textbox' data-placeholder='Write a message' aria-multiline='true'></div> */}
                <div className="chat-textarea">
                    <input onChange={getNewMessageText} value={props.state.newMessageText} placeholder='Write a message...'></input>
                </div>
                <div className="chat-send-btn">
                    <img onClick={GetMessages} src={Send} alt="" />
                </div>
            </div>

        </div>
    );
}
export default Chat