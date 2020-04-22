import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Logo from '../components/Logo';

import './Home.css';

const HomePage = () => (
	<div className="page-content homepage">
		<div className="">
		
		<Helmet>
			<title>Themeweaver | Create IDE themes with design tokens!</title>
		</Helmet>
		
		<section className="home-hero">
			<div className="home-logo">
				<Logo />
			</div>
			<h1 className="home-header">Create IDE &amp; syntax themes in your browser!</h1>
			{/* <p className="home-tagline">Use design tokens to create themes for multiple applications like VSCode and iTerm.</p> */}
			
		</section>
		
		<section className="home-hero">
			<h2>How it works</h2>
			
			<h3>1. Define base color palette</h3>
			<p>If you don't want to go deeper, you don't have to edit anything else. </p>
			
			<h3>2. Define light and dark theme tokens</h3>
			<p>Set the primary and secondary background and font colors along with some other ones that application and syntax tokens will reference.</p>
			
			<h3>3. Edit application tokens</h3>
			<p>Hardcore mode! You can tweak the specific styles of the application using the theme tokens defined. </p>
			
			<h3>4. Syntax tokens</h3>
			<p>Insane mode! Tweak specific syntax highlighting rules to your liking.</p>
			
			
		</section>
		
		<section className="home-hero">
			<Link className="button block primary" to="/editor/base">Get started</Link>
		</section>
		
		<section className="home-testimonials">
			<div className="testimonial">
				<img className="testimonial-img" alt="" />
				<blockquote className="testimonial-text">
					This is the coolest thing ever.
				</blockquote>
				<cite className="testimonial-author">Burt Macklin, FBI</cite>
			</div>
		</section>
		
		<footer className="home-footer">
			<h2>Credits</h2>
			<p>This project is built on a lot of awesome open source work:</p>
			<dl>
				<dt><a href="https://create-react-app.dev">Create React App</a></dt>
				<dd>Build system / scaffolding</dd>
				<dt><a href="https://vis4.net/chromajs">chroma.js</a></dt>
				<dd>Used for color transformations</dd>
				<dt><a href="https://microsoft.github.io/monaco-editor">Monaco</a></dt>
				<dd>Live code editor (powers VSCode)</dd>
				<dt>Typefaces</dt>
				<dd><a href="https://fonts.google.com/specimen/Source+Code+Pro">Source Code Pro</a> &amp; <a href="https://fonts.google.com/specimen/Source+Sans+Pro">Source Sans Pro</a></dd>
			</dl>
			
			<p>While not directly used, this project is inspired by <a href="http://styledictionary.com">Style Dictionary</a></p>
		</footer>
	</div>
	</div>
)

export default HomePage
