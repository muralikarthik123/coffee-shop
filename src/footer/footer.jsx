import React from 'react'
import './footer.css'
export default function Footer() {
  return (
    <div className='p2'>
      {/*footer */}
      <div className='footer'>


          {/*container 1*/}
          <div className='c1'>
            {/*newletter text*/}
            <p>Newsletter</p>
            <p className='text'>Stay up to date with all the latest from mkCafe</p>
            {/*email*/}
            <p  className='text'>Email*</p>
            {/*email box*/}
            <input className='textbox' type='email'/>
            <label><button className='joinbt'>Join</button></label>
            <br></br>
          </div>


          {/*container 2*/}
          <div className='c1'>
            <p>Talk to Us</p>
            {/*mobile number*/}
            <p className='text'>+91-7386427924</p>
            
            <p className='text'>karthikmurali851@gamil.com</p>
            
            <p className='text'>Arundelpet 3/4,guntur,Andhra Pradesh,India</p>
          </div>
          
          {/*container 3*/}
          <div className='c1'>
            <h1><a style={{textDecoration:'none',color:'white'}}href='https://www.instagram.com/accounts/login/?hl=en'>Instagram</a></h1>
            <h1><a style={{textDecoration:'none',color:'white'}} href='https://facebook.com/'>Facebook</a></h1>
            <h1><a style={{textDecoration:'none',color:'white'}} href='https://www.youtube.com/'>Youtube</a></h1>
            <p className='name'>@Project was develped by Murali karthik</p>
          </div>
      </div>
    </div>
  )
}
