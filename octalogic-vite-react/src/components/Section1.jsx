import React from 'react'
import logo from '../assets/ic_baseline-people.jpg'
const data = [
    { num: "164", desc: "total number of students" },
    { num: "12", desc: "total number of courses" },
    { num: "$2000", desc: "total amount earned" },
    { num: "Guitar", desc: "best performing course" },
    { num: "Flute", desc: "worst peforming course" },

]



export const Section1 = () => {
    return (
        <div className='mt-8'>
            <div className='grid lg:grid-cols-5 gap-2 sm:grid-cols-3 md:grid-cols-3 '>
                {
                    data.map((el, i) => {
                        return <div className=' rounded-md p-4 bg-white   '>
                            <div className=' flex gap-4'>
                                <div className='grid place-content-center'>
<img src={logo} />
                                </div>
                                <div>
<p className="font-normal" style={{fontSize:"22px",color:"#212529"}}>{el.num}</p>

<p className="font-normal" style={{fontSize:"12px",color:"#83858B"}}>{el.desc}</p>

                                </div>
                            </div>
                            <div>
                                <p className=' text-right' style={{fontSize:"9px",color:"#B33086"}} >view</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
