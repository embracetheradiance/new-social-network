import Messages from '../images/messages.svg'
import Friends from '../images/friends.svg'
import Settings from '../images/settings.svg'
import News from '../images/news.svg'
import Profile from '../images/profile.svg'

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT ='UPDATE-NEW-MESSAGE-TEXT'

let store = {
    _state :{
        dialogData: [
            {id: 1,name: 'alex'},
            {id: 2,name: 'ivan'},
            {id: 3,name: 'mark'},
            {id: 4,name: 'bob'}
        ],
        posts:[
    
        ],
        newPostText: '',
        newMessageText: '',
        messages:[
            
        ],
        sideElements:[
            {id:1,name:'profile',to:'/me',src: Profile,sidename:'My Profile'},
            {id:2,name:'news',to:'/news',src: News,sidename:'News'},
            {id:3,name:'messages',to:'/messages',src: Messages,sidename:'Messages'},
            {id:4,name:'friends',to:'/frieend',src: Friends,sidename:'Friends'},
            {id:5,name:'settings',to:'/settings',src: Settings,sidename:'Settings'},
            
        ]
    },
    _rerender () {

    },
    subscribe (observer){
        this._rerender = observer
    },
    getState(){
      return this._state  
    },
    dispatch (action) {
        if (action.type === 'ADD-POST'){
            let textPost = {
                text:this._state.newPostText
            }
            this._state.posts.push(textPost)
            this._state.newPostText= ''
            this._rerender(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.newPostText = action.newText
            this._rerender(this._state)
        } else if (action.type === 'ADD-MESSAGE'){
            let Message = { 
                msg:this._state.newMessageText
            }
            this._state.messages.push(Message)
            this._state.newMessageText= ''
            this._rerender(this._state)
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT'){
            this._state.newMessageText = action.newText
            this._rerender(this._state)
        }
    }
}
export const addPostActCreator = () => ({type: ADD_POST})
    
export const updateNewPostTextActCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})
export const addMessageActCreator = () => ({type:ADD_MESSAGE})
export const updateNewMessageTextActCreator = (msg) => ({
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: msg
})

export default store