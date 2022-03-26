import React from 'react'
import styled from "styled-components"
import kedar from "../images/skybg.jpg"
import { FaPhone } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';

export default function Hero() {
  return (
    <Section id='hero'>
      <div className="background">
        <img src={kedar} alt="" />
      </div>
      <div className="content">
        <div className="title">
          <h1>TRAVEL TO EXPLORE</h1>
          <p>Skyland has been committed to deliver clients with the best possible experience in value as well as quality. we are specialists at various domains and sectors with high productivity in serving our clients
            <h2>Contact Us</h2>
            <h7><FaPhone></FaPhone>  7666795669|| <FaEnvelope></FaEnvelope>  vigneshthevar863@gmail.com</h7>
          </p>
        </div>
       
      </div>

    </Section>
  )
}
const Section=styled.section`
position:relative;
margin-top:2rem;
width:100%;
height:10%;
.background{
  
  height:100%;
  img{
    border-radius:30px;
    width:100%;
   
    filter:brightness(60%)

  }
}
.content{
  height:100%;
  width:100%;
  position:absolute;
  top:0;
  z-index:3;
  text-align:center;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  gap:1rem;
  .title{
    color:white;
    h1{
      font-size:3rem;
      letter-spacing:0.2rem;
      
    }
    p{
      text-align:center;
      padding:0 30vw;
      margin-top:0.5rem;
      font-size:1.2rem;
    }
  }



}
@media screen and (min-width: 280px) and (max-width: 980px) {
  height: 25rem;
  .background {
    background-color: palegreen;
    img {
      height: 100%;
    }
  }
  .content {
    .title {
      h1 {
        font-size: 1rem;
      }
      p {
        font-size: 0.8rem;
        padding: 1vw;
      }
    }
    .search {
      flex-direction: column;
      padding: 0.8rem;
      gap: 0.8rem;
      /* padding: 0; */
      .container {
        padding: 0 0.8rem;
        input[type="date"] {
          padding-left: 1rem;
        }
      }
      button {
        padding: 1rem;
        font-size: 1rem;
      }
      /* display: none; */
    }
  }
}
`;






