import React, { useState } from 'react';
import './menu.css'
import { FaShoppingCart } from "react-icons/fa";
import Delivery from '../delivery/delivery.jsx'
// Sample items data with images
const itemsData = [

  { id: 0, name: 'Cappuccino',data:'Dark, Rich in flavour espresso lies in wait under a smoothed...(180ml)', price: 300, image: './c1.jpg' },
  { id: 1, name: 'Latte', price: 360,data:'Our dark, Rich in flavour espresso balanced with steamed milk...(180ml)', image: './c2.jpeg' },
  { id: 2, name: 'Stardust Macchiato', price: 420,data:'Super smooth and creamy vanilla half and half crowned with smooted...(180ml)', image: './c3.jpg' },
  { id: 3, name: 'Chocolate Cappuccino ', price: 380,data:'Dark, Rich in flavour espresso and bittersweet cocoa (180ml)', image: './c4.jpeg' },
  { id: 4, name: 'Caffè Mocha', price: 300,data:'We combine our rich in flavour, full-bodied espresso (180ml)', image: './c5.jpeg' },
  { id: 5, name: 'Caramel Macchiato', price: 320,data:'Freshly steamed milk with vanilla-flavored syrup...(180ml)', image: './c6.jpg' },
  { id: 6, name: ' Chocolate Pastry', price: 70,data:'Dark Chocolate, Rich in flavour and cream on sides(1piece)', image: './p1.jpg' },
  { id: 7, name: 'Pineapple FC Pastry', price:60,data:'Full of Pineapple faloured pastry  (1piece)', image: './p2.jpg' },
  { id: 8, name: 'Choco Vanilla Pastry ', price: 80,data:'pastry with dark Chocolate with vanilla flavour on sides (1piece)', image: '/p3.jpg ' },
  { id: 9, name: 'Perfect Vanilla Pastry', price: 70,data:'Vanilla pastry with rose flavour above it (1piece)', image: './p4.jpg' },
  { id: 10, name: 'Red valvet Pastry ', price: 100,data:'Red valvet pastry with red color (1piece)', image: 'p5.webp' },
  { id:11, name: 'Strawberry Cream Pastry ', price: 120,data:'Strawberry faloured outside and vanilla pastry  (1 piece)', image: 'p6.jpg' },
  { id: 12, name: ' Pesto Veggie  Sandwich',price:150,data:'Sauteed broccoli florets and mushroom slices  vegetables(1piece)',image:'s1.jpg' },
  { id: 13, name: 'Rambo Chicken sandwish ', price: 300,data:'Spicy and tangy Sriracha grilled chicken shreds(1piece)', image: 's2.jpg' },
  { id:14, name: 'Roast Chicken  Sandwich ', price: 320,data:'Roasted chicken meets assorted bell peppers  (1piece)', image: 's3.jpg' },
  { id: 15, name: ' Mushroom  Sanwish',price:400,data:'Hearty mushrooms topped with melted yellow cheddar cheese',image:'s4.jpeg' },
  { id: 16, name: 'Cheese sandwish', price: 350,data:'This burger consists of a super crispy & flakey chicken patty ', image: 's5.jpg' },
  { id:17, name: 'Chicken sandwish', price: 220,data:'smashed chicken inside with outer layer crisy ', image: 's6.avif' },
  { id: 18, name: 'Slaw Burger',price:330,data:'he slaw burger is a classic burger popular in southern America.',image:'b1.jpg' },
  { id: 19, name: 'Muffaletta Burger ', price: 370,data:'A muffaletta burger has the flavours and ingredients', image: 'b2.jpeg' },
  { id:20, name: 'Veggie Burger ', price: 250,data:'A veggie burger is a burger made with plant-based ingredients.', image: 'b3.jpeg' },
  { id: 21, name: 'Cheese Burger',price:350,data:'A cheeseburger is a burger with a beef patty and cheese on top.',image:'b4.avif' },
  { id: 22, name: 'Specialty Burger ', price: 400,data:'In Australia, specialty burgers made with kangaroo', image: 'b5.avif' },
  { id:23, name: 'Chicken Burger', price: 320,data:'Chicken burgers are made with ground chicken meat. ', image: 'b6.jpg' },


];

