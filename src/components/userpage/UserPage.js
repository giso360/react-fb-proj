import { useParams } from 'react-router-dom';
import PageNavbar from '../navbar/PageNavbar';
import FirstColumn from './firstColumn/FirstColumn';
import SecondColumn from './secondColumn/SecondColumn';
import React from 'react'
import ThirdColumn from './thirdColumn/ThirdColumn';

export default function UserPage(props) {

    const { username } = useParams()



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
}
