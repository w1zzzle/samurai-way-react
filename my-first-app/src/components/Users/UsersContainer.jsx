import { followAC, unfollowAC, setUsersAC } from "../../redux/usersReducer"
import s from "./Users.module.css"
import { connect } from "react-redux"
import Users from "./Users"

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
