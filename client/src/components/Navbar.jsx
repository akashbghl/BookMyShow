import React from 'react'
import Logo from '../assets/logo2.png'
function Navbar() {
  return (
    <div className='flex h-15 justify-around p-1 items-center shadow-2xl'>

      <div className='flex items-center'>
        <img  className=' h-12 w-40 object-cover' src={Logo} alt="" />
        <input className='border border-[#e8e8e8] text-[14px]  rounded-md h-9 py-[5px] px-5 w-130'
          type="text" placeholder='Search for Movies , Events, Plays , Sports and Activites'/>
      </div>
      
      <div className='flex gap-5 items-center'>
        <select name="Location" id="">
            <option value="Aligarh">Aligarh</option>
            <option value="Agra">Agra</option>
            <option value="Delhi">Delhi</option>
        </select>
        
        <button className='bg-red-400 text-white py-[4px] text-[13px] text-center px-4 rounded-md'>
            Sign in
        </button>
        
        {/* hamburger */}
        <div className='flex flex-col gap-1 items-baseline hover:cursor-pointer'>
            <div className='w-8 h-1 rounded-md bg-gray-500'></div>
            <div className='w-8 h-1 rounded-md bg-gray-500'></div>
            <div className='w-8 h-1 rounded-md bg-gray-500'></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
