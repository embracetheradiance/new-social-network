const ADD_FRIEND = 'ADD-FRIEND'
const REMOVE_FRIEND = 'REMOVE-FRIEND'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'

let initialState = {
    users: [

    ],
    pageSize: 7,
    totalUsersCount: 0,
    currentPage: 1
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FRIEND:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, friend: true }
                    }
                    return u;
                })
            }
        case REMOVE_FRIEND:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, friend: false }
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state, users: action.users
            }
        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }
        default:
            return state;

    }

}
export const addFriendAC = (userId) => ({ type: ADD_FRIEND, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export const removeFriendAC = (userId) => ({ type: REMOVE_FRIEND, userId })
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCountAC = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })
export default usersReducer