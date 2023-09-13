import React from 'react'
import logo from '../assets/Logo.jpg'
import logo2 from '../assets/Vector (1).jpg'
import logo3 from '../assets/Vector (2).jpg'
import { AllRoutes } from '../pages/AllRoutes'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const Sidebar = () => {

    const data=useSelector(store=>store.token)

    return (
        <div className='flex '>
         {
            data ? <div className=' shadow-md border-1 w-24 h-screen px-3 py-2.5  sticky top-0 '>
               
            <div className='grid place-content-center'>
                <img src={logo} />
            </div>
            <div className='mt-12 grid gap-4'>
         <Link to='/'>     <div className='grid place-content-center  py-1.5 px-0  rounded-md w-full  ' style={{ backgroundColor: "#FEDFE1" }}>
                    <div className='flex justify-center' >
                        <img src={logo2} />
                    </div>

                    <div  >
                        <p className="  text-xs  font-normal" style={{ color: "#901E75" }} >Home</p>
                    </div>

                </div> </Link>  
             <Link to='/course'>   <div className='grid place-content-center  py-1.5 px-0 rounded-md w-full ' style={{ backgroundColor: "#E5E7EB" }}>
                    <div className='flex justify-center' >
                        <img src={logo3} />
                    </div>

                    <div  >
                        <p className="  text-xs  font-normal" style={{ color: "#83858B" }}  >Coures</p>
                    </div>

                </div></Link>

            {/* </div>
            </div> */}
            <div className="" >
            <div className='absolute inset-x-0 bottom-0 px-3 py-2.5' >
                Logout
            </div>
            </div>    
        </div>
    </div>:<></>
         }  
            <div className='border-solid border-2 w-screen px-6 py-9' style={{backgroundColor:"#E5E7EB"}}>
                <AllRoutes/>
            </div>

        </div>

    )
}
