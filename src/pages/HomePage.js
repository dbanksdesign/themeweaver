import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Logo from '../components/Logo';

import './Home.css';

const HomePage = () => (
	<div className="homepage">
		
		<Helmet>
			<title>Themeweaver | Create IDE themes with design tokens!</title>
		</Helmet>
		
		<section className="home-hero">
			<div className="home-logo">
				<Logo />
			</div>
			<h1 className="home-header">Themeweaver</h1>
			<p className="home-tagline">Create IDE &amp; syntax highlighting themes in your browser using design tokens!</p>
			<Link className="button" to="/base">Get started</Link>
		</section>
		
		<section className="home-hero">
			<p>TODO: Make homepage.</p>
		</section>
	</div>
)

export default HomePage
