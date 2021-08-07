import {combineReducers, createStore} from 'redux'
import dialogReducer from './dialog-reducer';
import newsReducer from './news-reducer';
import sidebarReducer from './sidebar-reducer';

let reducers = combineReducers({
    newsPage : newsReducer,
    dialogPage : dialogReducer,
    sideBar : sidebarReducer
})

let store = createStore(reducers);

export default store