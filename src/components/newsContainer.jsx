import React from 'react'
import { addPostActCreator, updateNewPostTextActCreator } from '../redux/news-reducer'
import storeContext from '../storeContext'
import '../styles/news.css'
import News from './news'
const NewsContainer = () => {
    


    return (
        <storeContext.Consumer>{
            (store) => {
                let state = store.getState()
    

                let post = () => {
                    store.dispatch(addPostActCreator())
                    
                }
                let getNewText = (text) => {
                   store.dispatch(updateNewPostTextActCreator(text))
                   
                }
                return <News addPost={post} updateNewPostText={getNewText} posts={state.newsPage.posts} newPostText={state.newsPage.newPostText}/> 
            }   
        }     
        </storeContext.Consumer>
    );
}
export default NewsContainer