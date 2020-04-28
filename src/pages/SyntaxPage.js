import React from 'react';
import { Helmet } from 'react-helmet';
import TokenGroup from '../components/TokenGroup';
import SyntaxToken from '../components/SyntaxToken';
import TOC from '../components/TOC';

const sections = [{
	title: `Comment`,
	description: `Code comments, you can target single, block, and documentation type comments`,
	tokens: [{
		path: `syntax.comment`,
		description: ``
	},{
		path: `syntax.comment.line`,
		description: ``
	},{
		path: `syntax.comment.block.documentation`,
		description: ``
	},{
		path: `syntax.comment.single`,
		description: ``
	}]
},{
	title: `Constant`,
	description: `Things like numbers, booleans, null, escape characters`,
	tokens: [{
		path: `syntax.constant.language.dart`,
		description: ``
	},{
		path: `syntax.constant.language.boolean.false`,
		description: ``
	},{
		path: `syntax.constant.language.boolean.true`,
		description: ``
	},{
		path: `syntax.constant.language.import-export-all`,
		description: ``
	},{
		path: `syntax.constant.language.null`,
		description: ``
	},{
		path: `syntax.constant.language.symbol`,
		description: ``
	},{
		path: `syntax.constant.language.undefined`,
		description: ``
	},{
		path: `syntax.constant.numeric`,
		description: ``
	}]
},{
	title: `Entity`,
	description: <span>Names of functions, data structures, classes, etc., but not of variables which reference them. For example, <code>var foo = someFunction();</code>, <code>someFunction()</code> would be an entity. Entity also includes some HTML syntax like tags and tag attributes.</span>,
	tokens: [{
		path: `syntax.entity.name.tag`,
		description: ``
	},{
		path: `syntax.entity.name.tag.reference`,
		description: ``
	},{
		path: `syntax.entity.name.tag.yaml`,
		description: ``
	},{
		path: `syntax.entity.name.type.module`,
		description: ``
	},{
		path: `syntax.entity.name.function`,
		description: ``
	},{
		path: `syntax.entity.other.attribute-name.id`,
		description: ``
	},{
		path: `syntax.entity.other.attribute-name.class`,
		description: ``
	},{
		path: `syntax.entity.other.attribute-name`,
		description: ``
	}]
},{
	title: `Invalid`,
	description: `Illegal and deprecated code`,
	tokens: [{
		path: `syntax.invalid`,
		description: ``
	}]
},{
	title: `Keyword`,
	description: <span>Things like <code>new</code>, <code>import/export</code>, and operators like conditionals or relational (less than, greater than, etc.). Does not include type elements like <code>async</code>, <code>var</code>, <code>let</code>, etc., those are in storage.</span>,
	tokens: [{
		path: `syntax.keyword`,
		description: ``
	},{
		path: `syntax.keyword.control`,
		description: ``
	},{
		path: `syntax.keyword.control.import`,
		description: ``
	},{
		path: `syntax.keyword.control.from`,
		description: ``
	},{
		path: `syntax.keyword.control.flow`,
		description: ``
	},{
		path: `syntax.keyword.operator`,
		description: ``
	},{
		path: `syntax.keyword.operator.logical`,
		description: ``
	},{
		path: `syntax.keyword.other.unit`,
		description: ``
	},{
		path: ``,
		description: ``
	}]
},{
	title: `Markup`,
	description: `Things in markup/markdown languages. Applies to markdown files as well as documentation comments if you include markdown syntax.`,
	tokens: [{
		path: `syntax.markup.bold`,
		description: ``
	},{
		path: `syntax.markup.italic`,
		description: ``
	},{
		path: `syntax.markup.fenced_code`,
		description: ``
	},{
		path: `syntax.markup.heading`,
		description: ``
	},{
		path: `syntax.markup.quote`,
		description: ``
	},{
		path: `syntax.markup.underline.link`,
		description: ``
	}]
},{
	title: `Meta`,
	description: <span>This is used for larger sections of code that usually contain multiple more specific scopes. A lot of tokens have a meta scope, but it takes a lower priority than more specific scopes. For example, every element from the start of a class definition in Javascript to the end curly brace has a scope of <code>meta.class</code>. You usually won’t use this scope for styling. The scopes where this has higher specificity you might want to use are things like braces (curly, square, round).</span>,
	tokens: [{
		path: `syntax.meta.brace.round`,
		description: ``
	},{
		path: `syntax.meta.brace.square`,
		description: ``
	},{
		path: `syntax.meta.class`,
		description: ``
	},{
		path: `syntax.meta.jsx.children`,
		description: ``
	},{
		path: `syntax.meta.object`,
		description: ``
	},{
		path: `syntax.meta.property-name.css`,
		description: ``
	},{
		path: `syntax.meta.property-value.css`,
		description: ``
	},{
		path: `syntax.meta.selector`,
		description: ``
	},{
		path: `syntax.meta.structure.dictionary`,
		description: ``
	},{
		path: `syntax.meta.tag.attributes`,
		description: ``
	},{
		path: `syntax.meta.type.parameters`,
		description: ``
	},{
		path: `syntax.meta.var.expr`,
		description: ``
	}]
},{
	title: `Punctuation`,
	description: `This is for any punctuation like periods, commas, and semi-colons.`,
	tokens: [{
		path: `syntax.punctuation.accessor`,
		description: ``
	},{
		path: `syntax.punctuation.definition.array`,
		description: ``
	},{
		path: `syntax.punctuation.definition.block`,
		description: ``
	},{
		path: `syntax.punctuation.definition.dictionary`,
		description: ``
	},{
		path: `syntax.punctuation.definition.heading`,
		description: ``
	},{
		path: `syntax.punctuation.definition.list`,
		description: ``
	},{
		path: `syntax.punctuation.definition.parameters`,
		description: ``
	},{
		path: `syntax.punctuation.definition.string`,
		description: ``
	},{
		path: `syntax.punctuation.definition.tag`,
		description: ``
	},{
		path: `syntax.punctuation.definition.typeparameters`,
		description: ``
	},{
		path: `syntax.punctuation.definition.template-expression`,
		description: ``
	},{
		path: `syntax.punctuation.section`,
		description: ``
	},{
		path: `syntax.punctuation.separator`,
		description: ``
	},{
		path: `syntax.punctuation.terminator`,
		description: ``
	}]
},{
	title: `Storage`,
	description: <span>In Javascript storages are variable or class keywords like class, var, let, static, and extends. This can also include modifiers like static.</span>,
	tokens: [{
		path: `syntax.storage`,
		description: ``
	}]
},{
	title: `String`,
	description: <span>String literal definitions like <code>"I am a string"</code>.</span>,
	tokens: [{
		path: `syntax.string`,
		description: ``
	},{
		path: `syntax.string.key`,
		description: ``
	}]
},{
	title: `Support`,
	description: <span>Elements provided by the language. This is useful for CSS syntax tokens. CSS properties like <code>margin</code> and <code>color</code> are <strong>support.type.property-name</strong> and built-in values like <code>red</code> or <code>rebeccapurple</code> are under <strong>support.constant</strong>.</span>,
	tokens: [{
		path: `syntax.support.class`,
		description: ``
	},{
		path: `syntax.support.class.component`,
		description: ``
	},{
		path: `syntax.support.constant.color`,
		description: ``
	},{
		path: `syntax.support.constant.font-name`,
		description: ``
	},{
		path: `syntax.support.constant.property-value`,
		description: ``
	},{
		path: `syntax.support.function`,
		description: ``
	},{
		path: `syntax.support.function.math`,
		description: <span>Functions on the global Math object like <code>.floor</code> or <code>.round</code></span>
	},{
		path: `syntax.support.type.property-name`,
		description: <span>Testing</span>
	},{
		path: `syntax.support.type.property-name.css`,
		description: ``
	},{
		path: `syntax.support.type.vendored`,
		description: ``
	}]
},{
	title: `Variable`,
	description: <span>The name of variables and properties within that variable. In Javascript defining a class is not a variable, it is an entity. In this example: <code>var name = 'Danny'; console.log(name);</code>, both occurrences of <code>name</code> would be in the variable scope. <code>this</code> is also a variable.</span>,
	tokens: [{
		path: `syntax.variable`,
		description: ``
	},{
		path: `syntax.variable.language.super`,
		description: ``
	},{
		path: `syntax.variable.language.this`,
		description: ``
	},{
		path: `syntax.variable.other`,
		description: ``
	},{
		path: `syntax.variable.other.constant`,
		description: ``
	},{
		path: `syntax.variable.other.readwrite.alias`,
		description: ``
	}]
}]
class SyntaxPage extends React.Component {
	
