import React, { useEffect } from 'react'
import logo from '../../../img/header.png'

export default function UserProfile() {

    const userProfileStyles = [
        {
            display: 'block',
            width: '100%',
            marginLeft: 'auto',
            marginRight: 'auto'

        }
    ]

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="panel panel-default user-profile-container" >
            <div className="panel-body panel-profile-body">
                <img src={logo} className="media-object profile-image" style={userProfileStyles[0]} alt='not' />
                <div className='profile-buttons-container'>
                    <button className="btn btn-primary panel-button-like">Like</button>
                    <button className="btn btn-success panel-button-share">Share</button>
                </div>
            </div>
        </div>
    )
}
