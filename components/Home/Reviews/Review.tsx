import React from 'react'

const Review = () => {
  return (
    <div className='pt-20 pb-20 flex items-center justify-center flex-col bg-[#13357b]'>
      <div className='w-[80%] mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-10'>
        <div>
          <h1 className='text-2xl font-semibold text-white'>Don't take Our Word for it - Here's what our customers think?</h1>
          <p className='mt-6 text-gray-200'>We believe the best way to understand the impact of our product is to hear directly from the people
            who use it everyday. Our custmers inspire us with their stories, successes and honest feedback. Here's what they have to say about their experience with Trippie.
          </p>
          <div className='mt-6 items-center space-x-6'>
            <div>
              <p className='text-2xl font-bold text-white'>4.88</p>
              <p className='text-white mb-2'>Overall Rating</p>
              <div className='flex items-center'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review;