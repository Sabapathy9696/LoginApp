import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function AdminPage() {

   const [data, setData] = useState('')
   const {id} = useParams()

   useEffect(() => {
    axios.get(`http://192.168.2.74/Employee/${id}`)
    .then(res => setData(res.data))
    .catch(err => console.log(err))
   },[id])

  return (
    <div>
        <p>Admin</p>
        <h3>Welcome {data.firstName}</h3>
    </div>
  )
}
