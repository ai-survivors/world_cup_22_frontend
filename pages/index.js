import React from 'react'
import MainPage from './MainPage';
import { useAuth } from '../contexts/auth'
import LoginForm from '../components/LoginForm';
const index = () => {
  const {user , login , logout} = useAuth()
  function handelLoginForm (e){
    e.preventDefault()
    login('admin','1996')
  }
   
//  if (!user) return <LoginForm handelLoginForm={handelLoginForm}></LoginForm>

  return (
    <>       
   <MainPage/>
    </>
  )
}
export default index
