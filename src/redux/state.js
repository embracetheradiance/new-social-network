import Messages from '../images/messages.svg'
import Friends from '../images/friends.svg'
import Settings from '../images/settings.svg'
import News from '../images/news.svg'
import Profile from '../images/profile.svg'
import { rerender } from '../render'

let state = {
    dialogData: [
        {id: 1,name: 'alex'},
        {id: 2,name: 'ivan'},
        {id: 3,name: 'mark'},
        {id: 4,name: 'bob'}
    ],
    posts:[

    ],
    messages:[
        
    ],
    // addPost(text){
    //     this.posts.push(text)
        
    // },
    sideElements:[
        {id:1,name:'profile',to:'/me',src: Profile,sidename:'My Profile'},
        {id:2,name:'news',to:'/news',src: News,sidename:'News'},
        {id:3,name:'messages',to:'/messages',src: Messages,sidename:'Messages'},
        {id:4,name:'friends',to:'/frieend',src: Friends,sidename:'Friends'},
        {id:5,name:'settings',to:'/settings',src: Settings,sidename:'Settings'},
        
    ]
}
export let addPost = (text) =>{
    let textPost = {
        text:text
    }
    state.posts.push(textPost)
    rerender(state)
}
export let addMessage = (text) => {
    let Message = { 
        msg:text
    }
    state.messages.push(Message)
    rerender(state)
}

export default state