import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export default function AdminPage() {

   const { id } = useParams()
   const [data, setData] = useState('')
   const [ids, setIds] = useState('')

   useEffect(() => {
    axios.get('http://192.168.2.74/Employee/All')
    .then(res => setData(res.data))
    .catch(err => console.log(err))
   },[])

   useEffect(() => {
    axios.get(`http://192.168.2.74/Employee/${id}`)
    .then(res => setIds(res.data))
    .catch(err => console.log(err))
  },[id])

  return (
    <div>
        <p>Admin</p>
        {data && <h3>Welcome {ids.firstName}</h3>}
    </div>
  )
}
