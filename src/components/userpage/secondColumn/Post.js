import React, { useState } from 'react'
import { Card } from 'react-bootstrap'

export default function Post(props) {

    const postStyles = [
        {
            fontSize: '20px'
        },
        {
            backgroundSize: 'cover',
            marginLeft: '0px',
            marginRight: '0px',
            width: '100%'
        }
    ]

    return (
        <div id={props.id} className='post-container'>
            <Card className='panel panel-default' >
                <Card.Body className='feed-post-container'>
                    <Card.Img variant="top" src={props.image} style={postStyles[1]}/>
                    <Card.Title className="feed-title"><h4>{props.date}</h4></Card.Title>
                    <Card.Subtitle className="mb-2 feed-text">{props.content}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 feed-text">{`Tags: ${props.tags}`}</Card.Subtitle>
                    <div className='feed-buttons' >
                        <button className='btn btn-success feed-button-one' onClick={props.handleLikes}>
                            <i className='bi bi-hand-thumbs-up-fill text-primary unclickable' style={postStyles[0]}></i>
                            <p className={`${props.likeButtonBefore} unclickable`}>{props.likes}</p>
                        </button>
                        <button className='btn btn-primary feed-button-two' onClick={props.handleShares}>
                            <i className='bi bi-share-fill unclickable' style={postStyles[0]}></i>
                            <p className={`${props.shareButtonBefore} unclickable`}>{props.shares}</p>
                        </button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    )
}