	render() {
		const { updateToken, tokens, tokenNames, updateFontStyle } = this.props;
		const links = sections.map(section => {
			return {
				label: section.title,
				anchor: section.title.replace(' ','-')
			}
		});
		
		return (
			<>
				<Helmet>
					<title>Syntax Tokens | Themeweaver</title>
				</Helmet>
				<TOC links={links} />
				<div className="page-content" id="page-content">
				<div className="page-content-inner">
					<h1>Syntax</h1>
					<p>These tokens style <strong>scopes</strong> in the editor.</p>
					
					<p>Here are some resources about how syntax highlight works in IDEs:</p>
					
					<ul>
						<li>
							<a href="https://www.sublimetext.com/docs/3/scope_naming.html#alphabetical_reference">https://www.sublimetext.com/docs/3/scope_naming.html#alphabetical_reference</a>
						</li>
						<li>
							<a href="https://macromates.com/manual/en/scope_selectors">https://macromates.com/manual/en/scope_selectors</a>
						</li>
						<li>
							<a href="https://macromates.com/blog/2005/language-grammars/">https://macromates.com/blog/2005/language-grammars/</a>
						</li>
						<li>
							<a href="https://macromates.com/blog/2005/introduction-to-scopes/">https://macromates.com/blog/2005/introduction-to-scopes/</a>
						</li>
					</ul>
					
					<p>These are the common scopes you might use when creating a syntax highlighting theme, but this list is not exhaustive. If you'd like to add some or add the ability to add custom syntax scopes, <a href="https://github.com/dbanksdesign/themeweaver/pulls">open a PR</a>!</p>
					
					<section className="tip">
						To inspect scopes, click inside the editor and press F1, then search for "Developer: Inspect Tokens"
					</section>
				{sections.map(section => (
					<TokenGroup {...section}
						key={section.title}
						id={section.title.replace(' ','-')}>
						{section.tokens.map(({ path, description }) => {
							if (!tokens[path]) {
								console.log(path);
								return null;
							} else {
								return (
									<SyntaxToken key={path}
										{...tokens[path]}
										path={path}
										updateFontStyle={updateFontStyle}
										updateToken={updateToken}
										tokenNames={tokenNames} />
								)
							}
						})}
					</TokenGroup>
				))}
				</div>
				</div>
			</>
		)
	}
}

export default SyntaxPage
