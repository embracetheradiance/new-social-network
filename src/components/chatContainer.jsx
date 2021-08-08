import '../styles/chat.css'
import React from 'react';
import { addMessageActCreator, updateNewMessageTextActCreator } from '../redux/dialog-reducer'
import Chat from './chat';
const ChatContainer = (props) =>{
    let state = props.store.getState() 


    let GetMessages = () =>{
        props.store.dispatch(addMessageActCreator())
        
    }
    let getNewMessageText = (msg) =>{
        props.store.dispatch(updateNewMessageTextActCreator(msg))
       
    }
    return(<Chat sendMessage={GetMessages} updateNewMessageText={getNewMessageText} messages={state.dialogPage.messages} NewMessageText={state.dialogPage.newMessageText} name={state.dialogPage.dialogData[0].name} />);
}
export default ChatContainer