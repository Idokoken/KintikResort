import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Tablet } from "../Responsive";

const Wrapper = styled.div`
  font-family: var(--primary-font);


.gallery-section {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

.gallery-section h3 {
    font-weight: 700;
    color: var(--primary-color);
}

.gallery-section .galleries {
    display: grid;
    grid-template-columns: 100%;
    justify-content: center;
    gap: 20px;
    margin: 30px 0;
    ${Tablet({ gridTemplateColumns: "45% 45%" })}
}

.gallery-section .galleries .other-galleries {
    display: grid;
    grid-template-columns: 100%;
    gap: 20px;
    justify-content: center;
    ${Tablet({ gridTemplateColumns: "45% 45%" })}
}

.gallery-section .galleries .main-gallery {
    position: relative;
    height: 40vh;
    box-shadow: -4px -4px 1px 1px rgba(243, 243, 4, 0.5), 4px 4px 1px 1px rgba(243, 243, 4, 0.5);
    ${Tablet({ height: "80vh" })}
}

.gallery-section .galleries .other-galleries .gallery {
    position: relative;
    height: 40vh;
    box-shadow: -4px -4px 1px 1px rgba(243, 243, 4, 0.5), 4px 4px 1px 1px rgba(243, 243, 4, 0.5);
    ${Tablet({ height: "38vh" })}
}

.gallery-section .galleries .main-gallery:focus {
    color: none;
}

.gallery-section .galleries .other-galleries .gallery:focus {
    color: none;
}

.gallery-section .galleries .main-gallery img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.gallery-section .galleries .other-galleries .gallery img {
    height: 100%;
    width: 100%;
    object-fit: cover;
}

.gallery-section .galleries .main-gallery p {
    position: absolute;
    align-items: center;
    bottom: 15px;
    left: 20px;
    color: white;
    margin-right: 10px;
}

.gallery-section .galleries .other-galleries .gallery p {
    position: absolute;
    align-items: center;
    bottom: 15px;
    left: 20px;
    color: white;
    margin-right: 10px;
}

.gallery-section .more-galleries {
    font-weight: 700;
    color: white;
    background: var(--primary-color);
    margin: 10px;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
}

.amenities-section {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.amenities-section h3 {
    text-align: center;
    font-weight: bold;
    color: var(--primary-color);
}

.amenities-section .amenities {
    display: grid;
    grid-template-columns: 45% 45%;
    justify-content: space-between;
    margin-top: 30px;
    ${Tablet({
    display: "grid",
    gridTemplateColumns: "30% 30% 30%"
})}
}

.amenities-section .amenities div {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.amenities-section .amenities div {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.amenities-section .amenities div span {
    color: var(--primary-color);
}

.amenities-section .amenities div span .amenity-icon {
    font-size: 35px;
    margin-bottom: 10px;
    ${Tablet({
    fontSize: "40px",
    marginBottom: "20px"
})}
}


`

function Amenities() {
    return (
        <Wrapper className='wrapper'>

            <section className="gallery-section">
                <h3>Gallery</h3>
                <div className="galleries">
                    <div className="main-gallery">
                        <img src="/images/gallery/gallery8.jpg" alt="gallery" />

                    </div>
                    <div className="other-galleries">
                        <div className="gallery">
                            <img src="/images/gallery/gallery2.jpg" alt="gallery" />

                        </div>
                        <div className="gallery">
                            <img src="/images/gallery/gallery3.jpg" alt="gallery" />

                        </div>
                        <div className="gallery">
                            <img src="/images/gallery/gallery4.jpg" alt="gallery" />

                        </div>
                        <div className="gallery">
                            <img src="/images/gallery/gallery5.jpg" alt="gallery" />

                        </div>
                    </div>
                </div>
                <Link to="/gallery" className="more-galleries">
                    View All
                    <span className="ms-2"><i className="fa-solid fa-arrow-right"></i></span>
                </Link>
            </section>


            <section className="amenities-section my-3">
                <h3>Amenities</h3>
                <div className="amenities container">
                    <div className="">
                        <span><i className="fa-solid fa-children amenity-icon"></i></span>
                        <p>Children Area</p>
                    </div>
                    <div className="">
                        <span><i className="fa-solid fa-person-swimming amenity-icon"></i></span>
                        <p>Beach</p>
                    </div>
                    <div className="">
                        <span><i className="fa-solid fa-calendar amenity-icon"></i></span>
                        <p>Event Center</p>
                    </div>
                    <div className="">
                        <span><i className="fa-solid fa-futbol amenity-icon"></i></span>
                        <p>Football Pitch</p>
                    </div>
                    <div className="">
                        <span><i className="fa-solid fa-shirt amenity-icon"></i></span>
                        <p>Trampoline</p>
                    </div>
                    <div className="">
                        <span><i className="fa-solid fa-square-parking amenity-icon"></i></span>
                        <p>Free Parking</p>
                    </div>
                    <div className="">
                        <span><i className="fa-solid fa-bell-concierge amenity-icon"></i></span>
                        <p>Concierge</p>
                    </div>
                    <div className="">
                        <span><i className="fa-solid fa-utensils amenity-icon"></i></span>
                        <p>Restaurant On-Site</p>
                    </div>
                    <div className="">
                        <span><i className="fa-solid fa-handshake amenity-icon"></i></span>
                        <p>Meeting Facilities</p>
                    </div>

                </div>
            </section>


        </ Wrapper>
    )
}

export default Amenities