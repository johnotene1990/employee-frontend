import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Home() {
    const [users,setUser] = useState([])

    // const [users,setUser] = useState([
    //     {name: "James",email:"james@gmail.com",age:28,city:"Lagos"}
    // ])

     useEffect(()=> {
      //   axios.get('https://employee-mern-api-tau.vercel.app/')
      axios.get('/home')
        //.then(res=>console.log(res))
         .then(res => setUser(res.data))
         .catch(err => console.log(err))
         
     },[])

     const handleDelete = (id)=>{
         // axios.delete('https://employee-mern-api-tau.vercel.app/delete/'+id)
         axios.delete('/delete/'+id)
         .then(result=>{
            console.log(result)
            window.location.reload()
         })
         .catch(err=>console.log(err))
         }


     
  return (
    <div>
         <div className='d-flex vh-100 justify-content-center align-items-center bg-primary'>
             <div className='w-50 bg-white rounded'>
                 <Link to={'/create'} className='btn btn-success'>ADD +</Link>
                   <table className='table'>
                     <thead>
                         <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>City</th>
                            <th>Actions</th>

                         </tr>
                     </thead>
                      <tbody>
                         {
                            users.map((user,id)=>(
                                <tr key={id}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.age}</td>
                                    <td>{user.city}</td>
                                   <td className='d-flex gap-2'>
                                   <Link to={`/update/${user._id}`} className='btn btn-primary'>Update</Link>
                                   <button onClick={e=>handleDelete(user._id)} className='btn btn-danger'>Delete</button>
                                   <Link className='btn btn-success' to={`/detail/${user._id}`}>Detail</Link>
                                   </td>
                                </tr>
                            ))
                         }
                      </tbody>
                   </table>

                </div>
             
              </div>
             </div>
          )
    }
