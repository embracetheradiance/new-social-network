import Messages from '../images/messages.svg'
import Friends from '../images/friends.svg'
import Settings from '../images/settings.svg'
import News from '../images/news.svg'
import Profile from '../images/profile.svg'


let state = {
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
}
let rerender = () =>{

}
export let addPost = () =>{
    let textPost = {
        text:state.newPostText
    }
    state.posts.push(textPost)
    state.newPostText= ''
    rerender(state)
}
export let addMessage = () => {
    let Message = { 
        msg:state.newMessageText
    }
    state.messages.push(Message)
    state.newMessageText= ''
    rerender(state)
}
export let updateNewPostText = (newText) => {
    state.newPostText = newText
    rerender(state)
}
export let updateNewMessageText = (Newtext) => {
    state.newMessageText = Newtext
    rerender(state)
}
export const subscribe = (observer) =>{
    rerender = observer
}
export default state