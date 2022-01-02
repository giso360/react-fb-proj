import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { Card } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { NewPostContext } from '../../../context/NewPostContext'
import Post from './Post'

export default function FeedPost() {

    const { username } = useParams();

    const [newPost, setNewPost] = useContext(NewPostContext)

    const [state, setState] = useState({
        user: username,
        posts: [{ ...newPost }]
    })

    const axiosCall = async () => {

        const response = await axios.get('http://localhost:3002/posts');
        if (response.data.length > 0) {
            const userPosts = response.data.filter(post => post.user === state.user).map(post => ({ ...post, likeButtonBefore: '-', shareButtonBefore: '-' }))
            setState({
                ...state,
                posts: [...userPosts]
            })
        } else {
            setState({
                ...state
            })
        }
    }

    const handleLikes = (e) => {
        let upStatusClassNamesUp = "bi bi-hand-thumbs-up-fill text-primary unclickable"
        let upStatusClassNamesDown = "bi bi-hand-thumbs-down-fill text-danger unclickable"
        if (e.target.children[1].className[0] === '-') {
            e.target.children[1].innerHTML = parseInt(e.target.children[1].innerHTML) + 1
            e.target.children[1].className = '+ unclickable'
            e.target.children[0].className = upStatusClassNamesDown
        } else {
            e.target.children[1].innerHTML = parseInt(e.target.children[1].innerHTML) - 1
            e.target.children[1].className = '- unclickable'
            e.target.children[0].className = upStatusClassNamesUp
        }
    }

    const handleShares = (e) => {
        if (e.target.children[1].className[0] === '-') {
            e.target.children[1].innerHTML = parseInt(e.target.children[1].innerHTML) + 1
            e.target.className = `${e.target.className} unclickable`
        }
    }

    useEffect(() => {
        axiosCall()
    }, [])

    useEffect(() => {
        console.log(state);
        console.log(newPost);
        setState({
            ...state,
            posts: [{ ...newPost }, ...state.posts]
        })
    }, [newPost])

    useEffect(() => {
        
    }, [state])

    const items = state.posts.map((post, i) => {

        return (
            <>
                <Post
                    handleLikes={ handleLikes }
                    handleShares={ handleShares }
                    id={post.id}
                    image={post.img}
                    date={post.date}
                    content={post.content}
                    tags={post.tags}
                    likes={post.likes}
                    likeButtonBefore={post.likeButtonBefore}
                    shares={post.shares}
                    shareButtonBefore={post.shareButtonBefore}
                    key={i}
                />
                <hr/>
            </>
        )
    })


    return (
        <div>
            { items }
        </div>
    )
}
