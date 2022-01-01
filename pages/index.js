import React from 'react'
import MainPage from './MainPage';
import { useAuth } from '../contexts/auth'
import Login from './Login';

const index = () => {
  
   
 //if (!user) return <Login handelLoginForm={handelLoginForm}></Login>

  return (
    <>       
   <MainPage/>
    </>
  )
}
export default index
