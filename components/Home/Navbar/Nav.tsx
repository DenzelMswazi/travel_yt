import React from 'react'
import { TbAirBalloon } from 'react-icons/tb';

const Nav = () => {
  return (
    <div className='bg-blue-950 transition-all duuration-200 h-[12vh] z-[1000]'>
        <div className='flex items-center h-full justiry-between w-[90%] xl:w-[80%] mx-auto'>
            {/* Logo */}
            <div className='flex items-center space-x-2'>
                <div className='w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center flex-col'>
                    <TbAirBalloon />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nav;