import React from 'react'

const data=[
    {
        tab1:"coln1",
        tab2:"coln2",
        tab3:"coln3",
        tab4:"coln4",
        tab5:"coln5",
        tab6:"coln6"
    },
    {
        tab1:"coln1",
        tab2:"coln2",
        tab3:"coln3",
        tab4:"coln4",
        tab5:"coln5",
        tab6:"coln6"
    },
    {
        tab1:"coln1",
        tab2:"coln2",
        tab3:"coln3",
        tab4:"coln4",
        tab5:"coln5",
        tab6:"coln6"
    },
    {
        tab1:"coln1",
        tab2:"coln2",
        tab3:"coln3",
        tab4:"coln4",
        tab5:"coln5",
        tab6:"coln6"
    },
    {
        tab1:"coln1",
        tab2:"coln2",
        tab3:"coln3",
        tab4:"coln4",
        tab5:"coln5",
        tab6:"coln6"
    }
]


export const Section2 = () => {
  return (
    <div className="bg-white rounded-md p-4 ">
        <table style={{width:"100%"}} >
            <thead   >
                <tr className='text-left '   >
                    <th className="border-b-2 w-1/5" style={{padding:"8px 0px 16px 0px"}} >Enr. No</th>
                    <th className="border-b-2 w-1/5" style={{padding:"8px 0px 16px 0px"}} >S. Name</th>
                    <th className="border-b-2 w-1/5" style={{padding:"8px 0px 16px 0px"}} >C. Name</th>
                    <th className="border-b-2 w-1/5"  style={{padding:"8px 0px 16px 0px"}} >Fees</th>
                    <th className="border-b-2 w-1/5" style={{padding:"8px 0px 16px 0px"}} >Enr. Date</th>
                </tr>
            </thead>
            <tbody>
          {
            data.map((el)=>{
                return <tr  className="text-sm" >
                    <td className="border-b-2 py-1 ">{el.tab1}</td>
                    <td className="border-b-2 py-1 ">{el.tab2}</td>
                    <td className="border-b-2 py-1 ">{el.tab3}</td>
                    <td className="border-b-2 py-1 ">{el.tab4}</td>
                    <td className="border-b-2 py-1 ">{el.tab5}</td>
                 
                </tr>
            })
          }
            </tbody>
        </table>
    </div>
  )
}
