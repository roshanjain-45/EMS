import React from 'react'

const AcceptTask = ({data}) => {  
  return (
    <div className='flex-shrink-0 h-full w-[300px] md:w-[400px] p-5 bg-indigo-400 rounded-xl flex flex-col justify-evenly'>
    <div className='flex justify-between items-center overflow-y-auto'>
            <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
            <h4 className='text-sm'>{data.taskDate}</h4>
        </div>
        <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
        <p className='text-sm mt-2 overflow-y-auto max-h-40 hidden-scrollbar'>
          {data.taskDescription}
        </p>
        <div className='flex justify-between mt-6 '>
            <button className='bg-green-500 rounded font-medium py-1 px-2 text-xs'>Mark as Completed</button>
            <button className='bg-red-500 rounded font-medium py-1 px-2 text-xs'>Mark as Failed</button>
        </div>
    </div>
  )
}

export default AcceptTask