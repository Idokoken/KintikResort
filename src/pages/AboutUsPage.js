import React from 'react'
import styled from 'styled-components'
// import "./about.css"
import { Tablet } from "../Responsive";


const Wrapper = styled.div`
      margin: 0;
      padding: 0;
      font-family: var(--primary-font);
      min-height: center;

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
p{
	    font-size: 18px;
		line-height: 1.8;
	}
      
`

function AboutUsPage() {


  return (
    <Wrapper>
      <div className="head">
        <div className='head-bg'></div>
        <h1 className="text-bold">About Us</h1>
      </div>

      <div className="about-content container mb-3">

        <section className="mission p-3">
          <h3 className='title'>Introduction</h3>
          <p>Welcome to Kintik Resort, your perfect getaway for relaxation, comfort, and unforgettable
            moments. Nestled in a serene and beautifully designed environment, our resort offers a
            peaceful retreat away from the noise of everyday life.
          </p>
          <p>
            We bring you the full resort experience through
            elegant architecture, lush gardens, a crystal-clear pool, and an atmosphere designed for
            your ultimate comfort and joy. Whether you’re here for a romantic escape, family vacation,
            corporate retreat, or weekend recharge, Kintik Resort is the ideal destination to unwind,
            connect, and create lasting memories.
          </p>
          <p>At Kintik Resort, every detail from our warm hospitality to our exceptional amenities
            is crafted to make your stay as relaxing and memorable as possible.
          </p>
          <h3>Mission</h3>
          <p>
            To provide guests with an exceptional resort experience that blends comfort, style, and
            personalized hospitality offering relaxation and recreation in a peaceful, beach-like
            atmosphere without needing the ocean.
          </p>
          <h3>Vision</h3>
          <p className="mb-0">
            To be recognized as the leading resort destination for authentic relaxation and exceptional
            service a place where guests return to recharge, reconnect, and rediscover the beauty of
            unwinding
          </p>
        </section>

        {/* <section className="review">
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
        </section> */}

      </div>


    </Wrapper>
  )
}

export default AboutUsPage