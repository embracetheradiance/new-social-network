import Avatar from '../images/white-logo.jpg'
import '../styles/news.css'
import Post from './post'
const News = () =>{
    return(
        <div className='feed'>
            <div className="new-post">
                <img src={Avatar}></img>
                <div style={{width: '80%'}}>
                    <input type="text" placeholder='Whats new?' />
                </div>
                
                <div className="add-post-btn">
                    <button id='post'>Post</button>
                </div>
                
            </div>
            <Post text='some text' />
            <Post text='some text' />
            <Post text='some text' />
        </div>
    );
}
export default News