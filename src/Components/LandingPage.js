import React, { useState } from 'react'
import '../App.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function LandingPage() {

  const navigate = useNavigate()

  const [userName, setUserName] = useState('')
  const [password, setPassWord] = useState('')
  const [userType, setUserType] = useState('')

  const handleChange = e => {
    const { name, value } = e.target
    if (name === 'userName') {
      setUserName(value)
    } else if (name === 'password') {
      setPassWord(value)
    } else if (name === 'userType') {
      setUserType(value)
    }
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
          <input type="text" name="userName" placeholder='User Name' required value={userName} onChange={handleChange}/>
        </div>
        <div className='margin'>
          <input type="text" name="password" placeholder='Password' required value={password} onChange={handleChange}/>
        </div>  
        <div className='margin'>  
         <select name="userType" value={userType} onChange={handleChange}>
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