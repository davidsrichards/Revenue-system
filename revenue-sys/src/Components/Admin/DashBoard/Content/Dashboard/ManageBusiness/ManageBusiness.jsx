import './ManageBusiness.css'
import {Data as data} from './Data.jsx'
import { IoSettingsSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { useState } from 'react';



function ManageBusiness() {
    const [popUp, setPopUp] = useState(false);
    
    // control pop up

    const controlPopUp = () =>{
        setPopUp((p) => !p)
    }

    // hode pop up

    

  return (
    <div className='w-full'>
        <div className='bg-[#fff] w-full p-4 flex items-center justify-between'>
            <select name="" id="" className='max-w-md p-1 bg-[#e8eff9] px-6 rounded-sm'>
                <option value="">select business</option>
                <option value="">select business</option>
                <option value="">select business</option>
                <option value="">select business</option>
                <option value="">select business</option>
                <option value="">select business</option>
                <option value="">select business</option>
                <option value="">select business</option>
                <option value="">select business</option>
            </select>
            <div>
            <input type="text" placeholder='Search' className='bg-primary p-1 rounded-l-md outline-none focus:ring-1 focus:ring-blue-400'/>
            <button className='bg-blue-400 p-1 rounded-r-md'>Search</button>
            </div>
        </div>

        <div className='w-full flex items-center justify-center mt-4 relative'>
       {popUp &&  <div className='absolute pop-up bg-primary p-4 flex flex-col gap-4 rounded-md shadow-md'>
            <input type="text" placeholder='business name' className='p-1 px-2 rounded-sm outline-none focus:ring-1'/>
            <input type="text" placeholder='business address' className='p-1 px-2 rounded-sm outline-none focus:ring-1'/>
            <div className='flex items-center justify-between'>
            <MdDelete className='text-red-500 text-[1.6rem] cursor-pointer'/>
            <MdEdit className='text-blue-400 text-[1.6rem] cursor-pointer'/>
            </div>
        </div>}
            <table className='w-full  h-screen bg-[#fff]'>
                <thead className='border-2 mt-12'>
                    <tr className=''>
                        <td className='pb-4 pt-4 px-4'>S/N</td>
                        <td className='pb-4 pt-4 px-4'>ID</td>
                        <td className='pb-4 pt-4 px-4'>NAME</td>
                        <td className='pb-4 pt-4 px-4'>ADDRESS</td>
                        <td className='pb-4 pt-4 px-4'>Manage</td>
                    </tr>
                </thead>
                <tbody>
                {data.map(({sn, id, name, address}, index) => (
                            <tr key={index}>
                      <td className='border-b-2 px-4'>{sn}</td>
                      <td className='border-b-2 px-4'>{id}</td>
                      <td className='border-b-2 px-4'>{name}</td>
                      <td className='border-b-2 px-4'>{address}</td>
                      <td className='border-b-2  cursor-pointer'><IoSettingsSharp onClick={() => controlPopUp()}/></td>
                            </tr>
                        ))}
                   
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default ManageBusiness