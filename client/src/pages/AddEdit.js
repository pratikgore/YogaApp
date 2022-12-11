import React from 'react'
import { useState,  } from 'react';
import {  Link } from 'react-router-dom'
import "./AddEdit.css" 
import axios  from 'axios';
import {toast} from 'react-toastify'

const initialState = {
    name: "",
    email: "",
    contact: "", 
    age: "", 
    batch:"" , 
    state: " "
}; 


const AddEdit = () => {
    const [state, setState] = useState(initialState);

    const { name, email, contact ,age,batch} = state;

    const payemntHandler = (e) => {
        e.preventDefault();
        if (!name || !email || !contact || !age || !batch) {
            toast.error("Payment failed , please fill all required fields !");
        } else {
            toast.success("Payment of  500rs  sucessfully !!!")
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !contact || !age || !batch) {
            toast.error("Please enter all fileld");
        }
        else if (age <= 18 || age >= 65) {
            toast.error("Your age is not eligible")
        }
        else if (batch > 'D') {
            toast.error("Please enter batch between A,B,C,D")
        }
        else {
            axios.post("http://localhost:5000/api/post", {
                name,
                email,
                contact,
                age,
                batch
            }).then(() => {
                setState({ name: " ", email: " ", contact: " ", age: " ", batch: " " })
            }).catch((err) => {
                toast.error(err.response.data)
            })
         
            setTimeout(() =>  toast.success("Registration sucessfull"), 500)
        ;
        }
    }


    const handleInput = (e) => {
        const { name, value } = e.target 
        setState({ ...state, [name]: value })
}
    
  return (
      <div style={{ marginTop: "20px"}}>
          <form style={{
              margin: "auto", 
              padding: "15px", 
              maxWidth: "400px", 
              alignContent:"center"
          }}
              onSubmit={handleSubmit}>
              <label htmlFor='name'> Name</label>
              <input type="text" id="name" name="name" placeholder="Enter Your Name" value={name } onChange={handleInput}/>
              
              <label htmlFor='email'> Email</label>
              <input type="email" id="email" name="email" placeholder="Enter Your Email" value={email } onChange={handleInput}/>


              <label htmlFor='Contact'> Contact</label>
              <input type="contact" id="contact" name="contact" placeholder="Enter Your contact" value={contact} onChange={handleInput}/>

              
              <label htmlFor='Age : Valid age group 18-65'> Age</label>
              
              <input type="age" id="age" name="age" placeholder="valid age group 18-65" value={age} onChange={handleInput} />

            <label htmlFor='Batch'> Batch</label>            
              <input type="batch" id="batch" name="batch" placeholder="Enter Your batch" value={batch} onChange={handleInput} />

              <input type="submit" value="Save" />
              <input type="submit" style={{backgroundColor: 'blue'}} onClick={payemntHandler} value="Make Payment" />
              <Link to='/'>
                <input type="button" value="Go back"/>
              </Link>
          </form>
          
    </div>

  )
}

export default AddEdit; 
