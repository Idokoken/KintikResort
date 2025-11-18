import React from 'react'
import styled from 'styled-components'

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
  h3{
	    font-weight: 700;
	}
  p{
	    font-size: 18px;
		line-height: 1.8;
	}
  li{
	    font-size: 18px;
	}
      
`

const PrivacyPolicy = () => {
  return (
    <Wrapper>
      <div className="head">
        <div className='head-bg'></div>
        <h1 className="text-bold">Privacy Policy</h1>
      </div>

      <div className='container'>

        <h3 className='mb-3'>Last updated: November 6, 2025</h3>

        <h3><strong>Introduction</strong></h3>
        <p>Welcome to the Kintik Resort website (www.kintikresort.com.ng). Kintik Resort ("we," "us," or
          "our") is
          committed to protecting your privacy and ensuring that your personal information is handled
          in a safe and responsible manner. This Privacy Policy explains how we collect, use, disclose,
          and safeguard your information when you visit our Site, make reservations, or interact with
          our services. By using the Site, you consent to the practices described in this policy
        </p>
        <p>
          This policy applies only to information collected through the Site and does not apply to
          information collected offline or through other means. We comply with applicable data
          protection laws, including but not limited to the Nigeria's Data Protection Act (NDPA).
        </p>

        <p>If you do not agree with this policy, please do not use the Site.
        </p>
        <h3> Information We Collect</h3>
        <p>We collect information to provide and improve our services, such as dinner reservation
          and events at our resort. The types of information we may collect include:
        </p>
        <ul>
          <li><strong>Personal Information</strong>: Name, email address, phone number, address, location
            etc.
          </li>
          <li>
            <strong>Reservations</strong>: Reservation dates, special requests
            (e.g., dietary needs) etc.
          </li>
          <li>
            <strong>Communication Data</strong>: Information from emails, inquiries, or support tickets
            you submit.
          </li>

        </ul>
        <p>We collect this information when you:</p>
        <ul>
          <li>Make a reservation or purchase services.
          </li>
          <li>Fill out contact forms or surveys</li>
        </ul>
        <p>We do not collect sensitive information (e.g., health data) unless voluntarily provided for
          specific services like dinner reservation, and even then, it is handled with extra
          care.
        </p>

        <h3>How We Use Your Information

        </h3>
        <p>We use your information to:</p>
        <ul>
          <li>Document your reservations.</li>
          <li>Provide personalized services, such as tailored recommendations for activities or dining.</li>
          <li>Improve the Site and our services through analytics and feedback.</li>
          <li> Communicate with you about our services.</li>
          <li>Comply with legal obligations, such as health and safety reporting or fraud prevention.</li>
          <li> Enhance security and prevent unauthorized access.</li>
        </ul>
        <h3>How We Share Your Information</h3>
        <p>We do not sell your personal information. We may share it with:
        </p>
        <ul>
          <li>
            <strong>Legal and Regulatory Bodies</strong>: If required by law, such as for tax reporting,
            subpoenas, or to protect our rights, safety, or property.
          </li>
          <li>
            <strong>In Case of Business Transfer</strong>: If Kintik Resort is involved in a merger,
            acquisition, or sale of assets, your information may be transferred as part of that
            transaction.
          </li>
        </ul>

        <p>
          We ensure all sharing complies with data protection laws
        </p>
        <h3>Data Security</h3>
        <p>We implement reasonable administrative, technical, and physical safeguards to protect your
          information, including SSL encryption for data transmission, secure servers, and access
          controls. However, no method of transmission over the internet is 100% secure, so we cannot
          guarantee absolute security.
        </p>
        <h3>Changes to this Policy</h3>
        <p>
          We may update this policy to reflect changes in our practices or laws. We will notify you
          via email or a Site notice for material changes. Continued use of the Site after updates
          constitutes acceptance.
        </p>
        <p>We may update this privacy policy from time to time to reflect changes in our practices
          or legal requirements. We will notify you of any material changes by posting the updated
          policy on our Platform and updating the effective date. Your continued use of the Platform
          after any changes to this policy constitutes your acceptance of the updated policy.
        </p>

        <h3><strong>Contact Us</strong></h3>

        <p>If you have any questions or concerns about this privacy policy or our data practices,
          please contact us at:</p>

        <p><strong>Email</strong>: info@kintikresort.com.ng</p>
        <p><strong>Address</strong>: Olajide Laleye Street, Jahi, Abuja Nigeria</p>
        <p><strong>Phone</strong>: +2348135865868</p>

        <p>Thank you for trusting Kintik Resort with your personal information. We are committed to
          protecting your privacy and providing a secure experience on our Platform.</p>

      </div>

    </Wrapper>
  )
}

export default PrivacyPolicy