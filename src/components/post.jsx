import Avatar from '../images/white-logo.jpg'
import '../styles/post.css'
import Like from '../images/like.svg'
import Comment from '../images/comment.svg'
import Repost from '../images/repost.svg'
const Post = (props) =>{
    return(
        <div className="post">
            <div className="post-header">
                <img src={Avatar} alt="" />
                <div className="post-header-info">
                    <h5 className='post-author'>Name</h5>
                </div>
            </div>
            <div className="post-content">
                <div className="wall-text">
                    <span>{props.text}</span>
                </div>
                <div className="post-like">
                    <div className="like-btns">
                        <img src={Like} alt="" /> 
                        <span>{props.likes}</span>
                        <img id='comm' className='space' src={Comment} alt="" />
                        <img className='space' src={Repost} alt="" />
                    </div>
                </div>
            </div>
            
        </div>
    );
}
export default Post