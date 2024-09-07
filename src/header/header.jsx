import React,{useState} from 'react'
import './header.css'

/*HAMBURG*/
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

/*FOOTER*/
import Footers from '../footer/footer.jsx'

/*HOME page*/
import Landing from '../home/home.jsx'

/*MENU CARD*/
import Menu from '../menu/menu.jsx'

/*Contact Us*/
import Contact from '../contact/contact.jsx'

/*about us*/
import About from '../about/about.jsx'

/*branches*/
import Branches from '../branches/branches.jsx'


export default function Header() {
    const [data,setData]=useState('home')
    const [value,setValue]=useState(false)
    const open=()=>{
        setValue(!value)
    }
    const opening=(e)=>{
        
        setData(e)
    }
  return (
    <div className='p1'>
        {/*header contanier*/}
        <div className='header'>
            {/*logo*/}
            <img  className='logo' src='./coffee.jpg' alt=''/>
            {/*hamburg menu*/}
            <div className='hamburg'>
               <button onClick={open}> <GiHamburgerMenu className='icon'/></button>
            </div>
            {/*navbar with toggle switch*/}
            <ul className={value? 'mob':'lap'} >
                <button className='close' onClick={open}><IoMdClose className='closefont'/></button>
                <li onClick={()=>opening('home')}>Home</li>
                <li onClick={()=>opening('menu')}>Menu</li>
                <li onClick={()=>opening('tracking')}>About</li>
                <li onClick={()=>opening('contact')}>Contact</li>
                <li onClick={()=>opening('branch')}>Address</li>
            </ul>
        </div>

        {/*body*/}
        <div>
        {data==='home' &&(
                <div>
                    <Landing/>
                </div>
            )}

        {data==='menu' &&(
                <div>
                    <Menu/>
                    
                </div>
            )}

        {data==='tracking' &&(
                <div>
                    <About/>
                </div>
            )}

        {data==='contact' &&(
                <div>
                    <Contact/>
                </div>
            )}
        
        
        {data==='branch' &&(
                <div>
                    <Branches/>
                </div>
            )}
        </div>

        {/*footer starts*/}
        <Footers/>

    </div>
  )
}
