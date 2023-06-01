import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function UserPage() {

  const { id } = useParams()  
  const [data, setData] = useState("")

  useEffect(() => {
    axios.get(`http://192.168.2.74/Employee/${id}`)
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  },[id])

  return (
    <div>
        <p>UserPage</p>
        <h3>Hi {data.firstName}</h3>
    </div>
  )
}
