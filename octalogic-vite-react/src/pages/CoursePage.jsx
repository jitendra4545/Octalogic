import React from 'react'
import logo  from '../assets/mdi_magnify.jpg'
import { CourcePageTable } from '../components/CourcePageTable'
export const CoursePage = () => {
  return (
    <div>
    <p className="font-bold" style={{fontSize:"28px",color:"#83858B"}}>Courses</p>
    
    <div className=' mb-4 flex  justify-between' style={{marginTop:"38px"}}>
    <p className="  font-bold text-base  " style={{color:"#83858B"}}>COURSE LIST</p>
    <div className='p-2 flex bg-white gap-2 rounded  ' style={{border:"1px solid #E5E7EB"}}>
      <div className='grid place-content-center '>
        <img width={'16px'} src={logo} />
      </div>
      <div>
        <input type="text" placeholder='Search' />
      </div>
    </div>
    </div>
  <CourcePageTable/>
</div>
  )
}
