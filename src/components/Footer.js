import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Tablet } from "../Responsive";

const Wrapper = styled.div`
  font-family: var(--primary-font);
  margin: 0;
  padding: 30px 0;
  background-color: black;
  color: white;

}
a:hover{
    color: rgba(219, 26, 165, 0.5);
    font-weight: 600;
 }
.content{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    ${Tablet({ flexDirection: "row" })}
}
.item{
    flex: 100%;
    ${Tablet({ flex: "22%" })}
}
.item h4{

}
.footerItem{
  margin: 20px 0;
}
.footerItem a{
   text-decoration: none;
   color: rgba(255, 255, 255, 0.7);

}
.contact div{
    display: flex;
    align-items: center;
    margin-bottom: 20px;
}
.contact span{
   color: rgba(255, 255, 255, 0.7);
   margin-left: 15px;
   font-size: 16px;
}
.contact .address-icon{
    height: 20px;
    width: 20px;
    color: white;
}
.item-brand{
      margin-right: 20px;
      ${Tablet({ marginTop: "20px" })}
 }
.footerlogo{
    display: flex;
}
.footerIcons{
    display: flex;
    align-items: center;
}
.rule{
    border: 2px solid white;
}
.copyWright {
    display: flex;
    justify-content: center;
    align-items: center;
  }
.copyWright p{
    margin: 0;
}
.icon{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    border-radius: 50%;
    padding: 2px;
    width: 35px;
    height: 35px;
    color: var(--primary-color);
    background: white;
}
.footerIcons, h5{
    margin: 20px;
}

.brand{
    height: 20px;
    width: 20px;
}

`;

function Footer() {
  return (
    <Wrapper>
      <div className="content mx-3">
        <div className="item">
          <div className="footerlogo">
            <Link href="/">
              <img
                src="/images/brand.png"
                alt="brand"
                height="40"
                width="40"
              />
            </Link>
            <h3 className="ms-2">Kintik Resort</h3>
          </div>
          <div className="contact">
            <h5>Our Address</h5>
            <div className="mb-2"><i className="fa-solid fa-location-dot address-icon"></i>
              <span>No. 10 Howedy Street, Maitama, Abuja, Nigeria</span>
            </div>
            <div className="mb-2"><i className="fa-solid fa-phone address-icon"></i>
              <span>+2347066890098</span>
            </div>
            <div className="mb-2"><i className="fa-solid fa-envelope-circle-check address-icon"></i>
              <span>Info@kintikresort.com</span>
            </div>
          </div>
          <h5>Follow Kintik Resort on</h5>
          <div className="footerIcons">
            <div className="icon"><i className="fa-brands fa-facebook brand"></i></div>
            <div className="icon"><i className="fa-brands fa-x-twitter brand"></i></div>
            <div className="icon"><i className="fa-brands fa-instagram brand"></i></div>
            <div className="icon"><i className="fa-brands fa-youtube brand"></i></div>
          </div>

        </div>
        <div className="item">
          <h4>Company</h4>
          <div className="footerItem"><Link to="/">Home</Link></div>
          <div className="footerItem"><Link to="/about-us">About Us</Link></div>
          <div className="footerItem"><Link to="/contact-us">Contact Us</Link></div>
          <div className="footerItem"><Link to="/gallery">Gallery</Link></div>
          <div className="footerItem"><Link to="/rooms/all">Rooms</Link></div>
        </div>
        <div className="item">
          <h4>Services</h4>
          <div className="footerItem"><Link to="/contact-us">Room Bookings</Link></div>
          <div className="footerItem"><Link to="/contact-us">Event Reservations</Link></div>
          <div className="footerItem"><Link to="/contact-us">Restaurant</Link></div>
          <div className="footerItem"><Link to="/contact-us">Facilities</Link></div>
          <div className="footerItem"><Link to="/contact-us">Dining</Link></div>
        </div>
        <div className="item">
          <h4>Resources</h4>
          <div className="footerItem"><Link to="/terms">Terms of Service</Link></div>
          <div className="footerItem"><Link to="/privacy">Privacy Policy</Link></div>
        </div>
      </div>
      <hr className="rule" />
      <div className="copyWright">
        <p className="">Kintik &copy;
          <span>{new Date().getFullYear()}</span>, All Right Reserved to Kintik Resort
        </p>
      </div>
    </Wrapper>
  );
}

export default Footer;
