import React, { useEffect, useContext, useState, useRef } from 'react'
import { UserProfileContext } from '../../../context/UserProfileContext'
import ProfileManagement from './ProfileManagement'

export default function StatusPanel(props) {



    const [userProfile, setUserProfile] = useContext(UserProfileContext)

    const [statusPanelState, setStatusPanelState] = useState({
        maritalStatus: '',
        location: ''
    })

    const focusDiv = useRef(null)

    const handleMaritalStatusChange = (e) => {
        setStatusPanelState({
            ...statusPanelState,
            maritalStatus: e.target.value
        })
    }

    const handleLocationChange = (e) => {
        setStatusPanelState({
            ...statusPanelState,
            location: e.target.value
        })
    }

    const handleClick = (e) => {
        e.preventDefault()
        document.getElementById("status").value = ''
        document.getElementById("loc").value = ''
        setUserProfile({
            ...userProfile,
            maritalStatus: statusPanelState.maritalStatus,
            location: statusPanelState.location,
            editProfile: false
        })
    }

    // useEffect(() => {
    //     if (focusDiv != null) {
    //         focusDiv.current.focus()
    //     }
    // }, [focusDiv])

    return (
        <>
            {
                userProfile.editProfile ?
                    <ProfileManagement
                        handleMaritalStatusChange={handleMaritalStatusChange}
                        handleLocationChange={handleLocationChange}
                        handleClick={handleClick}
                    /> : ''
            }
        </>

    )
}
