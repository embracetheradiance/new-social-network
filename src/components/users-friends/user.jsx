import React from 'react'
const User = (props) =>{
    
    return(
        <div className="user" key={props.id}>
            <div className="user-avatar">
               <img src={props.avatar} alt="avatar" /> 
            </div>
            <div className="user-info">
                <div className="user-fullname">
                    {props.fullname}
                </div>
                <div className="user-city-age">
                    {props.city}, {props.age} years old
                </div>
            </div>
            <div className="user-controls">
                <div className="add-friend">
                    {props.friend
                        ? <button onClick={() => {props.removeFriend(props.id)}}>Unfriend</button> 
                        : <button onClick={() => {props.addFriend(props.id)}}>Add friend</button>} 
                    
                </div>
                
            </div>
        </div>
    )
}
export default User