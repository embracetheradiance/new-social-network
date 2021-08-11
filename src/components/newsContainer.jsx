import React from 'react'
import { addPostActCreator, updateNewPostTextActCreator } from '../redux/news-reducer'
import '../styles/news.css'
import News from './news'
import { connect } from 'react-redux'
// const NewsContainer = () => {
    


//     return (
//         <storeContext.Consumer>{
//             (store) => {
//                 let state = store.getState()
    

//                 let post = () => {
//                     store.dispatch(addPostActCreator())
                    
//                 }
//                 let getNewText = (text) => {
//                    store.dispatch(updateNewPostTextActCreator(text))
                   
//                 }
//                 return <News addPost={post} updateNewPostText={getNewText} posts={state.newsPage.posts} newPostText={state.newsPage.newPostText}/> 
//             }   
//         }     
//         </storeContext.Consumer>
//     );
    let mapStateToProps = (state) =>{
        return {
            posts : state.newsPage.posts,
            newPostText : state.newsPage.newPostText
        }
    }
    let mapDispatchToProps = (dispatch) =>{
        return {
            addPost : () => {
                dispatch(post)
            },
            updateNewPostText : (text) => {
                dispatch(getNewText(text))
            }
        }
    }
    const NewsContainer = connect (mapStateToProps,mapDispatchToProps) (News);

export default NewsContainer