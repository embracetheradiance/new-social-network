import '../../styles/users.css'
import React from 'react'
import User from './user'
const Users = (props) =>{
    if (props.users.length === 0 ){
        props.setUsers([
            { id: 1, friend: true, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/750px-Black_flag.svg.png', fullname: 'Alex', age: '15', city: 'Moscow' },
            { id: 2, friend: true, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/750px-Black_flag.svg.png', fullname: 'Ivan', age: '21', city: 'Novosibirsk' },
            { id: 3, friend: false, avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Black_flag.svg/750px-Black_flag.svg.png', fullname: 'Mark', age: '26', city: 'Kiev' },
        ])
    }
    
    return(
        <div className='friends'>
            <div className="friends-header">
                <button>Find friends</button>
            </div>
            <div className="search-friends">
                <input placeholder='Search friends' />
            </div>
            <div className="friends-list">
                <div className="list-content">
                    {props.users.map( u =>  <User id={u.id} avatar={u.avatar} fullname={u.fullname} city={u.city} age={u.age} addFriend={props.addFriend} removeFriend={props.removeFriend} friend={u.friend} /> )}
                </div>
            </div>
        </div>
    )
}
export default Users