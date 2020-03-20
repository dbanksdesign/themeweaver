import React from 'react';
import TokenGroup from '../components/TokenGroup';
import SyntaxToken from '../components/SyntaxToken';
import TOC from '../components/TOC';

const sections = [{
	title: `Comment`,
	description: ``,
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
	description: ``,
	tokens: [{
		
	}]
},{
	title: `Entity`,
	description: ``,
	tokens: [{
		
	}]
},{
	title: `Invalid`,
	description: ``,
	tokens: [{
		
	}]
},{
	title: `Keyword`,
	description: ``,
	tokens: [{
		
	}]
},{
	title: `Markup`,
	description: ``,
	tokens: [{
		
	}]
},{
	title: `Meta`,
	description: ``,
	tokens: [{
		
	}]
},{
	title: `Punctuation`,
	description: ``,
	tokens: [{
		
	}]
},{
	title: `Storage`,
	description: ``,
	tokens: [{
		
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
			<div className="page-with-toc">
				<TOC links={links} />
				<div className="page-content">
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
		)
	}
}

export default SyntaxPage
