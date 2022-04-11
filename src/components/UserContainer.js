import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux'

const UserContainer = ({ fetchUsers, userData }) => {
    useEffect(() => {
        fetchUsers()
    }, [])

    console.log(userData)

    return userData.loading ? <h2>Loading...</h2> : userData.error ? <h2>{userData.error}</h2> : (
        <>
            <h1>User List</h1>
            <h2>{userData && userData.users && userData.users.map(user => <div key={user.id}>{user.name}</div>)}</h2>
        </>
    )
}


const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)