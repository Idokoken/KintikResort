import React from "react";
// import "./ContactInfo"
// import { Link } from "react-router-dom";
import styled from "styled-components";
import { Tablet } from "../Responsive";


const Wrapper = styled.div`
font-family: var(--primary-font);

.head {
    height: 20vh;
    background-image: url("/images/hero.jpg");
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

.info{
    display: grid;
    justify-content: center;
    grid-template-columns: 90%;
    ${Tablet({ gridTemplateColumns: "30% 30% 30%", gap: "10px" })}
}
.title{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90vw;
}
.info div{
    display: flex,
    flex-direction: column;
    align-items: center;
    border-left: 2px solid rgba(0, 0, 0, 0.2);
    padding-left: 20px;
}
.info div h5{
    color: var(--primary-color);
    margin-bottom: 15px;
}
.info div p{

}
.info div p .icon-container{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    padding: 10px;
    background: black;
    color: var(--primary-color);
}
.info div p.icon{
    display: flex;
    justify-content: start;
    align-items: center;
    align-self: end;
}
.info .info-one{

}
.form{
    background: black;
    padding: 40px;
    margin: 30px 5px;
    border-radius: 10px;
    color: white;
}
.form input, .form textarea, .form button {
    border-radius: 20px 0 20px 20px;
}


`;
function ContactInfo() {
  return (
    <Wrapper>

      <div className="head">
        <div className='head-bg'></div>
        <h1 className="text-bold">Contact Us</h1>
      </div>
      <div className="content container">
        <div className="title my-4">
          <h2 className="text-bold">Get In Touch</h2>
          <p>let's Organise Something Awesome Together</p>
        </div>
        <div className="info my-3">
          <div className="info-one">
            <h5>General Information</h5>
            <p>For general information or information about Kintik Resort story and services, contact:</p>
            <p className="icon">
              <span className="me-2 icon-container">
                <i className="fa-solid fa-envelope-circle-check address-icon"></i>
              </span>info@kintikresort.com
            </p>
          </div>
          <div className="info-two">
            <h5>Bookings/Reservations</h5>
            <p>You could request for a Special booking, Dinner Reservation, Conference meeting</p>
            <p className="icon">
              <span className="me-2 icon-container">
                <i className="fa-solid fa-phone address-icon"></i>
              </span>+2349036655765
            </p>
          </div>
          <div className="info-three">
            <h5>Other Information & Inquires</h5>
            <p>We would love to hear from you about how you enjoyed our services</p>
            <p className="icon">
              <span className="me-2 icon-container">
                <i className="fa-solid fa-phone address-icon"></i>
              </span>+23490355786988
            </p>
          </div>
        </div>
        <div className="form container">

          <form action="" method="POST">
            <h5 className="mt-3 mb-4 text-bold align-center">Fill the form below and send</h5>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" name="name" className="form-control" id="name" placeholder="enter name here" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" name="email" className="form-control" id="email" placeholder="enter email here" />
            </div>
            <div className="mb-3">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input type="text" name="subject" className="form-control" id="subject" placeholder="enter subject here"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="comment" className="form-label">Comment</label>
              <textarea className="form-control" id="comment" name="comment" rows="3"></textarea>
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary mb-3">Send Message</button>
            </div>
          </form>
        </div>
      </div>

    </Wrapper>
  )
}

export default ContactInfo;
