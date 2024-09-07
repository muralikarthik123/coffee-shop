import React from 'react'
import './branches.css'
export default function branches() {
  return (
    <div className='branches'>
        <div className='address'>
            {/*address*/}
            <h1>Address</h1>
            {/*address and other content*/}
            <div className='mapdata'>
                <br></br>
                <h3>Name:Madras premium coffe cafe.</h3>
    
                <h3>Address:8C2Q+P55, 4th Ln, Brodipet, Guntur, Andhra Pradesh 522002.</h3>
                
                <h3>Timings:Morning 9am - Evening 6pm.</h3>
          
                <h3>Phone.no -7386427924.</h3>
         
                <h3>Email.Id -karthikmurali851@gmail.com.</h3>
            </div>
        </div>
        {/*maps container*/}
        <div className='maps'>
            {/*maps*/}
            <iframe className='map'  title="j"  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d122541.24999696469!2d80.29378774335937!3d16.301774100000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a75438963b0df%3A0x476ef77e79a26a9e!2sMadras%20Premium%20Coffee!5e0!3m2!1sen!2sin!4v1725532240158!5m2!1sen!2sin" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  )
}
