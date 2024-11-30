import React from 'react'

const Header = ({data}) => {
    const logoutUser =()=>{
        localStorage.setItem('loggedInUser','')
        window.location.reload()
    }

    return (
        <div className='flex items-end justify-between'>
            <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>{data.firstName}👋</span></h1>
            <button onClick={logoutUser} className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
        </div>
    )
}

export default Header