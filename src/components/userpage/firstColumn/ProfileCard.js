import React, { useContext } from 'react'
import { Card } from 'react-bootstrap'
import { UserProfileContext } from '../../../context/UserProfileContext'

export default function ProfileCard(props) {

    const [userProfile, setUserProfile] = useContext(UserProfileContext)

    const buttonStyle = {
        marginBottom: '10px'
    }

    const handleClick = (e) => {
        e.preventDefault()
        setUserProfile({
            ...userProfile,
            editProfile: true
        })
        
    }

    return (

        <Card className='panel panel-default profile-panel'>
            <Card.Body>

                <Card.Title><h4><b>Profile Details</b></h4></Card.Title>

                <Card.Title><h5><u>Marital Status</u></h5></Card.Title>
                
                <Card.Subtitle className="mb-2 text-muted">
                    <b>{ userProfile.maritalStatus != 'Unknown' ? userProfile.maritalStatus : 'MARITAL STATUS NEEDED' }</b>
                </Card.Subtitle>

                <Card.Title><h5><u>Location</u></h5></Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    <b>{userProfile.location != 'Unknown' ? userProfile.location : 'LOCATION NEEDED'} </b>
                </Card.Subtitle>

                <button style={buttonStyle} className='btn btn-primary' onClick={ handleClick }>
                    Edit Profile
                </button>

            </Card.Body>
        </Card>

    )
}
