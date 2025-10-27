import React from 'react'
import styled from 'styled-components'
// import "./about.css"
import { Tablet } from "../Responsive";


const Wrapper = styled.div`
      margin: 0;
      padding: 0;
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
      .mission h3 {
          font-weight: 700;
          text-align: center;
          margin: 20px 0;
      }
      .about-content .mission h3 {
    font-weight: 700;
    text-align: center;
    margin: 20px 0;
    }
.about-content .review h3 {
    font-weight: 700;
    text-align: center;
    font-size: 20px;
    ${Tablet({ fontSize: "28px" })}
}

.about-content .review .customers {
    display: flex;
    flex-direction: column;
    padding: 10px;
    ${Tablet({
  flexDirection: "row",
  padding: "30px",
  paddingTop: "20px"
})}
}

.about-content .review .customers .customer1 {
    display: flex;
    flex-direction: column;
    padding: 20px;
    background: #FFFFFF;
    margin: 10px;
    margin-bottom: 20px;
    box-shadow: 5px 10px 0px 2.5px rgba(0, 0, 0, 0.2), inset 5px 5px 0px 2.5px rgba(0, 0, 0, 0.2);
}

.about-content .review .customers .customer1 h5 {
    font-style: italic;
}

.about-content .review .customers .customer1 p {
    font-size: 14px;
}

.about-content .review .customers .customer1 .img-container {
    margin: 3px 0;
    width: 50px;
    height: 50px;
    border: 2px solid rgba(0, 0, 0, 0.3);
    border-radius: 3px;
    background: var(--primary-color);
}

.about-content .review .customers .customer1 .img-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
      
`

function AboutUsPage() {


  return (
    <Wrapper>
      <div className="head">
        <div className='head-bg'></div>
        <h1 className="text-bold">About Us</h1>
      </div>

      <div className="about-content container">

        <section className="mission p-3">
          <h3>Mission</h3>
          <p>
            Our mission is to empower travelers by offering a comprehensive and intuitive train reservation
            platform that ensures easy access to train schedules, ticket bookings, and travel-related
            services. We are committed to delivering exceptional customer service, fostering sustainable
            travel practices, and continuously innovating to meet the evolving needs of our customers
          </p>
          <h3>Vision</h3>
          <p className="mb-0">
            To revolutionize train travel by providing a seamless, efficient, and user-friendly reservation
            platform that connects travelers with the best train services, enhancing their journey experiences
            and making train travel the preferred choice for all.
          </p>
        </section>

        <section className="review">
          <h3 className="mx-2 mt-3">What our Customers say About Our Services</h3>
          <div className="customers">
            <div className="customer1">
              <div className="img-container">
                <img src="/images/customer1.png" alt="customer" />
              </div>
              <p>I had an amazing experience with MBrailway. The journey was smooth, on time,
                and the staff was incredibly helpful. Thank you for making my trip so enjoyable
              </p>
              <h5>Pricilla Ibrahim</h5>
            </div>
            <div className="customer1">
              <div className="img-container">
                <img src="/images/customer2.png" alt="customer" />
              </div>
              <p>I had an excellent experience with MBrailway. The journey was smooth, the
                staff was friendly, and the service was top-notch. Thank you for making my trip
                memorable and hassle-free!
              </p>
              <h5>John Benjamin</h5>
            </div>
            <div className="customer1">
              <div className="img-container">
                <img src="/images/customer3.png" alt="customer" />
              </div>
              <p>I had a fantastic experience using your train service! The booking process was smooth,
                the ride was comfortable, and everything was on time. Thank you for making my journey
                so enjoyable!
              </p>
              <h5>Miriam Winnie</h5>
            </div>
          </div>
        </section>

      </div>


    </Wrapper>
  )
}

export default AboutUsPage