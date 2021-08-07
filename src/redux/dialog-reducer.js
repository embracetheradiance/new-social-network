const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT ='UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
    dialogData: [
        {id: 1,name: 'alex'},
        {id: 2,name: 'ivan'},
        {id: 3,name: 'mark'},
        {id: 4,name: 'bob'}
    ],
    messages:[
    
    ],
    newMessageText: '',
}

const dialogReducer = (state = initialState,action) =>{
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