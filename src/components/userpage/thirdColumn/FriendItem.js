import React, { useState } from 'react'

export default function FriendItem(props) {

    const [unfriend, setUnfriend] = useState(false)

    return (
        <>
            {
                !unfriend ?
                    <li>
                        <a href="#">{props.friendName}</a>
                        <a className="text-danger" href="#" onClick={(e) => setUnfriend(true)}>[unfriend]</a>
                    </li> : ''
            }
        </>
    )
}
