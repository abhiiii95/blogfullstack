'use client';
import React, { useState } from 'react';
import styles from "./contactForm.module.scss";
import TextInput from '@/Common/Components/TextInput/TextInput';

const ContactForm = () => {
    const [data,setData] = useState({
        firstName:"",lastName:"",email:"",
        comment:""
    })
    const handleChange = (e)=>{
        const {name,value} = e.target;
        setData((prev)=>({...prev,[name]:value}))
    }
    const handleSubmit=(e)=>{
        e.preventDefault()

    }
  return (
    <form className={styles?.contactForm} onSubmit={handleSubmit}>
        <div className={styles?.firstRow}>
        <TextInput
        label="First Name"
        id="firstName"
        name="firstName"
        placeholder="Enter your first name"
        value={data?.firstName}
        onChange={handleChange}
        />
         <TextInput
        label="Last Name"
        id="lastName"
        name="lastName"
        placeholder="Enter your Last name"
        value={data?.lastName}
        onChange={handleChange}
        />
        </div>
        <TextInput
        type='email'
        label="Email"
        id="email"
        name="email"
        placeholder="Enter your email"
        value={data?.email}
        onChange={handleChange}
        />
        <div className={styles?.textAreaComment}>
            <label htmlFor='comment'>
                Comment
            </label>
            <textarea placeholder='Enter your comment' rows={5}/>
        </div>
        <button type='submit' className={styles?.submit}>Submit</button>
  
    </form>
  )
}

export default ContactForm
