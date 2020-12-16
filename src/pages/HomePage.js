import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Alert from '../components/Alert';

import './Home.css';

const HomePage = () => (
	<div className="page-content homepage">
		<div className="">
		
		<Helmet>
			<title>Themeweaver | Create IDE themes with design tokens!</title>
		</Helmet>
		
		<section className="home-hero">

			<h1 className="home-header">
				Create IDE &amp; syntax themes in your browser!
			</h1>
		</section>
		
		<section className="home-hero flow">
			<h2>How it works</h2>
			
			<p>Themeweaver uses the concept of design tokens<sup>&trade;</sup> to build light and dark themes for multiple platforms. All changes are stored in the browser, don't worry about losing your changes. When you are ready, export your theme to multiple platforms like VSCode, Jetbrains, iTerm, etc.</p>
			
			<Alert>
				The code editor to the right actually works, you can edit those files! The VSCode application around it is just a prototype, you can click on the activity bar tabs, but it is not functional other than that.
			</Alert>
			
			<section>
				<h3>1. <Link to="/editor/base">Base tokens</Link></h3>
				<p>This is the lowest level, all other tokens eventually reference base tokens. If you don't want to go deeper, you don't have to edit anything else.</p>
			</section>
			
			<section>
				<h3>2. <Link to="/editor/theme">Theme tokens</Link></h3>
				<p>Dark and light theme tokens define semantic values like primary background, interactive backroung, primary font, etc. These tokens are then referenced in the application and syntax tokens. Doing this allows you to only have to edit a small number of tokens for each theme rather than all of the application and syntax tokens.</p>
			</section>
			
			<section>
				<h3>3. <Link to="/editor/application">Application tokens</Link></h3>
				<p>Application tokens allow you to change parts of the application. Maybe you want the activity bar (on the left) to use the primary color, or you want all backgrounds the same. There are <em>a lot</em> of application tokens you can set. Go nuts.</p>
			</section>
			
			<section>
				<h3>4. <Link to="/editor/syntax">Syntax tokens</Link></h3>
				<p>Syntax tokens are used for syntax highlighting rules. You can also define font styles for syntax highlighting!</p>
			</section>
			
			<Link className="button block primary" to="/editor/base">Get started</Link>
		</section>
		
		<section className="home-hero">
			<Alert>
				This is a work-in-progress so there might be some bugs. Also, performance might be an issue because changes have huge effects and this is running a live code editor. 
			</Alert>
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
				<dt>Base theme</dt>
				<dd><a href="https://marketplace.visualstudio.com/items?itemName=dbanksdesign.nu-disco">Nu Disco</a></dd>
			</dl>
			
			<p>While not directly used, this project is inspired by <a href="http://styledictionary.com">Style Dictionary</a></p>
		</footer>
	</div>
	</div>
)

export default HomePage
