import React from 'react'
import logo from '../assets/Logo.jpg'
import logo2 from '../assets/Vector (1).jpg'
import logo3 from '../assets/Vector (2).jpg'

export const Sidebar = () => {
    return (
        <div className='flex '>
            <div className=' shadow-md border-1 w-24 h-screen px-3 py-2.5  relative '>
                {/* <div className='flex flex-col justify-between border-solid border-2 border-red-600 '>
                    <div> */}
                    <div className='grid place-content-center'>
                        <img src={logo} />
                    </div>
                    <div className='mt-12 grid gap-4'>
                        <div className='grid place-content-center  py-1.5 px-0  rounded-md w-full  ' style={{ backgroundColor: "#FEDFE1" }}>
                            <div className='flex justify-center' >
                                <img src={logo2} />
                            </div>

                            <div  >
                                <p className="  text-xs  font-normal" style={{ color: "#901E75" }} >Home</p>
                            </div>

                        </div>
                        <div className='grid place-content-center  py-1.5 px-0 rounded-md w-full ' style={{ backgroundColor: "#E5E7EB" }}>
                            <div className='flex justify-center' >
                                <img src={logo3} />
                            </div>

                            <div  >
                                <p className="  text-xs  font-normal" style={{ color: "#83858B" }}  >Coures</p>
                            </div>

                        </div>

                    {/* </div>
                    </div> */}
                    <div className="" >
                    <div >
                        hi
                    </div>
                    </div>



                    
                </div>




                {/* <div className='grid place-content-center  py-1.5 px-0 rounded-md  ' style={{ backgroundColor: "#E5E7EB" }}>
            <div className='flex justify-center' >
              <img src={logo3} />
            </div>

            <div  >
              <p className="  text-xs  font-normal">Coures</p>
            </div>

          </div> */}

            </div>
            <div className='border-solid border-2 w-screen px-6 py-9'>
                its jitendra
            </div>

        </div>

    )
}
