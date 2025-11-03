import React from "react";
import styled from "styled-components";
import { Tablet } from "../Responsive";
// import { Link } from "react-router-dom";
// import ContactInfo from './../components/ContactInfo';
import Amenities from "../components/Amenities";
import ImageSlider from "../components/ImageSlider";
import { Link } from "react-router-dom";


const Wrapper = styled.div`
  min-height: 60vh;
  font-family: "Poppins", sans-serif;

  .home{
    min-height: 50vh;  
   }
  .facilities{
    background: rgba(107, 142, 7, 0.1);
  }
 .facilities h2{
    text-align: center;
    font-weight: 700;
    color: var(--primary-color)
  }
  .facilities h3{
    font-weight: 600;
    color: var(--primary-color)
  }
  .facilities .first-f, .facilities .third-f{
    display: grid;
    grid-template-columns: 90%;
    justify-content: center;
    gap: 40px;
    ${Tablet({ gridTemplateColumns: "45% 45%", gap: "40px", placeItems: "center" })}
  }
  .facilities .second-f{
    display: grid;
    grid-template-columns: 90%;
    justify-content: center;
    gap: 40px;
    ${Tablet({ gridTemplateColumns: "45% 45%", gap: "40px", placeItems: "center" })}
  }
.facilities .second-f div:first-child{
    ${Tablet({ order: "2" })}
}

  .facilities .img-container{
      width: 100%;
      hieght: 30vh;
  }
   .facilities .img-container img{
      width: 100%;
      hieght: 100%;
      object-fit: cover;
      border-radius: 20px;
  }
  .facilities .rule{
      color: var(--primary-font);   
      border: 2px solid rgba(107, 142, 7, 1);
  }
  .facilities .more-f{
      display: flex;
      justify-content: center;
  }
  .facilities .more-f a{
      background: var(--primary-color);
      color: white;
      font-weight: 600;
  }
.achievement-section{
    background: var(--primary-color);
    padding: 30px;
    color: white;
}
.achievement-section h2{
    text-align: center;
}
.achievement{  
    display: flex;
    flex-wrap: wrap;
    ${Tablet({ justifyContent: "space-around" })}
}
.achievement div{  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 45%;
    ${Tablet({ flex: "22%" })}
}


`;

function Home() {

  return (
    <>
      <Wrapper>
        <section className="home" id="home">
          <ImageSlider />
        </section>
        <section className="facilities container  py-4">
          <h2 className="my-4">Our Facilities</h2>
          <div className="our-facilites">
            <div className="my-3 py-3 first-f">
              <div className="img-container">
                <img className="" src="/images/hero1.jpg" alt="play-ground" />
              </div>
              <div className="desc">
                <h3 className="my-3">Children Area</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt auctor
                  accumsan. In varius volutpat enim, ac congue urna sagittis ut. Integer et odio eu
                  nisi auctor porttitor sed in purus. Vivamus semper mauris non aliquam aliquet.
                  Ut tellus nisi, mollis in pulvinar id, viverra et diam. Duis sagittis orci in elit
                </p>
              </div>
            </div>
            <hr className="rule my-3" />
            <div className="my-3 py-3 second-f">
              <div className="img-container">
                <img className="" src="/images/hero2.jpg" alt="play-ground" />
              </div>
              <div className="desc">
                <h3 className="my-3">Event Center</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt auctor
                  accumsan. In varius volutpat enim, ac congue urna sagittis ut. Integer et odio eu
                  nisi auctor porttitor sed in purus. Vivamus semper mauris non aliquam aliquet.
                  Ut tellus nisi, mollis in pulvinar id, viverra et diam. Duis sagittis orci in elit
                </p>
              </div>


            </div>
            <hr className="rule my-3" />
            <div className="my-3 py-3 third-f">
              <div className="img-container">
                <img className="" src="/images/hero3.jpg" alt="play-ground" />
              </div>
              <div className="desc">
                <h3 className="my-3">Kintik Beach</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt auctor
                  accumsan. In varius volutpat enim, ac congue urna sagittis ut. Integer et odio eu
                  nisi auctor porttitor sed in purus. Vivamus semper mauris non aliquam aliquet.
                  Ut tellus nisi, mollis in pulvinar id, viverra et diam. Duis sagittis orci in elit
                </p>
              </div>
            </div>
          </div>
          <div className="more-f">
            <Link to="/facilities" className="btn my-3">See More</Link>
          </div>
        </section>

        <section className="">
          <Amenities />
        </section>

        <section className="achievement-section">
          <h2 className="mb-4">Achievements</h2>
          <div className="achievement container">
            <div>
              <h3>100%</h3>
              <p>Customers satisfied</p>
            </div>
            <div>
              <h3>100%</h3>
              <p>Customers satisfied</p>
            </div>
            <div>
              <h3>100%</h3>
              <p>Customers satisfied</p>
            </div>
            <div>
              <h3>100%</h3>
              <p>Customers satisfied</p>
            </div>

          </div>
        </section>

      </Wrapper>

    </>

  );
}

export default Home;
