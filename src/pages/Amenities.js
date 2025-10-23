import React from 'react'
import "./Amenities.css";
// import styled from "styled-components";
import { Link } from 'react-router-dom';
// import { Tablet } from "../Responsive";

// const Wrapper = styled.div`
//   font-family: var(--primary-font);

// .rooms-section{
//      display: flex;
//      justify-content: center;
//      flex-direction: column;
//      align-items: center;
//      padding: 20px;
//   }
// .rooms-section h3{
//      font-weight: 700;
//  }
// .rooms-section .rooms{
//        display: grid;
//        grid-template-columns: 100%;
//        justify-content: center;
//        gap: 20px;
//        margin: 30px 0;
//   }
// .rooms-section .rooms .other-rooms{
//        display: grid;
//        grid-template-columns: 100%;
//        gap: 20px;
//        justify-content: center;
//   }
// .rooms-section .rooms .main-room{
//        position: relative;
//        height: 40vh;
//    }
// .rooms-section .rooms .other-rooms .room{
//         position: relative;
//         height: 40vh;
//   }.rooms-section .rooms .main-room:focus{
//       color: none;
// }.rooms-section .rooms .other-rooms .room:focus{
//       color: none;
// }
// .rooms-section .rooms .main-room img{
//       height: 100%;
//       width: 100%;
//       object-fit: cover;
//   }
// .rooms-section .rooms .other-rooms .room img{
//           height: 100%;
//           width: 100%;
//           object-fit: cover;
//     }
// .rooms-section .rooms .main-room p{
//     position: absolute;
//     align-item: center;
//     bottom: 15px;
//     left: 20px;
//     color: white;
//     margin-right: 10px;
//   }
// .rooms-section .rooms .other-rooms .room p{
//     position: absolute;
//     align-item: center;
//     bottom: 15px;
//     left: 20px;
//     color: white;
//     margin-right: 10px;
//  }
// .rooms-section .more-rooms{
//      font-weight: 700;
//      color: white;
//      background: var(--primary-color);
//      margin: 10px;
//      padding: 10px 20px;
//      border-radius: 5px;
//  }.amenities-section{
//      display: flex;
//      flex-direction: column;
//      align-items: center;
// }.amenities-section h3{
//      text-align: center;
//      font-weight: bold;
// }.amenities-section .amenities{
//      display: grid;
//      grid-template-columns: 45% 45%;
//      justify-content: space-between;
//      margin-top: 30px;
// }.amenities-section .amenities div{
//      display: flex;
//      flex-direction: column;
//      align-items: center;
// }.amenities-section .amenities div{
//      display: flex;
//      flex-direction: column;
//      align-items: center;
// }.amenities-section .amenities div span{
//     color: var(--primary-color);
// }.amenities-section .amenities div span .icon{
//     font-size: 35px;
//     margin-bottom: 10px;
// }

// `

function Amenities() {
    return (
        <div className='wrapper'>

            <section className="rooms-section">
                <h3>Gallery</h3>
                <div className="rooms">
                    <Link to="" className="main-room">
                        <img src="/images/rooms/room1.jpg" alt="room" />
                        <p>Two Bedroom Presidential Suite</p>
                    </Link>
                    <div className="other-rooms">
                        <Link to="" className="room">
                            <img src="/images/rooms/room2.jpg" alt="room" />
                            <p>Two Bedroom Presidential Suite</p>
                        </Link>
                        <Link to="" className="room">
                            <img src="/images/rooms/room3.jpg" alt="room" />
                            <p>Two Bedroom Presidential Suite</p>
                        </Link>
                        <Link to="" className="room">
                            <img src="/images/rooms/room4.jpg" alt="room" />
                            <p>Two Bedroom Presidential Suite</p>
                        </Link>
                        <Link to="" className="room">
                            <img src="/images/rooms/room5.jpg" alt="room" />
                            <p>Two Bedroom Presidential Suite</p>
                        </Link>
                    </div>
                </div>
                <Link to="/rooms/all" className="more-rooms">
                    View All
                    <span className="ms-2"><i className="fa-solid fa-arrow-right"></i></span></Link>
            </section>


            <section className="amenities-section my-3">
                <h3>Amenities</h3>
                <div className="amenities container">
                    <div className="">
                        <span><i className="fa-solid fa-spa icon"></i></span>
                        <p>Spa</p>
                    </div>
                    <div className="">
                        <span><i className="fa-solid fa-person-swimming icon"></i></span>
                        <p>Pool</p>
                    </div>
                    <div className="">
                        <span><i className="fa-solid fa-wifi icon"></i></span>
                        <p>Wifi</p>
                    </div>
                    <div className="">
                        <span><i className="fa-solid fa-dumbbell icon"></i></span>
                        <p>Fitness Center</p>
                    </div>
                    <div className="">
                        <span><i className="fa-solid fa-shirt icon"></i></span>
                        <p>Laundry</p>
                    </div>
                    <div className="">
                        <span><i className="fa-solid fa-square-parking icon"></i></span>
                        <p>Free Parking</p>
                    </div>
                    <div className="">
                        <span><i className="fa-solid fa-bell-concierge icon"></i></span>
                        <p>Concierge</p>
                    </div>
                    <div className="">
                        <span><i className="fa-solid fa-utensils icon"></i></span>
                        <p>Restaurant On-Site</p>
                    </div>
                    <div className="">
                        <span><i className="fa-solid fa-handshake icon"></i></span>
                        <p>Meeting Facilities</p>
                    </div>
                </div>
            </section>


        </ div>
    )
}

export default Amenities