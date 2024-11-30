import React, { useState } from 'react'

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState('')
  const [taskDescription, setTaskDescription] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [asignTo, setAsignTo] = useState('')
  const [category, setCategory] = useState('')
  const [newTask, setNewTask] = useState({})

  
  const submitHandler = (e) => {
    e.preventDefault();
    setNewTask({
      "active": false,
      "newTask": true,
      "completed": false,
      "failed": false,
      taskTitle, taskDescription, taskDate, category,
    })
    const data = JSON.parse(localStorage.getItem('employees'))
    let userFound = false;

    data.forEach((elem) => {
      if (asignTo.toLowerCase() === elem.firstName.toLowerCase()) {
        elem.tasks.push(newTask)
        elem.taskCounts.newTask = elem.taskCounts.newTask + 1
        userFound = true;
      }
    });
    if (!userFound) {
      alert("Not a user");
    }

    console.log(data);
    localStorage.setItem('employees', JSON.stringify(data));
    
    setAsignTo('')
    setCategory('')
    setTaskDate('')
    setTaskDescription('')
    setTaskTitle('')
  }






  return (
    <div>
      <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
        <form onSubmit={(e) => {
          submitHandler(e);
        }}
          className='flex flex-col md:flex-row flex-wrap w-full items-start justify-between'
        >
          <div className='w-full md:w-1/2'>
            <div>
              <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
              <input
                value={taskTitle}
                onChange={(e) => {
                  setTaskTitle(e.target.value);
                }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Make a UI design'
              />
            </div>
            <div>
              <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
              <input
                value={taskDate}
                onChange={(e) => {
                  setTaskDate(e.target.value);
                }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
            </div>
            <div>
              <h3 className='text-sm text-gray-300 mb-0.5'>Asign to</h3>
              <input
                value={asignTo}
                onChange={(e) => {
                  setAsignTo(e.target.value);
                }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='employee name' />
            </div>
            <div>
              <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
              <input
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design, dev, etc' />
            </div>
          </div>

          <div className='w-full md:w-2/5 flex flex-col items-start'>
            <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
            <textarea
              value={taskDescription}
              onChange={(e) => {
                setTaskDescription(e.target.value);
              }}
              className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400' name="" id=""></textarea>
            <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
          </div>

        </form>
      </div>
    </div>
  )
}

export default CreateTask