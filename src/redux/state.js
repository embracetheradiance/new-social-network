import Messages from '../images/messages.svg'
import Friends from '../images/friends.svg'
import Settings from '../images/settings.svg'
import News from '../images/news.svg'
import Profile from '../images/profile.svg'
import dialogReducer from './dialog-reducer'
import newsReducer from './news-reducer'
import sidebarReducer from './sidebar-reducer'



let store = {
    _state :{
        dialogPage:{
            dialogData: [
                {id: 1,name: 'alex'},
                {id: 2,name: 'ivan'},
                {id: 3,name: 'mark'},
                {id: 4,name: 'bob'}
            ],
            messages:[
            
            ],
            newMessageText: '',
        },
        newsPage:{
            posts:[
                
            ],
            newPostText: '',
        },
       sideBar:{
        sideElements:[
            {id:1,name:'profile',to:'/me',src: Profile,sidename:'My Profile'},
            {id:2,name:'news',to:'/news',src: News,sidename:'News'},
            {id:3,name:'messages',to:'/messages',src: Messages,sidename:'Messages'},
            {id:4,name:'friends',to:'/frieend',src: Friends,sidename:'Friends'},
            {id:5,name:'settings',to:'/settings',src: Settings,sidename:'Settings'},
            
        ]
       },
       
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

       this._state.dialogPage = dialogReducer(this._state.dialogPage, action)
       this._state.newsPage = newsReducer(this._state.newsPage, action)
       this._state.sideBar = sidebarReducer(this._state.sideBar, action)
       this._rerender(this._state)

    }
}

export default store