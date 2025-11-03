import React from 'react'
import styled from 'styled-components'
import { Tablet } from "../Responsive";
// import { Link } from "react-router-dom";


const Wrapper = styled.div`
      margin: 0;
      padding: 0;
      font-family: var(--primary-font);
      min-height: 50vh;

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
      .facilities .first-f, .facilities .third-f, .facilities .fifth-f{
        display: grid;
        grid-template-columns: 90%;
        justify-content: center;
        gap: 40px;
        ${Tablet({ gridTemplateColumns: "45% 45%", gap: "40px", placeItems: "center" })}
      }
      .facilities .second-f, .facilities .fourth-f, .facilities .sixth-f {
        display: grid;
        grid-template-columns: 90%;
        justify-content: center;
        gap: 40px;
        ${Tablet({ gridTemplateColumns: "45% 45%", gap: "40px", placeItems: "center" })}
      }
      .facilities .second-f div:first-child, .facilities .fourth-f div:first-child, .facilities .sixth-f div:first-child{
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
      
`

function FacilitiesPage() {
    return (
        <Wrapper>
            <div className="head">
                <div className='head-bg'></div>
                <h1 className="text-bold">Facilities</h1>
            </div>

            <section className="facilities container  py-4">
                <h2 className="my-4">Explore Our Vast Array of Facilities</h2>
                <div className="our-facilites">
                    <div className="my-3 py-3 first-f">
                        <div className="img-container">
                            <img className="" src="/images/gallery/gallery9.jpg" alt="play-ground" />
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
                            <img className="" src="/images/gallery/gallery12.jpg" alt="play-ground" />
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
                            <img className="" src="/images/gallery/gallery10.jpg" alt="play-ground" />
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

                    <hr className="rule my-3" />
                    <div className="my-3 py-3 fourth-f">
                        <div className="img-container">
                            <img className="" src="/images/gallery/gallery7.jpg" alt="play-ground" />
                        </div>
                        <div className="desc">
                            <h3 className="my-3">Play Ground</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt auctor
                                accumsan. In varius volutpat enim, ac congue urna sagittis ut. Integer et odio eu
                                nisi auctor porttitor sed in purus. Vivamus semper mauris non aliquam aliquet.
                                Ut tellus nisi, mollis in pulvinar id, viverra et diam. Duis sagittis orci in elit
                            </p>
                        </div>
                    </div>

                    <hr className="rule my-3" />
                    <div className="my-3 py-3 fifth-f">
                        <div className="img-container">
                            <img className="" src="/images/gallery/gallery5.jpg" alt="play-ground" />
                        </div>
                        <div className="desc">
                            <h3 className="my-3">Football Pitch</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt auctor
                                accumsan. In varius volutpat enim, ac congue urna sagittis ut. Integer et odio eu
                                nisi auctor porttitor sed in purus. Vivamus semper mauris non aliquam aliquet.
                                Ut tellus nisi, mollis in pulvinar id, viverra et diam. Duis sagittis orci in elit
                            </p>
                        </div>
                    </div>

                    <hr className="rule my-3" />
                    <div className="my-3 py-3 sixth-f">
                        <div className="img-container">
                            <img className="" src="/images/gallery/gallery21.jpg" alt="play-ground" />
                        </div>
                        <div className="desc">
                            <h3 className="my-3">Trampoline(Daddio Jump)</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt auctor
                                accumsan. In varius volutpat enim, ac congue urna sagittis ut. Integer et odio eu
                                nisi auctor porttitor sed in purus. Vivamus semper mauris non aliquam aliquet.
                                Ut tellus nisi, mollis in pulvinar id, viverra et diam. Duis sagittis orci in elit
                            </p>
                        </div>
                    </div>

                    <hr className="rule my-3" />
                    <div className="my-3 py-3 fifth-f">
                        <div className="img-container">
                            <img className="" src="/images/gallery/gallery2.jpg" alt="play-ground" />
                        </div>
                        <div className="desc">
                            <h3 className="my-3">Kintik Grills(Suya, Shawarma, Pizza etc)</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt auctor
                                accumsan. In varius volutpat enim, ac congue urna sagittis ut. Integer et odio eu
                                nisi auctor porttitor sed in purus. Vivamus semper mauris non aliquam aliquet.
                                Ut tellus nisi, mollis in pulvinar id, viverra et diam. Duis sagittis orci in elit
                            </p>
                        </div>
                    </div>

                    <hr className="rule my-3" />
                    <div className="my-3 py-3 sixth-f">
                        <div className="img-container">
                            <img className="" src="/images/gallery/gallery3.jpg" alt="play-ground" />
                        </div>
                        <div className="desc">
                            <h3 className="my-3">Kintik Restaurant</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt auctor
                                accumsan. In varius volutpat enim, ac congue urna sagittis ut. Integer et odio eu
                                nisi auctor porttitor sed in purus. Vivamus semper mauris non aliquam aliquet.
                                Ut tellus nisi, mollis in pulvinar id, viverra et diam. Duis sagittis orci in elit
                            </p>
                        </div>
                    </div>

                    <hr className="rule my-3" />
                    <div className="my-3 py-3 fifth-f">
                        <div className="img-container">
                            <img className="" src="/images/gallery/gallery20.jpg" alt="play-ground" />
                        </div>
                        <div className="desc">
                            <h3 className="my-3">lounge and Bar</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt auctor
                                accumsan. In varius volutpat enim, ac congue urna sagittis ut. Integer et odio eu
                                nisi auctor porttitor sed in purus. Vivamus semper mauris non aliquam aliquet.
                                Ut tellus nisi, mollis in pulvinar id, viverra et diam. Duis sagittis orci in elit
                            </p>
                        </div>
                    </div>

                    <hr className="rule my-3" />
                    <div className="my-3 py-3 sixth-f">
                        <div className="img-container">
                            <img className="" src="/images/gallery/gallery21.jpg" alt="play-ground" />
                        </div>
                        <div className="desc">
                            <h3 className="my-3">Live Band Area</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt auctor
                                accumsan. In varius volutpat enim, ac congue urna sagittis ut. Integer et odio eu
                                nisi auctor porttitor sed in purus. Vivamus semper mauris non aliquam aliquet.
                                Ut tellus nisi, mollis in pulvinar id, viverra et diam. Duis sagittis orci in elit
                            </p>
                        </div>
                    </div>


                </div>
            </section>

        </Wrapper>
    )
}

export default FacilitiesPage