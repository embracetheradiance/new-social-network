import React from 'react'
import { addPostActCreator, updateNewPostTextActCreator } from '../redux/news-reducer'
import '../styles/news.css'
import News from './news'
import { connect } from 'react-redux'
    let mapStateToProps = (state) =>{
        return {
            posts : state.newsPage.posts,
            newPostText : state.newsPage.newPostText
        }
    }
    let mapDispatchToProps = (dispatch) =>{
        return {
            addPost : () => {
                dispatch(addPostActCreator())
            },
            updateNewPostText : (text) => {
                dispatch(updateNewPostTextActCreator(text))
            }
        }
    }
    const NewsContainer = connect (mapStateToProps,mapDispatchToProps) (News);

export default NewsContainer