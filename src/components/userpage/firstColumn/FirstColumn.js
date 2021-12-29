import React from 'react'
import { useContext } from 'react'
import UserProfileProvider from '../../../context/UserProfileContext'
import logo from '../../../img/logo.jpg'
import FirstColumnPanel from './FirstColumnPanel'
import ProfileCard from './ProfileCard'
import StatusPanel from './StatusPanel'

export default function FirstColumn(props) {

  const pageStyle = [
    {
      borderRadius: '20%',
      width: '200px',
      marginLeft: '30px',
      marginRight: '30px',
    }
  ]

  return (

    <div className="col-md-3 first-column-container" >

      <FirstColumnPanel logo={logo} imageStyle={pageStyle[0]} />

      <UserProfileProvider>

        <ProfileCard />

        <StatusPanel /> 

      </UserProfileProvider>

    </div>

  )
}
