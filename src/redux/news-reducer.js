const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts:[
                
    ],
    newPostText: ''
}

const newsReducer = (state = initialState,action) =>{
    switch(action.type){
        case UPDATE_NEW_POST_TEXT:{
            return{
                ...state,
                newPostText : action.newText
            }
        }    
        case ADD_POST: {
            let textPost = {
                text:state.newPostText
            }
            return{
                ...state,
                posts : [...state.posts, textPost],
                newPostText: ''
            }
        }
        default:
            return state;
            
    }
    
}
export const addPostActCreator = () => ({type: ADD_POST})
    
export const updateNewPostTextActCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})
export default newsReducer