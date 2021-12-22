import React from 'react'

export default function Login(props) {
    return (
        <>
            <h4>Login to start enjoying unlimited fun!</h4>


            <form method="post" action="home.html">
                <div className="form-group">
                    <input className="form-control" type="text" name="username" placeholder="Username"/>
                </div>

                <div className="form-group">
                    <input className="form-control" type="password" name="password" placeholder="Password"/>
                </div>

                <div className="form-group">
                    <input className="btn btn-primary" type="submit" name="login" value="Login"/>
                </div>
            </form>

        </>
    )
}
