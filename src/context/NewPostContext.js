import React, { useState } from 'react'
import { createContext } from 'react'

export const NewPostContext = createContext()

export default function NewPostProvider(props) {

    const [newPost, setNewPost] = useState({

    })

    return (
        <NewPostContext.Provider value={ [newPost, setNewPost] }>
            { props.children }
        </NewPostContext.Provider>
    )
}
