import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Dashboard } from './Dashboard'
import { CoursePage } from './CoursePage'
import { PrivateRoute } from './PrivateRoute'
// import { Login } from '../redux/action'
import { LoginPage } from '../components/LoginPage'

export const AllRoutes = () => {
  return (
    <Routes>
       <Route path='/login' element={<LoginPage/>} />
      <Route path='/' element={
      <PrivateRoute>
 <Dashboard/>
      </PrivateRoute>
     
      } />
      <Route path='/course' element={
        <PrivateRoute>
          <CoursePage/>
        </PrivateRoute>
      } />
    </Routes>
  )
}
