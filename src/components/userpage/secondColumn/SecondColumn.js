import React from 'react'
import NewPostProvider from '../../../context/NewPostContext'
import FeedPost from './FeedPost'
import PostForm from './PostForm'
import UserProfile from './UserProfile'

export default function SecondColumn(props) {
    return (
        <div className="col-md-6 second-column-container">

            <UserProfile />
            <hr />
            <NewPostProvider>
                <PostForm />
                <hr />
                <FeedPost />
            </NewPostProvider>

        </div>
    )
}
