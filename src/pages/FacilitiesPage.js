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
                            <p>Our cosy, children's area is a delightful spot for little ones to play.
                                Having gentle swings for children. It's a peaceful nook for kids to have
                                fun while parents relax nearby. A perfect blend of playfulness and tranquility
                                for families.
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
                            <img className="" src="/images/gallery/gallery10.jpg" alt="play-ground" />
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

                    <hr className="rule my-3" />
                    <div className="my-3 py-3 fourth-f">
                        <div className="img-container">
                            <img className="" src="/images/gallery/gallery7.jpg" alt="play-ground" />
                        </div>
                        <div className="desc">
                            <h3 className="my-3">Play Ground</h3>
                            <p>
                                A bright, safe playground with natural grass. Our play ground runs daily
                                from morning till night. Children and parents can play all sort of outdooor
                                or indor games here . Parents can relax knowing
                                kids are happy and safe.
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
                            <p>We have a big, artificial-grass football pitch with lights for night games.
                                You can play with friends, family, or join other guests for fun matches.
                                We give free balls and cones. Great for kids, adults, or team events.
                            </p>
                        </div>
                    </div>

                    <hr className="rule my-3" />
                    <div className="my-3 py-3 sixth-f">
                        <div className="img-container">
                            <img className="" src="/images/gallery/gallery15.jpg" alt="play-ground" />
                        </div>
                        <div className="desc">
                            <h3 className="my-3">Trampoline</h3>
                            <p>
                                Bounce into fun on our resort's trampoline,a playful spot in our resort.
                                A delightful nook for guests of all ages to indulge in
                                lighthearted fun, adding a dash of playfulness to your luxurious retreat.
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
                            <p>
                                Outdoor barbecue area. Watch chefs grill meat, chicken, fish,
                                veggies, Pizza, and Shawarma right in front of you. Eat under the
                                stars with cool music. Open from morning till evening only—great for
                                groups
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
                            <p>
                                Open all day. Serves breakfast, lunch, and dinner. Enjoy fresh fish,
                                jollof rice, pepper soup, pasta, burgers, salads, desserts etc. Indoor
                                and outdoor seating with nice view. Kids’ menu available.
                            </p>
                        </div>
                    </div>

                    <hr className="rule my-3" />
                    <div className="my-3 py-3 fifth-f">
                        <div className="img-container">
                            <img className="" src="/images/gallery/gallery20.jpg" alt="play-ground" />
                        </div>
                        <div className="desc">
                            <h3 className="my-3">Lounge and Bar</h3>
                            <p>
                                A stylish, comfy spot to relax. Choose from cold beers, wines,
                                cocktails, fresh juices, or mocktails. Sit inside with AC or outside
                                with breeze and nice views. Open from 11 AM till late, monday to sunday.
                            </p>
                        </div>
                    </div>

                    <hr className="rule my-3" />
                    <div className="my-3 py-3 sixth-f">
                        <div className="img-container">
                            <img className="" src="/images/gallery/gallery22.jpg" alt="play-ground" />
                        </div>
                        <div className="desc">
                            <h3 className="my-3">Live Band Area</h3>
                            <p>
                                Enjoy live music, Local bands play
                                Afrobeat, highlife, jazz, and pop hits. Dance, sing along, or just
                                listen with a drink in hand. Free for all guests.
                                Family-friendly.
                            </p>
                        </div>
                    </div>


                </div>
            </section>

        </Wrapper >
    )
}

export default FacilitiesPage