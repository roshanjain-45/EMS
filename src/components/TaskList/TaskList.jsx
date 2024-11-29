import React from 'react'

const TaskList = () => {
  return (
    <div id='tasklist' className='h-[40%] overflow-x-auto flex-col md:flex-row flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16 hidden-scrollbar'>
        <div className='flex-shrink-0 h-full w-[300px] md:w-[400px] p-5 bg-red-400 rounded-xl'>
        <div className='flex justify-between items-center overflow-y-auto'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>category</h3>
                <h4 className='text-sm'>taskDate</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>taskTitle</h2>
            <p className='text-sm mt-2 overflow-y-auto max-h-32 hidden-scrollbar'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis illo vitae error fugit nisi, culpa incidunt reiciendis consectetur adipisci quaerat itaque pariatur minima laudantium sunt tempora, mollitia atque consequatur modi iste iure necessitatibus at. Architecto ad at minima, vel, ex odio, expedita officia a quidem voluptatibus quas. Dolor libero rem quas, fuga temporibus harum iste unde ullam accusantium quae. Aperiam ipsam temporibus iure vero, cumque atque nesciunt minus nisi id obcaecati odit distinctio. Labore esse maiores odit accusantium est vero, libero ad iste, earum sed nihil soluta fugit voluptates, porro nesciunt non. Voluptas, atque voluptatibus in fuga qui magnam totam?
            </p>
            <div className='flex justify-between mt-6 '>
                <button className='bg-green-500 rounded font-medium py-1 px-2 text-xs'>Mark as Completed</button>
                <button className='bg-red-500 rounded font-medium py-1 px-2 text-xs'>Mark as Failed</button>
            </div>
        </div>
    </div>
  )
}

export default TaskList