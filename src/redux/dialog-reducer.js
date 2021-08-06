const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT ='UPDATE-NEW-MESSAGE-TEXT'

const dialogReducer = (action,state) =>{
    switch(action.type){
        case ADD_MESSAGE:
            let Message = {
                msg: state.newMessageText
            }
            state.messages.push(Message)
            state.newMessageText= ''
           return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText
            return state;
        default:
            return state;


    }
}
export const addMessageActCreator = () => ({type:ADD_MESSAGE})
export const updateNewMessageTextActCreator = (msg) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: msg
})
export default dialogReducer