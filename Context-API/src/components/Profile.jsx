import React, {useContext } from 'react'
import  UserContext  from '../Context/userContext'

const Profile = () => {

    const {user} = useContext(UserContext)

    if (!user) return <div>Please login first</div>
    return (
        <div>
            <h2>Welcome</h2>
            <p>Username: {user.username}</p>
        </div>
    )
    
}

export default Profile