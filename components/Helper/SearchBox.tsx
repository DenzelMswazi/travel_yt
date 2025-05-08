import React from 'react'
import { FaMap } from 'react-icons/fa';

const SearchBox = () => {
  return (
    <div className='bg-white rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-8 mt-4 sm:mt-12 w-[95%] sm:w-[80%]'>
        {/* 1st Search Input */}
        <div className='flex items-center space-x-6'>
            <FaMap className='w-6 h-6 text-blue-600' />
        </div>
    </div>
  )
}

export default SearchBox;