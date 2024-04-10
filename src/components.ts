import { html } from "hono/html";

export const Html = () => {
	return html`<html lang="en">
		<head>
			<meta charset="UTF-8" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=10" />
			<title>Resume - Kavindu Manahara</title>
			<!-- styles -->
			<style>
				* {
					margin: 0;
					padding: 0;
					box-sizing: border-box;
				}
				html {
					-webkit-print-color-adjust: exact;
					height: 100%;
				}
				body {
					font-family: Arial, sans-serif;
					font-size: 16px;
					line-height: 1.6;
					margin: 0;
					padding: 0;
					height: 100%;
				}
				.container {
					display: grid;
					grid-template-columns: 7fr 13fr;
				}
				.left {
					background: #152b46;
				}
				.left::before {
					content: "";
					position: fixed;
					bottom: 0%;
					width: 35%;
					height: 100%;
					z-index: -1;
					background: #152b46;
				}
				.right {
					background: #ffffff;
					padding: 20px 20px 20px 30px;
					color: #152b46;
				}
				/* styles for left side */
				.avatar-container {
					display: flex;
					justify-content: center;
					align-items: center;
					height: 270px;
				}
				.avatar {
					width: 200px;
					height: 200px;
					border-radius: 50%;
					object-fit: cover;
				}
				.left-blocks {
					color: #ffffff;
					padding: 0 0 0 20px;
					page-break-inside: avoid;
				}
				.left-blocks .topic {
					color: #ffffff;
					font-size: 24px;
					margin: 0;
				}
				.left-blocks .topic::after {
					content: "";
					display: block;
					width: 100%;
					height: 2px;
					background: #ffffff;
					margin-top: 5px;
				}
				.left-blocks .content {
					padding: 20px 10px 20px 10px;
					display: flex;
					flex-direction: column;
					row-gap: 20px;
				}
				.left-blocks .content div p {
					margin: 0px;
				}
				.left-blocks .content div p {
					font-size: 0.9rem;
					color: #cbe0f8;
				}
				.left-blocks .content div p:first-child {
					font-weight: bold;
					color: #ffffff;
				}
				.left-blocks .content div a {
					color: #cbe0f8;
					text-decoration: none;
					font-size: 0.9rem;
				}
				.left-blocks .content ul {
					color: #cbe0f8;
					list-style-type: none;
				}
				/* styles for right side */
				.name {
					font-size: 3rem;
					margin-top: 30px;
				}
				.name span {
					font-weight: 500;
				}
				.description {
					text-align: justify;
					text-indent: 40px;
				}
				.right-blocks {
					padding: 20px 0 0 0;
				}
				.right-blocks .topic {
					font-size: 24px;
					margin: 0;
				}
				.right-blocks .topic::after {
					content: "";
					display: block;
					width: 100%;
					height: 2px;
					background: #152b46;
					margin-top: 5px;
				}
				.right-blocks .content {
					padding: 30px 0 0 0;
				}
				.right-blocks .content .block {
					position: relative;
					border-left: 3px solid #152b46;
					padding: 30px 20px 0px 20px;
					page-break-inside: avoid;
				}
				.right-blocks .content .block::before {
					content: "";
					position: absolute;
					border-radius: 50%;
					left: -10px;
					width: 12px;
					height: 12px;
					top: 30px;
					background: #ffffff;
					border: 3px solid #152b46;
				}
				.right-blocks .content .block:not(:nth-last-child(1))::after {
					content: "";
					position: absolute;
					width: 3px;
					left: -3px;
					height: 100%;
					background: #152b46;
					top: 100%;
				}
				.right-blocks .content .block .inner-block {
					transform: translateY(-10px);
				}
				.right-blocks .content .block .inner-block h3 {
					color: #505c6b;
				}
				.right-blocks .content .block .inner-block p:nth-child(2) {
					font-size: 1.2rem;
					font-weight: 600;
				}
				.right-blocks .content .block .inner-block p:nth-child(3) {
					font-size: 0.9rem;
					color: #666f7c;
					font-weight: 600;
				}
				.right-blocks .content .block .inner-block p:nth-child(4) {
					color: #303944;
				}
				.right-blocks .technologies-grid {
					display: grid;
					grid-template-columns: repeat(3, 1fr);
					row-gap: 2px;
					padding-left: 15px;
					padding-top: 20px;
					font-size: 1.2rem;
				}
			</style>
		</head>
		<body>
			<!-- main container -->
			<div class="container">
				<!-- left side -->
				<div class="left">
					<!-- avatar -->
					<div class="avatar-container">
						<img
							src="http://localhost:3000/avatar.jpeg"
							alt="avatar"
							class="avatar" />
					</div>

					<!-- contacts -->
					<div class="left-blocks">
						<h2 class="topic">Contacts</h2>
						<div class="content">
							<!-- contents -->
							<div class="">
								<p class="">Phone</p>
								<p class="">+94 78 37 89 178</p>
							</div>
							<div class="">
								<p class="">Email</p>
								<p class="">contact@kavindu.me</p>
							</div>
							<div class="">
								<p class="">Address</p>
								<p class="">Ihalawatta , Kondeniya , Dickwella</p>
							</div>
							<div class="">
								<p class="">Website</p>
								<a
									class=""
									href="https://www.kavindu.me/"
									>https://www.kavindu.me</a
								>
							</div>
							<div class="">
								<p class="">GitHub</p>
								<a
									class=""
									href="https://github.com/kavindu-mane"
									>@kavindu-mane</a
								>
							</div>
							<div class="">
								<p class="">LinkedIn</p>
								<a
									class=""
									href="https://www.linkedin.com/in/kavindu-wanniarachchi/"
									>@kavindu-wanniarachchi</a
								>
							</div>
						</div>
					</div>

					<!-- education -->
					<div class="left-blocks">
						<h2 class="topic">Education</h2>
						<div class="content">
							<div class="">
								<p class="">BSc (Hons) Computer Science & Technology</p>
								<p class="">2021 - Now</p>
								<p class="">Uva Wellassa University of Sri Lanka</p>
							</div>
							<div class="">
								<p class="">Advanced Level - Maths Stream</p>
								<p class="">2017 - 2019</p>
								<p class="">MR/ Vijitha Central Collage</p>
							</div>
						</div>
					</div>

					<!-- expertise -->
					<div class="left-blocks">
						<h2 class="topic">Expertise</h2>
						<div class="content">
							<ul>
								<li>Front-end Development</li>
								<li>Back-end Development</li>
							</ul>
						</div>
					</div>

					<!-- language -->
					<div class="left-blocks">
						<h2 class="topic">Languages</h2>
						<div class="content">
							<ul>
								<li>Sinhala</li>
								<li>English</li>
							</ul>
						</div>
					</div>
				</div>

				<!-- right side -->
				<div class="right">
					<!-- name -->
					<h1 class="name">Kavindu <span>Manahara</span></h1>
					<!-- description -->
					<p class="description">
						I am Kavindu Manahara from Sri lanka.I am 23 years old.I have front-end skills in
						JavaScript , React , Bootstrap and Tailwind CSS. As well as I'm currently learning PHP
						and Express Js as backend technologies.These days I am reading for a degree in Bachelor
						of Computer Science and Technology degree program at Uva Wellassa University in Sri
						Lanka.
					</p>

					<!-- projects -->
					<div class="right-blocks">
						<h2 class="topic">Projects</h2>
						<div class="content">
							<!-- project 1 -->
							<div class="block">
								<div class="inner-block">
									<h3>2023</h3>
									<p>IEEE Open day UWU 2023 Website</p>
									<p>Tech Stack - React , Tailwind CSS , Google Apps Script</p>
									<p>
										Uva Wellassa University IEEE Open day 2023 official website. This website help
										to get an idea about IEEE and register event for undergraduates.
									</p>
								</div>
							</div>
							<!-- project 2 -->
							<div class="block">
								<div class="inner-block">
									<h3>2023</h3>
									<p>Github Visitors Counter</p>
									<p>Tech Stack - Express Js , MongoDB</p>
									<p>
										GitHub Visitors Counter is a counter that calculate GitHub profile viewers and
										show that value as a badge.
									</p>
								</div>
							</div>
							<!-- project 3 -->
							<div class="block">
								<div class="inner-block">
									<h3>2023 - Now</h3>
									<p>React Percentage Bar</p>
									<p>Tech Stack - React , CSS , NPM</p>
									<p>
										React Percentage Bar is more Customizable Circular and Linear percentage
										progress bar package for react apps
									</p>
								</div>
							</div>
							<!-- project 4 -->
							<div class="block">
								<div class="inner-block">
									<h3>2023</h3>
									<p>CreateME</p>
									<p>Tech Stack - React , CSS , Bootstrap</p>
									<p>
										Create Amazing GitHub Profile README Without Coding.Show your skills, experience
										, projects and many more. Generate markdown for your profile with just few
										clicks!
									</p>
								</div>
							</div>
							<!-- project 5 -->
							<div class="block">
								<div class="inner-block">
									<h3>2023</h3>
									<p>WhatsSender</p>
									<p>Tech Stack - Java , XML , Android</p>
									<p>
										WhatsSender is an android app for open WhatsApp chat non-contacts phone numbers.
										Also this app support WhatsApp , WhatsApp Business and other modified versions.
									</p>
								</div>
							</div>
						</div>
					</div>

					<div class="right-blocks">
						<h2 class="topic">Projects</h2>
						<div class="content">
							<!-- project 1 -->
							<div class="block">
								<div class="inner-block">
									<h3>2023</h3>
									<p>IEEE Open day UWU 2023 Website</p>
									<p>Tech Stack - React , Tailwind CSS , Google Apps Script</p>
									<p>
										Uva Wellassa University IEEE Open day 2023 official website. This website help
										to get an idea about IEEE and register event for undergraduates.
									</p>
								</div>
							</div>
							<!-- project 2 -->
							<div class="block">
								<div class="inner-block">
									<h3>2023</h3>
									<p>Github Visitors Counter</p>
									<p>Tech Stack - Express Js , MongoDB</p>
									<p>
										GitHub Visitors Counter is a counter that calculate GitHub profile viewers and
										show that value as a badge.
									</p>
								</div>
							</div>
							<!-- project 3 -->
							<div class="block">
								<div class="inner-block">
									<h3>2023 - Now</h3>
									<p>React Percentage Bar</p>
									<p>Tech Stack - React , CSS , NPM</p>
									<p>
										React Percentage Bar is more Customizable Circular and Linear percentage
										progress bar package for react apps
									</p>
								</div>
							</div>
							<!-- project 4 -->
							<div class="block">
								<div class="inner-block">
									<h3>2023</h3>
									<p>CreateME</p>
									<p>Tech Stack - React , CSS , Bootstrap</p>
									<p>
										Create Amazing GitHub Profile README Without Coding.Show your skills, experience
										, projects and many more. Generate markdown for your profile with just few
										clicks!
									</p>
								</div>
							</div>
							<!-- project 5 -->
							<div class="block">
								<div class="inner-block">
									<h3>2023</h3>
									<p>WhatsSender</p>
									<p>Tech Stack - Java , XML , Android</p>
									<p>
										WhatsSender is an android app for open WhatsApp chat non-contacts phone numbers.
										Also this app support WhatsApp , WhatsApp Business and other modified versions.
									</p>
								</div>
							</div>
						</div>
					</div>

					<!-- technologies and frameworks -->
					<div class="right-blocks">
						<h2 class="topic">Technologies and Frameworks</h2>
						<div class="technologies-grid">
							<li>JavaScript</li>
							<li>TypeScript</li>
							<li>Java</li>
							<li>Python</li>
							<li>PHP</li>
							<li>React</li>
							<li>Next.js</li>
							<li>Prisma</li>
							<li>Express Js</li>
							<li>Django</li>
							<li>Hono</li>
							<li>Bun</li>
							<li>Node Js</li>
							<li>Bootstrap</li>
							<li>Tailwind CSS</li>
							<li>MySQL</li>
							<li>Android</li>
							<li>Flutter</li>
							<li>Figma</li>
						</div>
					</div>

					<!-- references -->

					<!-- other fields -->
				</div>
			</div>
		</body>
	</html>`;
};
