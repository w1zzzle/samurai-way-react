import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC } from "../../redux/usersReducer"
import s from "./Users.module.css"
import { connect } from "react-redux"
import Users from "./Users"

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
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (user) => {
            dispatch(setUsersAC(user))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
