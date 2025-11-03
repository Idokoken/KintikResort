import React from 'react'
import styled from 'styled-components'
import { Tablet } from "../Responsive";


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
    .title{
        font-weight: 700;
        text-align: center;
        
    }
     h3{
        color: var(--primary-color);
        font-weight: 700;
    }

    .gallery-section {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 20px;
}

.gallery-section h3 {
    font-weight: 700;
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
    ${Tablet({ height: "80vh" })}
}

.gallery-section .galleries .other-galleries .gallery {
    position: relative;
    height: 40vh;
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
}
      
`

function GalleryPage() {
  return (
    <Wrapper>
      <div className="head">
        <div className='head-bg'></div>
        <h1 className="text-bold">Gallery</h1>
      </div>
      <div className='mt-3 mx-3'>
        <h3 className='title '>Explore Kintik Resort Awesome Environment</h3>
      </div>
      <section className="gallery-section">
        <div className="galleries first-section">
          <div className="main-gallery">
            <img src="/images/gallery/gallery8.jpg" alt="gallery" />
          </div>
          <div className="other-galleries">
            <div className="gallery">
              <img src="/images/gallery/gallery7.jpg" alt="gallery" />
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

        <div className="galleries second-section">
          <div className="other-galleries">
            <div className="gallery">
              <img src="/images/gallery/gallery14.jpg" alt="gallery" />
            </div>
            <div className="gallery">
              <img src="/images/gallery/gallery16.jpg" alt="gallery" />
            </div>
            <div className="gallery">
              <img src="/images/gallery/gallery11.jpg" alt="gallery" />
            </div>
            <div className="gallery">
              <img src="/images/gallery/gallery12.jpg" alt="gallery" />
            </div>
          </div>
          <div className="main-gallery">
            <img src="/images/gallery/gallery18.jpg" alt="gallery" />
          </div>
        </div>

        <div className="galleries third-section">
          <div className="main-gallery">
            <img src="/images/gallery/gallery9.jpg" alt="gallery" />
          </div>
          <div className="other-galleries">
            <div className="gallery">
              <img src="/images/gallery/gallery13.jpg" alt="gallery" />
            </div>
            <div className="gallery">
              <img src="/images/gallery/gallery1.jpg" alt="gallery" />
            </div>
            <div className="gallery">
              <img src="/images/gallery/gallery21.jpg" alt="gallery" />
            </div>
            <div className="gallery">
              <img src="/images/gallery/gallery17.jpg" alt="gallery" />
            </div>
          </div>
        </div>

      </section>
    </Wrapper>
  )
}

export default GalleryPage