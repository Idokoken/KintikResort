import React from "react";
import styled from "styled-components";
// import { Tablet } from "../Responsive";
import { HashLink as Link } from "react-router-hash-link";

const Wrapper = styled.div`
  font-family: var(--primary-font);

  .navbar{
    background: white;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.20);
  }

  a:hover{
    color: rgba(219, 26, 165, 0.5);
    font-weight: 600;
   }
.navbar {
   background-color: var(--secondary-color) !important;
   box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);

}
.navbar a.nav-link{
   color: var(--primary-color) !important;
}

.navbar .navbar-brand {
    color: var(--primary-color);
    font-size: 24px;
    font-family: 'Lora';
    font-style: italic;
    font-weight: 700;
  }
  .navbar .navbar-brand div{
      display: flex;
      flex-direction: column;
   }

`;

function Header() {
  return (
    <Wrapper className="sticky-top">
      <nav className="navbar navbar-expand-sm navbar-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src="/images/brand.png" alt="Kintik Resort" width="30" height="30" className="d-inline-block align-text-top" />
            Kintik Resort
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/gallery">Gallery</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact-us">Contact Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/facilities">Facilities</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact-us">Reservation</Link>
              </li>
            </ul>


          </div>
        </div>
      </nav>

    </Wrapper>
  );
}

export default Header;
