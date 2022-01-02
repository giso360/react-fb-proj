import axios from 'axios'
import randomInteger from 'random-int'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ErrorMsg from './ErrorMsg';
import SuccessMsg from './SuccessMsg';

export default function Register(props) {

    const usernameStyle = {
        fontSize: 'larger'
    }

    let navigate = useNavigate();

    const [state, setState] = useState({
        usn: '',
        pwd: '',
        registered: false,
        responseError: false,
        user: ''
    })

    const redirect = (e) => {
        e.preventDefault()
        navigate('/')
    }

    const handleChangeUsername = (e) => {
        setState({
            ...state,
            usn: e.target.value,
            user: e.target.value
        })
    }

    const handleChangePassword = (e) => {
        setState({
            ...state,
            pwd: e.target.value
        })
    }

    const makePayload = () => {
        const id = randomInteger(1000);
        const request = {
            id: id,
            username: state.usn,
            password: state.pwd
        }
        return request
    }

    const axiosCall = async (error) => {
        try {
            const response = await axios.post('http://localhost:3002/users', makePayload(), {timeout: 1000})
            setState({
                ...state,
                usn: '',
                pwd: '',
                registered: true
            })
        } catch (error) {
            setState({
                ...state,
                usn: '',
                pwd: '',
                responseError: true
            })
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await axiosCall();

    }

    return (
        <div className="register-container">
            <form onSubmit={ handleSubmit } className='register-form'>
                <div className="form-group">
                    <input className="form-control" type="text" name="username" placeholder="Give Username" onChange={handleChangeUsername} value={state.usn} disabled={state.registered} />
                </div>
                <div className="form-group">
                    <input className="form-control" type="password" name="password" placeholder="Give Password" onChange={handleChangePassword} value={state.pwd} disabled={state.registered} />
                </div>
                <div className="form-group">
                    <input className="btn btn-primary login-btn" type="submit" name="login" value="Register" disabled={state.registered} />
                </div>
                <div>
                    { state.registered ? <SuccessMsg usernameStyle={ usernameStyle } user={ state.user } redirect={ redirect } /> : ''}
                    { state.responseError ? <ErrorMsg usernameStyle={ usernameStyle }/> : ''}
                </div>
            </form>
        </div>
    )
}
