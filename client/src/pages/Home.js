import React from 'react'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 
import { toast } from 'react-toastify'
import axios from "axios"; 
const Home = () => {
    const [data, setData] = useState([]); 

    const loadata = async()=> {
        const response = await axios.get("http://localhost:5000/api/get");
        setData(response.data)
    }

    useEffect(() => {
        loadata();
    }, []);

    const deleteContact = (id) => {
        if (window.confirm("Are your sure to unregister , you will not get refund ")) {
            axios.delete(`http://localhost:5000/api/remove/${id}`); 
            toast.success("Unregistered  sucessfully")
            setTimeout(()=>loadata() , 500)
        }
    }
  return (
      <div style={{ marginTop: "150px" }}>
          <div><h1>Find Your Neighbours Here </h1></div><br/>
          <div><h5><i>Batches : A (6-7)AM  , B (7-8)AM , C(8-9)AM , D(6-7)PM</i></h5></div>
          <br />
          <Link to="/addContact">
                <button className='btn btn-contact'>Register Yourself</button>
          </Link>
          <Link to="/">
              <button className='btn btn-contact'>Go back</button>
          </Link>
          <table className='styled-table'>
              <thead>
                  <tr>
                      <th style={{ textAlign: "center" }}>No </th>
                      <th style={{ textAlign: "center" }}>Name </th>
                      <th style={{ textAlign: "center" }}>Email </th>
                      <th style={{ textAlign: "center" }}>contact </th>
                      <th style={{ textAlign: "center" }}>age </th>
                      <th style={{ textAlign: "center" }}>Batch </th>
                      <th style={{ textAlign: "center" }}>Action </th>
                  </tr>
              </thead>

              <tbody>
                  {data.map((item, index) => {
                      return (
                          <tr key={item.id}>
                              <th scope='row'>{index + 1}</th>
                              <td>{item.name}</td>
                              <td>{item.email}</td>
                              <td>{item.contact}</td>
                              <td>{item.age}</td>
                              <td>{item.batch}</td>
                              <td>
                                

                                  <button className='btn btn-delete' onClick={()=>deleteContact(item.id)}>Unregister Yourself</button>
                                  
                                  <Link to={`/view/${item.id}`}>
                                      <button className='btn btn-view'>View </button>
                                  </Link>
                              </td>
                          </tr>
                    )
                  })}
              </tbody>
          </table>
      
    </div>
  )
}

export default Home;
