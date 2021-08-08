import React from 'react'
import { addPostActCreator, updateNewPostTextActCreator } from '../redux/news-reducer'
import '../styles/news.css'
import News from './news'
const NewsContainer = (props) => {
    let state = props.store.getState()
    

    let post = () => {
        props.store.dispatch(addPostActCreator())
        
    }
    let getNewText = (text) => {
        props.store.dispatch(updateNewPostTextActCreator(text))
       
    }


    return (<News addPost={post} updateNewPostText={getNewText} posts={state.newsPage.posts} newPostText={state.newsPage.newPostText} />);
}
export default NewsContainer