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
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText : action.newText
            }
            
        case ADD_MESSAGE:{
            let msg = state.newMessageText
            return {
                ...state,
                newMessageText : '',
                messages : [...state.messages,{ msg: msg}]
            }
        }
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