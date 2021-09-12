import '../../styles/users.css'
import React from 'react'
import User from './user'
import * as axios from 'axios'


class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })

    }

    render() {
        let pageCount = Math.ceil((this.props.totalUsersCount / 100) / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }

        return (
            <div className='friends'>
                <div className="friends-header">
                    <button>Find friends</button>
                </div>
                <div className="search-friends">
                    <input placeholder='Search friends' />
                </div>
                <div className="friends-list">
                    <div className="list-content">
                        {this.props.users.map(u => <User id={u.id} avatar={u.photos.large} fullname={u.name} city={u.city} age={u.age} addFriend={this.props.addFriend} removeFriend={this.props.removeFriend} friend={u.friend} />)}
                    </div>
                </div>
                <div className="friends-page">
                    {pages.map(p => {
                        return (
                            <span className={this.props.currentPage === p && 'selected-page'} onClick={() => { this.onPageChanged(p) }}>{p}</span>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Users