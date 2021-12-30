import axios from 'axios';
import React, { useState } from 'react'
import { Badge } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export default function Login(props) {

    let navigate = useNavigate();

    const [state, setState] = useState({
        usn: '',
        pwd: '',
        authenticated: false,
        tries: 0
    });

    const axiosCall = async (error) => {

        const user = await axios.get(`http://localhost:3002/users?username=${state.usn}&password=${state.pwd}`);
        if (user.data.length === 1) {
            setState(
                {
                    ...state,
                    authenticated: true,
                    tries: state.tries + 1,
                    usn: document.getElementById('userField').value
                }
            )
            document.cookie = `username=${state.usn}`
            navigate(`/user/${state.usn}`)
        } else {
            setState(
                {
                    usn: '',
                    pwd: '',
                    authenticated: false,
                    tries: state.tries + 1
                }
            )
        }

    }

    const handleRegister = (e) => {
        navigate('/register');
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (3 - state.tries === 1) {
            navigate('/register')
        }
        await axiosCall();
        
        
    }

    const handleChangeUsername = (e) => {
        setState({
            ...state,
            usn: e.target.value
        })
    }

    const handleChangePassword = (e) => {
        setState({
            ...state,
            pwd: e.target.value
        })
    }

    return (
        <div className="login-container">
            <form method="post" onSubmit={handleSubmit} className='login-form'>
                <div className="form-group">
                    <input className="form-control" type="text" name="username" placeholder="Username" onChange={handleChangeUsername} value={state.usn} id="userField" />
                </div>
                <div className="form-group">
                    <input className="form-control" type="password" name="password" placeholder="Password" onChange={handleChangePassword} value={state.pwd} />
                </div>
                <div className="form-group">
                    <input className="btn btn-primary login-btn" type="submit" name="login" value="Login" />
                </div>
                <div className="form-group">
                    <input className="btn btn-success login-btn" type="submit" name="Register" value="Register" onClick={handleRegister} />
                </div>
                <div className='attempts'>
                    <b>Attempts Left: </b> <Badge pill bg='danger'> {3 - state.tries} </Badge>
                </div>
            </form>
        </div>
    )
}
