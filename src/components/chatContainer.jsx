import '../styles/chat.css'
import React from 'react';
import { addMessageActCreator, updateNewMessageTextActCreator } from '../redux/dialog-reducer'
import Chat from './chat';
import { connect } from 'react-redux'
let mapStateToProps = (state) =>{
    return {
        messages : state.dialogPage.messages,
        NewMessageText : state.dialogPage.newMessageText,
        name : state.dialogPage.dialogData[0].name
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage : () =>{
            dispatch(addMessageActCreator())
        },
        updateNewMessageText : (msg) => {
            dispatch(updateNewMessageTextActCreator(msg))
        }
    }
}
const ChatContainer = connect(mapStateToProps, mapDispatchToProps) (Chat)


export default ChatContainer