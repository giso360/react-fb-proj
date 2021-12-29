import React, { createContext, useState } from 'react'

export const UserProfileContext = createContext()

export default function UserProfileProvider(props) {

    const [userProfile, setUserProfile] = useState({
        maritalStatus: 'Unknown',
        location: 'Unknown',
        editProfile: false
    })

    return (
        <UserProfileContext.Provider value={ [userProfile, setUserProfile] }>
            { props.children }
        </UserProfileContext.Provider>
    )
}
