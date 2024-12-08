import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Image() {

    const [file,setFile]=useState()
    const [image, setImage] = useState()

    const handleUpload =(e)=>{
        const formdata = new FormData()
        formdata.append( 'file', file)
        axios.post('https://employee-mern-api-tau.vercel.app/upload', formdata)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }

    useEffect(()=>{
        axios.get('https://employee-mern-api-tau.vercel.app/getimage')
        .then(res=>setImage(res.data[1].image))
        .catch(err=>console.log(err))
    },[])


  return (
    <div>
      <input type='file' onChange={e=>setFile(e.target.files[0])}/>
      <button onClick={handleUpload}>Upload</button>
      <br/>
      <img src= {'https://employee-mern-api-tau.vercel.app/images/'+image}  alt={'food'}/>
    </div>
  )
}

export default Image
