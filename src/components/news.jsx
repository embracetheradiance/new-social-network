import React from 'react'
import Avatar from '../images/white-logo.jpg'
import { addPostActCreator, updateNewPostTextActCreator } from '../redux/news-reducer'
import '../styles/news.css'
import Post from './post'
const News = (props) => {

    

    let post = () => {
        props.dispatch(addPostActCreator())
        
    }
    let getNewText = (e) => {
        let text = e.target.value
        props.dispatch(updateNewPostTextActCreator(text))
       
    }


    return (
        <div className='feed'>
            <div className="new-post">
                <img src={Avatar}></img>
                <div style={{ width: '80%' }}>
                    <input onChange={getNewText} type="text" value={props.state.newsPage.newPostText} placeholder='Whats new?' />
                </div>

                <div className="add-post-btn">
                    <button onClick={post} id='post'>Post</button>
                </div>

            </div>
            {
                props.state.newsPage.posts.map(Element => <Post text={Element.text} />)
            }
        </div>
    );
}
export default News