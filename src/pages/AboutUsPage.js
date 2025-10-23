import React from 'react'
import styled from 'styled-components'
// import { Tablet } from "../Responsive";
// import { Link } from "react-router-dom";


const Wrapper = styled.div`
      margin: 0;
      padding: 0;
      font-family: "Poppins", sans-serif;

      .head {
    height: 20vh;
    background-image: url("/images/hero1.jpg");
    background-position: center;
    background-size: cover;
    position: relative;
    /* z-index: -2; */
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    padding: 20px;
    margin-bottom: 20px;
}

.head .head-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 1;
}

.head h1 {
    z-index: 2;
    text-align: center;
}
      
      `

function AboutUsPage() {


  return (
    <Wrapper>
      <div className="head">
        <div className='head-bg'></div>
        <h1 className="text-bold">About Us</h1>
      </div>
      <section className="container p-4">

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, delectus deleniti ex iste obcaecati
          omnis pariatur porro repudiandae saepe, sit voluptate, voluptatibus! Deleniti hic id ipsam
          laboriosam numquam? Minima, pariatur!
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, delectus deleniti ex iste obcaecati
          omnis pariatur porro repudiandae saepe, sit voluptate, voluptatibus! Deleniti hic id ipsam
          laboriosam numquam? Minima, pariatur!
        </p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, delectus deleniti ex iste obcaecati
          omnis pariatur porro repudiandae saepe, sit voluptate, voluptatibus! Deleniti hic id ipsam
          laboriosam numquam? Minima, pariatur!
        </p>
      </section>

    </Wrapper>
  )
}

export default AboutUsPage