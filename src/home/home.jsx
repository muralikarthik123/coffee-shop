import React from 'react'
import './home.css'
export default function Home() {
  
  return (
    <div className='p3'>
    {/*image with positon fixed in background */}
      <div className='bg'>
        {/*heading content over the image*/}
        <h1 className='heading'>Your Go-to Spot for Delicious Eats & Coffee</h1>
      </div>

    {/*container 2*/}
      <div className='c1'>
        {/*left content*/}
        <div className='c1left'>
          <h1 className='heading'>Eat.</h1>
          <p className='content'>Breakfast, Lunch and Artisanal Pastries</p>
          <p className='content'>A warm croissant filled with scrambled eggs, crispy bacon, cheddar cheese, and a hint of spicy aioli. A perfect way to start your day!.</p>
          <p className='content'>Fluffy pancakes stacked high, drizzled with pure maple syrup, and topped with fresh fruits. Add a side of whipped cream for an extra treat!</p>
        </div>
        {/*right side content*/}
        <div className='c1right'>
          <img className='img3'src='./img3.png' alt=''/>
        </div>
      </div>

    {/*container 3*/}
      <div className='c2'>
       
       
        

         {/*left content*/}
        <div className='c2right'>
          <h1 className='heading'>Drink.</h1>
          <p className='content'>The Freshest Cup in Town</p>
          <p className='content'>A classic blend of espresso, steamed milk, and a thick, velvety foam. Perfectly balanced for a rich and creamy coffee experience.</p>
          <p className='content'>Smooth and creamy, our latte combines rich espresso with steamed milk, topped with a light layer of foam. Customize with your favorite syrup for a personal touch!</p>
        </div>
        {/*right side content*/}
        <div className='c2left'>
          <img className='img3'src='./img4.png' alt=''/>
        </div>
      </div>

    {/*container 4 we are using same classname that was used in container 2*/}
    <div className='c1'>
        {/*left content*/}
        <div className='c1left'>
          <h1 className='heading'>Enjoy.</h1>
          <p className='content'>Make Yourself at Home</p>
          <p className='content'>Stepping into a coffee shop is like entering a cozy haven away from the hustle of everyday life. The rich aroma of freshly ground coffee beans greets you at the door, mingling with the faint scent of warm pastries. The atmosphere is a blend of gentle chatter, the soft hum of espresso machines, and the soothing melodies playing in the background.</p>
        </div>
        {/*right side content*/}
        <div className='c1right'>
          <img className='img3'src='./img5.png' alt=''/>
        </div>
      </div>

    {/*container 5*/}
  
    <div className='c5'>
     
      <h1 className='heading'>Drop By for a Bite.</h1>

      {/*another container to make content side by side*/}
      <div className='c5main'>
        {/*left side*/}
        <div className='c5left'>
    
          <h3 >Address</h3>
          <p>8C2Q+P55, 4th Ln, Brodipet, Guntur, Andhra Pradesh 522002.</p>
        </div>

        {/*middle line*/}

        <div className='c5middleline'>

        </div>
        {/*right side*/}
        <div className='c5right'>
        <h3>Opening Hours</h3>
        <p>Mon - Fri: 9am - 6pm​​Saturday: 10am - 2pm Sunday: Closed</p>
        </div>
      </div>

    </div>
    </div>
  )
}
