import React, { useState } from 'react'
import '../App.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function LandingPage() {

  const navigate = useNavigate()

  const [userName, setUserName] = useState('')
  const [password, setPassWord] = useState('')
  const [userType, setUserType] = useState('')

  const handleUserTypeChange = e => {
    setUserType(e.target.value)
  }
  
  const handleUserNameChange = e => {
    setUserName(e.target.value)
  }

  const handlePasswordChange = e => {
    setPassWord(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    axios.post('http://192.168.2.74/login', {
      userType: Number(userType),
      password: password,
      userName: userName
    })
    .then((res) => {
      if(userType === "1") {
        navigate(`/user/${res.data}`)
      }
      else if(userType === "2") {
        navigate(`/hr/${res.data}`) 
      }
      else {
        navigate(`/admin/${res.data}`)
      }
    })
    .catch(err => console.log(err))
  }

  return (
   <div>
     <form onSubmit={handleSubmit}>
        <div className='margin'>
          <input type="text" placeholder='User Name' required value={userName} onChange={handleUserNameChange}/>
        </div>
        <div className='margin'>
          <input type="text" placeholder='Password' required value={password} onChange={handlePasswordChange}/>
        </div>  
        <div className='margin'>  
         <select value={userType} onChange={handleUserTypeChange}>
           <option>Select User Type</option>
           <option value="2">HR</option>
           <option value="3">Admin</option>
           <option value="1">User</option>  
         </select>
        </div>
        <button type='submit'>Submit</button>
     </form>
   </div> 
  )
}   