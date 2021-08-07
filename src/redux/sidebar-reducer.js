import Messages from '../images/messages.svg'
import Friends from '../images/friends.svg'
import Settings from '../images/settings.svg'
import News from '../images/news.svg'
import Profile from '../images/profile.svg'
let initialState = {
    sideElements:[
        {id:1,name:'profile',to:'/me',src: Profile,sidename:'My Profile'},
        {id:2,name:'news',to:'/news',src: News,sidename:'News'},
        {id:3,name:'messages',to:'/messages',src: Messages,sidename:'Messages'},
        {id:4,name:'friends',to:'/frieend',src: Friends,sidename:'Friends'},
        {id:5,name:'settings',to:'/settings',src: Settings,sidename:'Settings'},
        
    ]
}

const sidebarReducer = (state = initialState,action) =>{
    return state
}
export default sidebarReducer