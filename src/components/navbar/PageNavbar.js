import React from 'react'

export default function PageNavbar(props) {

    return (
        <nav className="navbar navbar-default navbar-fixed-top" id="page-navbar">
            <div className="container-fluid">
                <div className="navbar-header">
                    <a className="navbar-brand" href="#">Facebuk</a>
                </div>
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Profile</a></li>
                    <li><a href="/">Logout</a></li>
                </ul>
            </div>
        </nav>
    )
}
