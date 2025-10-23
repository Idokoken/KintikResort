import React from "react";
import styled from "styled-components";
import { Tablet } from "../Responsive";
// import { Link } from "react-router-dom";
// import ContactInfo from './../components/ContactInfo';
import Amenities from "./Amenities";
import ImageSlider from "../components/ImageSlider";


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
  .facilities .first-f{
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
    ${Tablet({
  gridTemplateColumns: "45% 45%", gap: "40px", placeItems: "center",
  gridAutoFlow: "row-reverse"
})}
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
  .rule{
      color: var(--primary-font);   
      border: 2px solid rgba(107, 142, 7, 1);
  }
`;

function Home() {

  return (
    <>
      <Wrapper>
        <section className="home" id="home">
          <ImageSlider />
        </section>
        <section className="facilities container my-4 py-4">
          <h2 className="my-4">Our Facilities</h2>
          <div className="our-facilites">
            <div className="my-3 py-3 first-f">
              <div className="img-container">
                <img className="" src="/images/hero.jpg" alt="play-ground" />
              </div>
              <div className="desc">
                <h3>Children Play Ground</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt auctor
                  accumsan. In varius volutpat enim, ac congue urna sagittis ut. Integer et odio eu
                  nisi auctor porttitor sed in purus. Vivamus semper mauris non aliquam aliquet.
                  Ut tellus nisi, mollis in pulvinar id, viverra et diam. Duis sagittis orci in elit
                  posuere eleifend. Sed mattis sem at mi blandit, ut consequat ligula venenatis.
                  Vestibulum sed risus semper sapien pharetra pretium. Suspendisse non tincidunt

                </p>
              </div>
            </div>
            <hr className="rule my-3" />
            <div className="my-3 py-3 second-f">
              <div className="img-container">
                <img className="" src="/images/hero.jpg" alt="play-ground" />
              </div>
              <div className="desc">
                <h3>Children Play Ground</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt auctor
                  accumsan. In varius volutpat enim, ac congue urna sagittis ut. Integer et odio eu
                  nisi auctor porttitor sed in purus. Vivamus semper mauris non aliquam aliquet.
                  Ut tellus nisi, mollis in pulvinar id, viverra et diam. Duis sagittis orci in elit
                  posuere eleifend. Sed mattis sem at mi blandit, ut consequat ligula venenatis.
                  Vestibulum sed risus semper sapien pharetra pretium. Suspendisse non tincidunt

                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="amenities">
          <Amenities />
        </section>

      </Wrapper>

    </>

  );
}

export default Home;