function App() {

  /*add to cart*/
  const [cart, setCart] = useState([]);
  const [add,setAdd]=useState(0)
  

  // Function to add an item to the cart
  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCart(
        cart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
        
      );
      setAdd(add+1)
      
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
     
      setAdd(add+1)
    }
  };

  // Function to increase item quantity
  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  
  };

  // Function to decrease item quantity
  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Calculate the total amount
  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );


  // Split items into groups of three
  const group1 = itemsData.slice(0, 3);
  const group2 = itemsData.slice(3, 6);
  const group3 = itemsData.slice(6, 9);
  const group4 = itemsData.slice(9, 12);
  const group5 = itemsData.slice(12, 15);
  const group6 = itemsData.slice(15, 18);
  const group7 = itemsData.slice(18, 21);
  const group8 = itemsData.slice(21, 24);




  /*menu with burger,sandwish,coffe data,cart*/
  const [data,setData]=useState('coffee')
  const open=(e)=>{
    setData(e);
      
  }
  

  return (
    <div className="p4">
      {/*iteams all displayed above*/}

      {/* add to cart button */}
      <div className='back'>
          <p className='count'>{add}</p>
         <div className='movetop'>
          
            <button className='cart' onClick={() => open('cart')}><span ><FaShoppingCart className='icon1'/></span>Cart</button>
         </div>
      </div>
      <div className='iteam'>
          {/*coffee*/}
          <div >
            <img onClick={()=>open('coffee')} className='img6' src='./coffee1.webp' alt=' '/>
            <h2>Coffee</h2>
          </div>
          {/*pastry*/}
          <div><img onClick={()=>open('pastry')}  className='img6' src='./pastry.jpg' alt=' '/>
          <h2>Pastry</h2></div>
          {/*sanwish*/}
          <div><img  onClick={()=>open('sanwish')} className='img6' src='./san.jpg' alt=' '/>
          <h2>Sandwish</h2></div>
          {/*burger*/}
          <div><img onClick={()=>open('burger')}  className='img6' src='./burger.jpeg' alt=' '/>
          <h2>Burger</h2></div>
          
        </div>
  
    
{/*coffee  data*/}
    {/*starts*/}
      {data==='coffee' &&(
        <div >
      {/* 1 to 3 iteams*/}
      <div className='coffee' >
        {group1.map((item) => (
          <div className='c1' key={item.id}>
            <br></br>
            <img src={item.image} alt={item.name}  className='iteam1img'/>
            <br></br>
            <h2>{item.name} </h2>
            <p>{item.data}</p>
            {/*cost ,add to cart button*/}
                <div className='costbutton'>
                  <div>
                    <h3>Rs {item.price}/-</h3>
                  </div>
                  <div>
                  <button  onClick={() => addToCart(item)} >Add to cart </button>
                  </div>
                </div>
          </div>
        ))}
      </div>

{/* Second Group in coffee */}
      <div className='coffee' >
        {group2.map((item) => (
          <div className='c1' key={item.id}>
          <br></br>
          <img src={item.image} alt={item.name}  className='iteam1img'/>
          <br></br>
          <h2>{item.name} </h2>
          <p>{item.data}</p>
          {/*cost ,add to cart button*/}
              <div className='costbutton'>
                <div>
                  <h3>Rs {item.price}/-</h3>
                </div>
                <div>
                <button  onClick={() => addToCart(item)} >Add to cart </button>
                </div>
              </div>
        </div>
        ))}
      </div>
    </div>
  )}

{/*cofee Completed and next comes pastry*/}

{/*pasty starts*/}
{/*starts*/}
{data==='pastry' &&(
        <div >
      {/* 1 to 3 iteams in pastry*/}
      <div className='coffee' >
        {group3.map((item) => (
          <div className='c1' key={item.id}>
            <br></br>
            <img src={item.image} alt={item.name}  className='iteam1img'/>
            <br></br>
            <h2>{item.name} </h2>
            <p>{item.data}</p>
            {/*cost ,add to cart button*/}
                <div className='costbutton'>
                  <div>
                    <h3>Rs {item.price}/-</h3>
                  </div>
                  <div>
                  <button  onClick={() => addToCart(item)} >Add to cart </button>
                  </div>
                </div>
          </div>
        ))}
      </div>

{/* Second Group in pastry */}
      <div className='coffee' >
        {group4.map((item) => (
          <div className='c1' key={item.id}>
          <br></br>
          <img src={item.image} alt={item.name}  className='iteam1img'/>
          <br></br>
          <h2>{item.name} </h2>
          <p>{item.data}</p>
          {/*cost ,add to cart button*/}
              <div className='costbutton'>
                <div>
                  <h3>Rs {item.price}/-</h3>
                </div>
                <div>
                <button  onClick={() => addToCart(item)} >Add to cart </button>
                </div>
              </div>
        </div>
        ))}
      </div>
    </div>
  )}

{/* pastry ends */}
{/*sanwish starts*/}
{/*starts*/}
{data==='sanwish' &&(
        <div >
      {/* 1 to 3 iteams in pastry*/}
      <div className='coffee' >
        {group5.map((item) => (
          <div className='c1' key={item.id}>
            <br></br>
            <img src={item.image} alt={item.name}  className='iteam1img'/>
            <br></br>
            <h2>{item.name} </h2>
            <p>{item.data}</p>
            {/*cost ,add to cart button*/}
                <div className='costbutton'>
                  <div>
                    <h3>Rs {item.price}/-</h3>
                  </div>
                  <div>
                  <button  onClick={() => addToCart(item)} >Add to cart </button>
                  </div>
                </div>
          </div>
        ))}
      </div>

{/* Second Group in pastry */}
      <div className='coffee' >
        {group6.map((item) => (
          <div className='c1' key={item.id}>
          <br></br>
          <img src={item.image} alt={item.name}  className='iteam1img'/>
          <br></br>
          <h2>{item.name} </h2>
          <p>{item.data}</p>
          {/*cost ,add to cart button*/}
              <div className='costbutton'>
                <div>
                  <h3>Rs {item.price}/-</h3>
                </div>
                <div>
                <button  onClick={() => addToCart(item)} >Add to cart </button>
                </div>
              </div>
        </div>
        ))}
      </div>
    </div>
  )}


{/* sandwish ends */}
{/*burger starts*/}
{/*starts*/}
{data==='burger' &&(
        <div >
      {/* 1 to 3 iteams in pastry*/}
      <div className='coffee' >
        {group7.map((item) => (
          <div className='c1' key={item.id}>
            <br></br>
            <img src={item.image} alt={item.name}  className='iteam1img'/>
            <br></br>
            <h2>{item.name} </h2>
            <p >{item.data}</p>
            {/*cost ,add to cart button*/}
                <div className='costbutton'>
                  <div>
                    <h3>Rs {item.price}/-</h3>
                  </div>
                  <div>
                  <button  onClick={() => addToCart(item)} >Add to cart </button>
                  </div>
                </div>
          </div>
        ))}
      </div>

{/* Second Group in pastry */}
      <div className='coffee' >
        {group8.map((item) => (
          <div className='c1' key={item.id}>
          <br></br>
          <img src={item.image} alt={item.name}  className='iteam1img'/>
          <br></br>
          <h2>{item.name} </h2>
          <p>{item.data}</p>
          {/*cost ,add to cart button*/}
              <div className='costbutton'>
                <div>
                  <h3>Rs {item.price}/-</h3>
                </div>
                <div>
                <button  onClick={() => addToCart(item)} >Add to cart </button>
                </div>
              </div>
        </div>
        ))}
      </div>
    </div>
  )}


{/*cart data starts inside*/}
      {data === 'cart' && (
        <div className='carts' >

          <h1 className='heading'>Cart</h1>
          {cart.length === 0 ? (
            <p className='empty'>The cart is empty.</p>
            
          ) : (
            cart.map((item) => (
              
              <div key={item.id}>

                {/*total container */}
                <div className='total'>
                {/*iteam on left side  data side by side */}
                <div className='cartdata'>
                  {/*image*/}
                  <div>
                    <img src={item.image} alt={item.name}  className='cartimg'/>
                  </div>
                  
                  <div>
                    
                      <h1 className='iteamname'>{item.name}</h1>
                      <p>{item.data}</p>

                      <button  className='plus' onClick={() => increaseQuantity(item.id)}>+</button>
                        <span>{item.quantity}</span>
                      <button  className='plus' onClick={() => decreaseQuantity(item.id)}>-</button>
                      <h3> - Rs{item.price} </h3>
                      <button className='orbt' onClick={()=>open('order')}>Place order</button>
                  </div>   
                </div>
                
                </div>
                
              </div>
              

            ))
            
          )}
           
          <h3 classname='cart'>Total Amount: Rs{totalAmount}</h3>

        {/*delivery details*/}
        
        </div>
      )}

    {/*order details*/}
    {data==='order' &&(
            <div >
              <Delivery/>
            </div>
          )}
    </div>
  );
}

export default App;
