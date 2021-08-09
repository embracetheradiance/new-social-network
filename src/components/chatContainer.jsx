import '../styles/chat.css'
import React from 'react';
import { addMessageActCreator, updateNewMessageTextActCreator } from '../redux/dialog-reducer'
import Chat from './chat';
import storeContext from '../storeContext';
const ChatContainer = () =>{
    
    return(
    <storeContext.Consumer>{
        (store) =>{
            let state = store.getState() 


            let GetMessages = () =>{
                store.dispatch(addMessageActCreator())
                
            }
            let getNewMessageText = (msg) =>{
                store.dispatch(updateNewMessageTextActCreator(msg))
               
            }
            return  <Chat sendMessage={GetMessages} updateNewMessageText={getNewMessageText} messages={state.dialogPage.messages} NewMessageText={state.dialogPage.newMessageText} name={state.dialogPage.dialogData[0].name} />
        }    
    }
    </storeContext.Consumer>
    );
    
   
}
export default ChatContainer