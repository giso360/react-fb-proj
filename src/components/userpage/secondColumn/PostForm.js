import randomInteger from 'random-int'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { NewPostContext } from '../../../context/NewPostContext'

export default function PostForm(props) {

    const postFormStyles = [
        {
            backgroundSize: 'cover',
            marginLeft: '0px',
            marginRight: '0px',
            width: '100%'
        },
        {
            marginLeft: '10px',
            marginTop: '10px',
            borderRadius: '0 !important'
        },
        {
            marginLeft: '240px',
            marginTop: '10px'
        },
        {
            marginTop: '10px',
            borderRadius: '0 !important'
        },
        {
            borderStyle: 'ridge',
            padding: '2px'
        },
        {
            width: '500px'
        }

    ]

    const [formState, setFormState] = useState({
        dateButton: false,
        imgButton: false,
        tagsButton: false,
    })

    const [postPlhdr, setPostPlhdr] = useState({
        id: 0,
        img: '',
        date: '',
        content: '',
        tags: [],
        likes: 0,
        shares: 0
    })

    const [newPost, setNewPost] = useContext(NewPostContext)

    useEffect(() => {
    }, [postPlhdr])

    useEffect(() => {
        newPost.id = randomInteger(1000)
        newPost.likeButtonBefore = '-'
        newPost.shareButtonBefore = '-'
        document.getElementById("post-content-input").value = ''
        console.log(`NewPost is: ${newPost.id} // ${newPost.content} // ${newPost.date}`);
    }, [newPost])



    return (
        <div className='post-form-container' style={postFormStyles[4]}>

            <form >
                <div className="input-group post-form-input" style={postFormStyles[0]}>
                    <input className="form-control" type="text" id="post-content-input" placeholder="Make a post..."
                        onChange={(e) => {
                            let content = e.target.value
                            setPostPlhdr((e) => ({
                                ...postPlhdr,
                                content: content
                            }))
                        }} />
                </div>
            </form>

            <span className="input-group-btn">

                <button className="btn btn-danger" style={postFormStyles[3]}
                    onClick={() => {
                        setFormState({
                            dateButton: true
                        })
                    }} >
                    + Date
                </button>

                <button className="btn btn-primary" style={postFormStyles[1]}
                    onClick={(e) => {
                        setFormState({
                            imgButton: true
                        })
                    }}>
                    + Image Url
                </button>

                <button className="btn btn-warning" style={postFormStyles[1]}
                    onClick={(e) => {
                        setFormState({
                            tagsButton: true
                        })
                    }}>
                    + Tags
                </button>

                <button className="btn btn-success" style={postFormStyles[2]}
                    onClick={(e) => {
                        if (postPlhdr.content.length > 0) {
                            setNewPost({ ...postPlhdr })
                        }
                    }}
                >
                    Post
                </button>
            </span>

            {formState.dateButton ?
                <>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4>Pick Date</h4>
                        </div>
                        <div className="modal-body">
                            <input type="date" id="start" name="trip-start"
                                min="2015-01-01" max="2024-12-31" className='date-input'
                                onSelect={(e) => {
                                    console.log(e.target.value);
                                    setPostPlhdr({
                                        ...postPlhdr,
                                        date: e.target.value
                                    })
                                }} />
                        </div>
                        <div className="modal-footer">
                            <button className='btn btn-primary'
                                onClick={(e) => {
                                    setFormState({
                                        dateButton: false
                                    })
                                }}>
                                Save
                            </button>
                            <button className='btn btn-info'
                                onClick={(e) => {
                                    setFormState({
                                        dateButton: false
                                    })
                                }} > Cancel </button>
                        </div>
                    </div>
                </>
                :
                ''}

            {formState.imgButton ?
                <>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4>Paste image url</h4>
                        </div>
                        <div className="modal-body">
                            <input type="text" id='url-input' />
                        </div>
                        <div className="modal-footer">
                            <button className='btn btn-primary'
                                onClick={async (e) => {
                                    setFormState({
                                        imgButton: false
                                    })
                                    const image = await document.getElementById('url-input').value
                                    setPostPlhdr({
                                        ...postPlhdr,
                                        img: image
                                    })
                                }}> Save </button>
                            <button className='btn btn-info'
                                onClick={(e) => {
                                    setFormState({
                                        imgButton: false
                                    })
                                }} >
                                Cancel
                            </button>
                        </div>
                    </div>

                </>
                :
                ''}

            { formState.tagsButton ?
                <>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4>Add tags (comma separated)</h4>
                        </div>
                        <div className="modal-body">
                            <input type="text" id='tags-input' />
                        </div>
                        <div className="modal-footer">
                            <button className='btn btn-primary'
                                onClick={async (e) => {
                                    setFormState({
                                        tagsButton: false
                                    })
                                    const tags = await document.getElementById('tags-input').value
                                    setPostPlhdr({
                                        ...postPlhdr,
                                        tags: tags
                                    })
                                }}> Save </button>
                            <button className='btn btn-info'
                                onClick={(e) => {
                                    setFormState({
                                        tagsButton: false
                                    })
                                }} > Cancel </button>
                        </div>
                    </div>

                </>
                :
                ''}



        </div>
    )
}
