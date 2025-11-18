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
.achievement-section h3{
    font-weight: 700;
    margin-bottom: 16px;
}
.achievement{  
    display: flex;
    flex-wrap: wrap;
    ${Tablet({ justifyContent: "space-around" })}
}
.achievement div{  
    flex: 45%;
    display: flex;
    flex-direction: column;
    align-items: center;
    ${Tablet({ flex: "22%" })}
}
.achievement div p{
    text-align: center;
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
                <p>
                  Our cosy, children's area is a delightful spot for little ones to play.
                  Having gentle swings for children. It's a peaceful nook for kids to have
                  fun while parents relax nearby. A perfect blend of playfulness and tranquility
                  for families.
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
                <p>
                  Our large, cool event hall fits up to 500 people. Perfect for weddings,
                  birthdays, meetings, or parties. It has strong AC, big screens,and clear
                  sound system. We help plan everything—food,
                  decor, music, and more.
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
                <p>
                  Our soft, golden sand beach is just for our guests. You get free sunbeds,
                  big umbrellas, and a beach helper to bring you drinks or towels. Swim
                  in clear blue water, or relax with sunset yoga. The beach is clean,
                  safe, and open from morning till night.
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
          {/* <h2 className="mb-4">Achievements</h2> */}
          <div className="achievement container">
            <div>
              <h3>20+</h3>
              <p>Fun Areas</p>
            </div>
            <div>
              <h3>50+</h3>
              <p>Staff</p>
            </div>
            <div>
              <h3>Over 5+</h3>
              <p>Different Restaurants</p>
            </div>
            <div>
              <h3>Over 5+</h3>
              <p>Different Lounge & Bars</p>
            </div>


          </div>
        </section>

      </Wrapper>

    </>

  );
}

export default Home;
