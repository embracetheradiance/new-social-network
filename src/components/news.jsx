import React from 'react'
import Avatar from '../images/white-logo.jpg'
import '../styles/news.css'
import Post from './post'
const News = (props) => {

//  let posts = [
//     {text:'asdasdasd'},
//     {text:'asdasdasd'},
//     {text:'asdasdasd'},
//     ]
    
    let GetText = React.createRef()

    let post = () => {
        let text = GetText.current.value
        let  post = {
            text: text,
        }
        props.state.addPost(post)
 
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