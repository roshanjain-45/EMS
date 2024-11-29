import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import { setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const authData = useContext(AuthContext)

  // useEffect(()=>{
  //   const loggedInUser = localStorage.getItem('loggedInUser')

  //   if(loggedInUser){
  //     const userData = JSON.parse(loggedInUser)
  //     setUser(userData.role)
  //     setLoggedInUserData(userData.data)
  //   }

  // },[])

  const handleLogin = (email, password) => {
    // if (email == 'admin@me.com' && password == '123') {
    //   setUser('admin');
    //   // setLoggedInUserData(admin)
    //   localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
    // }
    if (authData) {
      const admin = authData.userData.admin.find((e) => email == e.email && e.password == password)
      const employee = authData.userData.employees.find((e) => email == e.email && e.password == password)
      if (admin) {
        setUser('admin')
        setLoggedInUserData(admin)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
      }
      else if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'employee' }))
      }
      else {
        alert("Invalid user")
      }
    }
  }




  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === 'admin' && <AdminDashboard data={loggedInUserData} />}
      {user === 'employee' && <EmployeeDashboard data={loggedInUserData} />}
    </>
  )
}

export default App