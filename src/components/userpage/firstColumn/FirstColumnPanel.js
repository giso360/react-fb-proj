import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function FirstColumnPanel(props) {

    const { username } = useParams();

    const loadref = useRef(null)

    useEffect(() => {
      loadref.current.focus()
    }, [])

    const [state, setstate] = useState({
        namei: username.toUpperCase(),
        insta: `@${username}.org`
    })

    return (
        <div className="panel panel-default" ref={ loadref }>
            <div className="panel-body">
                <img src={ props.logo } style={ props.imageStyle } alt='nothing' />
                <h5><b>{ state.namei } </b></h5>
                <p><u> { state.insta } </u></p>
            </div>
        </div>
    )
}
