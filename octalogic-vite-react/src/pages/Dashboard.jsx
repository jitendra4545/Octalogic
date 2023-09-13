import React from 'react'
import { Section1 } from '../components/Section1'
import { Section2 } from '../components/Section2'
import { Section3 } from '../components/Section3'
// import { Section1 } from '../components/dashboard/section1'

export const Dashboard = () => {
  return (
    <div>
        <p className="font-bold" style={{fontSize:"28px",color:"#83858B"}}>Overview</p>
        <Section1/>
        <div className='mt-4 mb-4 flex justify-between'>
        <p className="  font-bold text-base  " style={{color:"#83858B"}}>Latest Enrolments</p>
        <p className='font-normal' style={{fontSize:"14px",color:"#901E75"}}>View All Courses</p>
        </div>
      <Section2/>
      <div className='mt-4 mb-4 flex justify-between'>
        <p className="  font-bold text-base  " style={{color:"#83858B"}}>Best Students</p>
        <p className='font-normal' style={{fontSize:"14px",color:"#901E75"}}>View All Courses</p>
        </div>
        <Section3/>
    </div>
   

  )
}
