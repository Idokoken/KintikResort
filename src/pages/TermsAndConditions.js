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

const TermsAndConditions = () => {
	return (
		<Wrapper>
			<div className="head">
				<div className='head-bg'></div>
				<h1 className="text-bold">Terms and Conditions</h1>
			</div>

			<div className=' container'>
				<h3>Last Updated: November 6, 2025</h3>

				<p>
					Welcome to the Kintik Resort website (www.kintikresort.com.ng). These Terms of Service ("Terms")
					govern your access to and use of the Site, as well as reservations,
					or services provided by Kintik Resort ("we," "us," or "our"), located in Abuja,
					Nigeria. By accessing the Site, making a reservation, or using our services, you
					agree to be bound by these Terms. If you do not agree, please do not use the Site
					or our services.These Terms apply to all visitors, users, and guests. We may update
					these Terms at any time; continued use after changes constitutes acceptance.
					Material changes will be notified via email.
				</p>

				<h3>Use of the Site</h3>
				<p><strong>Permitted Use</strong>: You may use the Site to view information, make legitimate reservations,
					and interact with our services. Prohibited activities include:
				</p>
				<ul>
					<li>Unauthorized scraping, hacking, or interfering with the Site.</li>
					<li>Submitting false information or impersonating others.</li>
					<li>Using the Site for commercial purposes without our consent.</li>
					<li>Violating any applicable laws (e.g., Nigeria's Cybercrimes Act).</li>
				</ul>
				<h3>Guest Conduct and Resort Rules</h3>
				<p>During your visit, you agree to:</p>
				<ul>
					<li>Comply with all resort policies (e.g., no smoking in children area of the Resort).</li>
					<li>Respect staff, other guests, and property. Damages will be charged to your account.</li>
					<li>Not bring prohibited items (e.g., pets unless service animals, weapons, illegal substances).</li>
					<li>Follow health and safety protocols (e.g., beach rules).</li>
					<li>We reserve the right to remove guests for violations without refund.</li>
				</ul>
				<h3> Intellectual Property</h3>
				<p>The Site, including text, images, logos, and branding, is owned by Kintik Resort or
					licensed to us. You may not copy, modify, distribute, or create derivative works
					without written permission. User-generated content (e.g., reviews) grants us a
					royalty-free license to use for marketing.
				</p>
				<h3> Limitations of Liability</h3>
				<ul>
					<li><strong>Services "As Is"</strong>: The Site and services are provided without warranties. We do not
						guarantee error-free operation or uninterrupted access.
					</li>
					<li>
						<strong>Liability Cap</strong>: To the fullest extent permitted by law, our liability is limited to the
						amount you paid for the booking in question. We are not liable for indirect, incidental,
						or consequential damages (e.g., lost profits, emotional distress).
					</li>
					<li>
						<strong>Force Majeure</strong>: We are not responsible for failures due to events beyond our control
						(e.g., natural disasters, government actions, pandemics).
					</li>
				</ul>

				<h3>Indemnification</h3>
				<p>You agree to indemnify and hold Kintik Resort, its affiliates, and staff harmless
					from claims arising from your violation of these Terms, misuse of the Site, or
					actions during your visit.
				</p>

				<h3>Dispute Resolution</h3>
				<ul>
					<li>
						Governing Law: These Terms are governed by the laws of the Federal Republic of
						Nigeria.
					</li>
					<li>
						Arbitration: Disputes will be resolved through binding arbitration in Abuja
						under the Arbitration and Mediation Act, except for small claims.
					</li>
				</ul>

				<h3><strong>Contact Us</strong></h3>

				<p>If you have any questions or concerns about this terms and condition,
					please contact us at:</p>

				<p><strong>Email</strong>: info@kintikresort.com.ng</p>
				<p><strong>Address</strong>: Olajide Laleye Street, Jahi, Abuja Nigeria</p>
				<p><strong>Phone</strong>: +2349070059320</p>

			</div>


		</Wrapper>
	)
}

export default TermsAndConditions 