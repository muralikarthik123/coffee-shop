import React from 'react'
import './about.css'
export default function about() {
  return (
    <div className='about'>
      <h1 className='headings'>About us</h1>
      <p className='content'>Welcome to our Coffee Shop , where every cup tells a story. Founded in [2024], we started with a simple goal: to bring people together over great coffee. What began as a small dream quickly blossomed into a local favorite, known for our passion for quality, sustainability, and community.</p>
      <p className='content'>At the heart of our business is our commitment to exceptional coffee. We work closely with small, ethical farms around the world, ensuring that our beans are not only of the highest quality but also sourced with respect for the environment and the farmers. From the hills of Colombia to the highlands of Ethiopia, we hand-select the finest beans to roast in-house, giving you a fresh and flavorful experience with every brew.</p>
      <p className='content'>But we’re not just about coffee. At [Coffee Shop Name], we believe in creating a space where everyone feels at home. Whether you’re catching up with friends, reading a book, or working on your next big project, our café is designed to be a welcoming retreat from the bustle of everyday life. With warm lighting, cozy seating, and the aroma of fresh coffee in the air, you’ll always find a spot to unwind.</p>
     
    
    {/*images*/}
      <div className='data'>
        <div className='c1'>
            <img src='./ab1.jpeg'  className='img1' alt=''/>
            <h2>
            Community Growth
            </h2>
            <p>Describe your image here. Use catchy text to tell people the story behind the photo</p>
        </div>
        {/*container 2*/}
        <div className='c1'>
            <img src='./ab2.jpeg'  className='img1' alt=''/>
            <h2>
            Fair Trade
            </h2>
            <p>Describe your image here. Use catchy text to tell people the story behind the photo</p>
        </div>

        {/*container 3*/}
        <div className='c1'>
            <img src='./ab3.jpeg'  className='img1' alt=''/>
            <h2>
            Environmental Commitments
            </h2>
            <p>Describe your image here. Use catchy text to tell people the story behind the photo</p>
        </div>
      </div>
    </div>
  )
}
