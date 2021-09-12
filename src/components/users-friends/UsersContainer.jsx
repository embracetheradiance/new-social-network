import { connect } from "react-redux"
import { addFriendAC, removeFriendAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC } from "../../redux/users-reducer"
import Users from "./users"

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage


    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addFriend: (userId) => {
            dispatch(addFriendAC(userId))
        },
        removeFriend: (userId) => {
            dispatch(removeFriendAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalUsersCount) => {
            dispatch(setTotalUsersCountAC(totalUsersCount))
        }


    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users)