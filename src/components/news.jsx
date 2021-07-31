import React from 'react'
import Avatar from '../images/white-logo.jpg'
import '../styles/news.css'
import Post from './post'
const News = (props) => {

    
    let GetText = React.createRef()

    let post = () => {
        let text = GetText.current.value
        props.addPost(text)
 
    }



    return (
        <div className='feed'>
            <div className="new-post">
                <img src={Avatar}></img>
                <div style={{ width: '80%' }}>
                    <input ref={GetText} type="text" placeholder='Whats new?' />
                </div>

                <div className="add-post-btn">
                    <button onClick={post} id='post'>Post</button>
                </div>

            </div>
            {
            
                props.state.posts.map(Element => <Post text={Element.text} />)
            }
        </div>
    );
}
export default News