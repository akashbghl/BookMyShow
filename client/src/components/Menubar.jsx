import React from 'react'

function Menubar() {
  return (
      <div className='bg-[#f3f3f3] h-10 flex justify-around items-center'>
        <ul className='flex gap-4 itmes-center text-[14px]'>
            <li className='hover:cursor-pointer'>Movies</li>
            <li className='hover:cursor-pointer'>Stream</li>
            <li className='hover:cursor-pointer'>Events</li>
            <li className='hover:cursor-pointer'>Plays</li>
            <li className='hover:cursor-pointer'>Sports</li>
            <li className='hover:cursor-pointer'>Activities</li>
        </ul>
        <ul className='flex gap-4 itmes-center text-[13px] text-[#434343]'>
            <li className='hover:cursor-pointer'>ListYourShow</li>
            <li className='hover:cursor-pointer'>Corporates</li>
            <li className='hover:cursor-pointer'>Offers</li>
            <li className='hover:cursor-pointer'>GiftCards</li>
        </ul>
      </div>
  )
}

export default Menubar
