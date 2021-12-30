import { useNavigate, useParams } from 'react-router-dom';
import PageNavbar from '../navbar/PageNavbar';
import FirstColumn from './firstColumn/FirstColumn';
import SecondColumn from './secondColumn/SecondColumn';
import React, { useEffect } from 'react'
import ThirdColumn from './thirdColumn/ThirdColumn';
import LoginPage from '../pages/LoginPage';

export default function UserPage(props) {

    const { username } = useParams()

    const usnFromCookie = document.cookie.substring(9)

    let navigate = useNavigate();



    useEffect(() => {
        console.log(`cookie value is: ${document.cookie.substring(9)}`);
        if (usnFromCookie != username) {
            navigate('/')
        }
        document.cookie = "username=;expires=" + new Date(0).toUTCString()
    }, [])

    return (
            <div className='container' >
                <div className='row' >
                    <PageNavbar />
                    <FirstColumn />
                    <SecondColumn />
                    <ThirdColumn />
                </div>
            </div>
    )





    // return (
    //     <>
    //         { usnFromCookie === username ?
    //             <div className='container' >
    //                 <div className='row' >
    //                     <PageNavbar />
    //                     <FirstColumn />
    //                     <SecondColumn />
    //                     <ThirdColumn />
    //                 </div>
    //             </div> : <LoginPage />
    //         }
    //     </>
    // )




}
