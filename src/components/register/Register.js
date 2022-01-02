import React, { useEffect, useState } from 'react'
import axios from 'axios';
import randomInteger from 'random-int';
import SuccessMsg from './SuccessMsg';
import { useNavigate } from 'react-router-dom';
import ErrorMsg from './ErrorMsg';


export default function Register2() {

    const pwdRegEx = /\d/

    const navigate = useNavigate();

    const usernameStyle = {
        fontSize: 'larger'
    }

    const [credentials, setCredentials] = useState({
        usn: '',
        pwd: ''
    })

    const [unPwdNn, setUnPwdNn] = useState(false)

    const [pwdValid, setPwdValid] = useState(false)

    const [userExists, setUserExists] = useState('')

    const [tries, setTries] = useState(0)

    const [registered, setRegistered] = useState(false)

    const [registerError, setRegisterError] = useState(false)

    const usnPwdNnCheck = () => {
        if (credentials.usn !== '' && credentials.pwd !== '') {
            setUnPwdNn(true)
        }
    }

    const pwdValidCheck = () => {
        if (credentials.pwd !== '') {
            setPwdValid(pwdRegEx.test(credentials.pwd))
        }
    }

    const userExistsCheck = async () => {
        try {
            const user = await axios.get(`http://localhost:3002/users?username=${credentials.usn}`)
            console.log(user.data.length);
            console.log(userExists);
            if (user.data.length !== 0) {
                setUserExists('Y')
            }
            if (user.data.length === 0 && tries !== 0) {
                setUserExists('N')
            }
            console.log(userExists);
        } catch (error) {
            setRegisterError(true)
        }

    }

    const alterTries = () => {
        setTries(1)
    }

    const makePayload = () => {
        const id = randomInteger(1000);
        const request = {
            id: id,
            username: credentials.usn,
            password: credentials.pwd
        }
        return request
    }

    const registerUser = async () => {
        try {
            console.log('i am called');
            const response = await axios.post('http://localhost:3002/users', makePayload())
            console.log(response)
            if (response != null) {
                setRegistered(true)
            }
        } catch (error) {
            setRegisterError(true)
        }
    }

    const handleChangeUsername = (e) => {
        setCredentials({
            ...credentials,
            usn: e.target.value,
        })
    }

    const handleChangePassword = (e) => {
        setCredentials({
            ...credentials,
            pwd: e.target.value
        })
    }

    const redirect = (e) => {
        e.preventDefault()
        navigate('/')
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        usnPwdNnCheck()
    }

    useEffect(() => {
        console.log(`uns: ${credentials.usn}, pwd: ${credentials.pwd}, NNcheck: ${unPwdNn}, pwdValid: ${pwdValid}, userExists: ${userExists}, tries: ${tries}, error: ${registerError}, registered: ${registered}`);
    }, [])

    useEffect(() => {
        console.log(`uns: ${credentials.usn}, pwd: ${credentials.pwd}, NNcheck: ${unPwdNn}, pwdValid: ${pwdValid}, userExists: ${userExists}, tries: ${tries}, error: ${registerError}, registered: ${registered}`);
        if (unPwdNn) {
            pwdValidCheck()
        }
    }, [unPwdNn])

    useEffect(() => {
        console.log(`uns: ${credentials.usn}, pwd: ${credentials.pwd}, NNcheck: ${unPwdNn}, pwdValid: ${pwdValid}, userExists: ${userExists}, tries: ${tries}, error: ${registerError}, registered: ${registered}`);
        if (pwdValid) {
            alterTries()
        }
    }, [pwdValid])

    useEffect(() => {
        console.log(`uns: ${credentials.usn}, pwd: ${credentials.pwd}, NNcheck: ${unPwdNn}, pwdValid: ${pwdValid}, userExists: ${userExists}, tries: ${tries}, error: ${registerError}, registered: ${registered}`);
        userExistsCheck()
    }, [tries])

    useEffect(() => {
        console.log(`uns: ${credentials.usn}, pwd: ${credentials.pwd}, NNcheck: ${unPwdNn}, pwdValid: ${pwdValid}, userExists: ${userExists}, tries: ${tries}, error: ${registerError}, registered: ${registered}`);
        if (tries === 1 && unPwdNn && pwdValid && userExists === 'N') {
            console.log(`uns: ${credentials.usn}, pwd: ${credentials.pwd}, NNcheck: ${unPwdNn}, pwdValid: ${pwdValid}, userExists: ${userExists}, tries: ${tries}, error: ${registerError}, registered: ${registered}`);
            registerUser()
        }
    }, [userExists])

    useEffect(() => {
        console.log(`uns: ${credentials.usn}, pwd: ${credentials.pwd}, NNcheck: ${unPwdNn}, pwdValid: ${pwdValid}, userExists: ${userExists}, tries: ${tries}, error: ${registerError}, registered: ${registered}`);
    }, [registered])

    useEffect(() => {
        console.log(`uns: ${credentials.usn}, pwd: ${credentials.pwd}, NNcheck: ${unPwdNn}, pwdValid: ${pwdValid}, userExists: ${userExists}, tries: ${tries}, error: ${registerError}, registered: ${registered}`);
    }, [registerError])

    return (
        <div className="register-container">
            <form onSubmit={handleSubmit} className='register-form'>
                <div className="form-group">
                    <input className="form-control" type="text" name="username" placeholder="Give Username" onChange={handleChangeUsername} value={credentials.usn} disabled={registered} />
                </div>
                <div className="form-group">
                    <input className="form-control" type="password" name="password" placeholder="Give Password" onChange={handleChangePassword} value={credentials.pwd} disabled={registered} />
                </div>
                <div className="form-group">
                    <input className="btn btn-primary login-btn" type="submit" name="login" value="Register" disabled={registered} />
                </div>
                <div>
                    {(registered && userExists === 'N') ? <SuccessMsg usernameStyle={usernameStyle} user={credentials.usn} redirect={redirect} /> : ''}
                    {(!pwdValid && unPwdNn) ? <div>Your password must contain at least one number character [0-9]</div> : ''}
                    {(userExists === 'Y' && tries !== 0) ? <div>This username is already being used <a href='/register'><u>REFRESH PAGE AND TRY AGAIN</u></a></div> : ''}
                    {registerError ? <ErrorMsg usernameStyle={usernameStyle} /> : ''}
                </div>
            </form>
        </div>
    )
}
