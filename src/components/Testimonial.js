import React from 'react'
import styled from 'styled-components'
// import avatarImage from '../images/avatarImage.jpeg'
import avatar1 from "../images/avatar1.png"
import justinimg from "../images/justin.jpg"
import girlimg from "../images/girl.jpg"

export default function Testimonial() {
  return (
    <Section id="testimonials">
      <div className="title">
        <h2>Happy Customers</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>
            Planned Entire College Trip For 200 people and it was perfect getaway for us with fun as well as safety
          </p>
          <div className="info">
            <img src={justinimg} alt="" />
            <div className="details">
              <h4>Justin Enoch</h4>
              <span>Nerul</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            We had Two Different Trips From Skyland And on Both Occasions The Expectations Was Perfectly Matched For Us
          </p>
          <div className="info">
            <img src={girlimg} alt="" />
            <div className="details">
              <h4>Mansi Seth</h4>
              <span>Borivali</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            Skyland Look After You in Entire Trip Like Anything Else,Also The Food And Comfort Of The trip Was Awesome
          </p>
          <div className="info">
            <img src={avatar1} alt="" />
            <div className="details">
              <h4>Rahul Singh</h4>
              <span>Panvel</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  margin: 5rem 0;
  .title {
    text-align: center;
    margin-bottom: 2rem;
  }
  .testimonials {
    display: flex;
    justify-content: center;
    margin: 0 2rem;
    gap: 2rem;
    .testimonial {
      background-color: aliceblue;
      padding: 2rem;
      border-radius: 0.5rem;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
      transition: 0.3s ease-in-out;
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      }
      .info {
        display: flex;
        justify-content: center;
        gap: 1rem;
        align-items: center;
        margin-top: 1rem;
        img {
          border-radius: 3rem;
          height: 3rem;
        }
        .details {
          span {
            font-size: 0.9rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .testimonials {
      flex-direction: column;
      margin: 0;
      .testimonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }
`;


 

