import React,{useState} from 'react'
import './contact.css'
import emailjs from '@emailjs/browser';

import { MdOutlineLocationOn } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";

import { MdOutlineEmail } from "react-icons/md";
import { SlUserFollow } from "react-icons/sl";
export default function Contact() {
    const [data,setData]=useState({
        first:'',
        last:'',
        email:'',
        message:'',
    })
    const {first,last,email,message}=data;
    const changes=(e)=>{
        setData({...data, [e.target.name]:[e.target.value]});
    }
   
    const submiting=(e)=>{
        e.preventDefault();
        
        console.log(data);

        emailjs
      .sendForm('service_wp5fg25', 'template_m9ne0rt', e.target, {
        publicKey: '9oLRZGqYbI-iCb1mM',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();
    }
  return (
    <div className='p5'>
        {/*total container 1*/}
        <div className='c1'>
            {/*leftside form*/}
            <form onSubmit={submiting}>

              
            <div className='leftside'>
                
                {/*left side first name in form container*/}
                <div className='names'>
                   
                    <div>
                        {/*first name  and text box */}
                        <label>First Name *</label>
                        <br></br>
                        <br></br>
                        <input className='box1' name='first' value={first}  type='text' onChange={changes} required/>
                        <br></br>
                        <br></br>   
                    </div>
                    {/*right side last name in  form container*/}
                    <div className='right'>
                        <label>Last Name *</label>
                        <br></br>
                        <br></br>
                        <input  className='box1' name='last' value={last} onChange={changes}  type='text' required/>
                    </div>
                </div>
                <br></br>
                {/*form content*/}
                <div>
                    {/*email*/}
                    <label>Email *</label>
                    <br></br>
                    <br></br>
                    <input  className='box2' name='email' value={email} onChange={changes}  type='email' required/>
                    <br></br>
                    <br></br>
                    {/*messgae*/}
                    <label>Message *</label>
                    <br></br>
                    <br></br>
                    <input  className='box3'  name='message' value={message} onChange={changes}  type='text' required/>
                    <br></br>
                    <br></br>
                    <input  className='submit'   type='submit'/>
                </div>
            </div>
            </form>


            {/*middle line*/}
            <div className='middle1'>
             .
            </div>


            {/*right side content*/}
            <div className='rightside'>
              {/*container 2 at the top*/}
              <div className='c2'>
                {/*container 3*/}
                <div className='c3'>
                  <MdOutlineLocationOn  className='icons'/>
                  <p>Address:</p>
                  <p>Arundel pet 3/4,guntur.</p>
                </div>
                 {/*container 4*/}
                <div className='c3'>
                  <MdLocalPhone  className='icons'/>
                  <p>Phone no:</p>
                  <p>7386427924.</p>
                </div>
              </div>


              {/*container 5 bottom with bottom data*/}
              <div className='c5'>
                {/*container 3*/}
                <div className='c3'>
                  <MdOutlineEmail   className='icons'/>
                  <p>Email:</p>
                  <p>karthikmurali851@gmail.com.</p>
                </div>
                 {/*container 4*/}
                <div className='c3'>
                  <SlUserFollow className='icons'/>
                  <p>Phone no:</p>
                  <p>7386427924.</p>
                </div>
              </div>
            </div>

            
        </div>
        <br></br>
      <div className='train'>
        {/*contact details*/}
        {/* eslint-disable-next-line jsx-a11y/no-distracting-elements*/}
        <marquee>---------------   For any problems please do contact karthik   -------------</marquee>
      </div>
    </div>
  )
}
