import React from 'react'
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'; 
import  './view.css'


const View = () => {
  const [ user, setState] = useState({}); 
  const { id } = useParams();

  useEffect(() => {
    console.log("hii")
    axios.get(`http://localhost:5000/api/get/${id}`)
      .then((resp) => setState({ ...resp.data[0] }));
  }, [id]); 


  return (
    <div style={{marginTop :"150px"}}>
      <div className='card'>
        <div className='card-header'>
          <p>User Contact Details</p>
        </div>
        
        <div className='container'>
          <strong>ID : </strong><span>{id}</span><br /><br />
          <strong>Name : </strong><span>{user.name}</span><br /><br />
          <strong>Email : </strong><span>{user.email}</span><br /><br />
          <strong>Contact : </strong><span>{user.contact}</span><br /><br />
          <strong>Age : </strong><span>{user.age}</span><br /><br />
          <strong>Batch : </strong><span>{user.batch}</span><br /><br />

          <Link to='/'>
            <div className='btn btn-edit'>Go Back</div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default View
