


import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({children}) => {
   
    const data=useSelector((store)=>store.token)
    console.log(data)
  if(!data){
     return  <Navigate to='/login' />
  }

  if(!data){
    console.log("true")
  }else{
    console.log('false')
  }

  return children
}
