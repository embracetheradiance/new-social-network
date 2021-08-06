const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const newsReducer = (state,action) =>{
    switch(action.type){
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return state;
        case ADD_POST:
            let textPost = {
                text:state.newPostText
            }
           state.posts.push(textPost)
           state.newPostText= ''
           return state;
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