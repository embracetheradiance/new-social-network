import '../../styles/users.css'
import React from 'react'
import User from './user'
import * as axios from 'axios'


class Users extends React.Component {
    constructor(props){
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then( response => {
            props.setUsers(response.data.items)
        })
    }
    render(){
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
                        {this.props.users.map( u =>  <User id={u.id} avatar={u.photos.small} fullname={u.name} city={u.city} age={u.age} addFriend={this.props.addFriend} removeFriend={this.props.removeFriend} friend={u.friend} /> )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Users