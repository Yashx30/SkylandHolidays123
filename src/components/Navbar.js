import React from 'react'
import styled from 'styled-components'
import logo from '../images/sky2.ico'
// import { FaPhone } from "react-icons/fa";
// import { FaEnvelope } from "react-icons/fa";
export default function Navbar() {
  return (
    <>
    <Nav>
        <div className="brand">
            <div className="container">
                <img src={logo} alt="" />
                
            </div>
            <div className="toggle"></div>
           
        </div>
        {/* <ul className='contacts'>7666795669||vigneshthevar863@gmail.com  </ul>    */}
        
      
       
        {/* <button>Connect</button> */}
        
      
    </Nav>
    </>
  )
}
const Nav=styled.nav`
display:flex;
justify-content:space-between;
align-items:center;
.brand{
 
    .container{
        cursor:pointer;
        display:flex;
        justify-content:center;
        align-items:center;
        gap:0.4rem;
        font-size:1.2rem;
        font-weight:900;
        text-transform:uppercase;
        width:75px;
        height:75px
    }
    .toggle{
        display:none
    }
}
ul{
    display:flex;
    list-style-type:none;
    gap:1rem;
    li{
        a{
            text-decoration:none;
            color:#0077b6;
            font-size:1.2rem;
            transsistion:0ms.1s ease-in-out;
            &:hover:{
                color:#023e8a;
            }
        }
        &:first-of-type:{
            a{
            color:#023e8a;
            font-weight:900;
        }

    }
}
}
button{
    padding:0.5rem 1rem;
    cursor:pointer;
    border-radius:1rem;
    border:none;
    color:white;
    background-color:#48cae4;
    text-transform:uppercase;
    font-size:1.1rem;
    letter-spacing:0.1rem;
    transistion:0.3s ease-in-out;
    &:hover{
        background-color:#023e8a
    }

}
.contacts{
    text-decoration:none;
    color:#0077b6;
    font-size:1.2rem;
    transsistion:0ms.1s ease-in-out;
    &:hover:{
        color:#023e8a;
    }

}
@media screen and (min-width: 280px) and (max-width: 1080px) {
    .brand {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .toggle {
        display: block;
      }
    }
    .contacts{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        .toggle {
          display: block;
        }

    }
    ul {
      display: none;
    }
    button {
      display: none;
    }
  }
`;
