import React from 'react'

export default function SuccessMsg(props) {
    return (
        <>
            <div className='registration-text'>
                <b> Success !!! </b> Registration with username:
                <b style={ props.usernameStyle } > { props.user } </b>
                <button className='btn btn-warning' onClick={ props.redirect } >
                    Click to Go to Login Page
                </button>
            </div>
        </>
    )
}
