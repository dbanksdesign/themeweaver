import React from 'react';
import Token from '../components/Token';
import TokenGroup from '../components/TokenGroup';
import TOC from '../components/TOC';

const sections = [{
	title: `Grey`,
	description: ``,
	tokens: [{
		path: `base.grey.5`,
		description: ``
	},{
		path: `base.grey.10`,
		description: ``
	},{
		path: `base.grey.20`,
		description: ``
	},{
		path: `base.grey.40`,
		description: ``
	},{
		path: `base.grey.60`,
		description: ``
	},{
		path: `base.grey.80`,
		description: ``
	},{
		path: `base.grey.90`,
		description: ``
	},{
		path: `base.grey.100`,
		description: ``
	}]
},{
	title: `Red`,
	description: ``,
	tokens: [{
		path: `base.red.darker`,
		description: ``
	},{
		path: `base.red.dark`,
		description: ``
	},{
		path: `base.red.light`,
		description: ``
	},{
		path: `base.red.lighter`,
		description: ``
	}]
},{
	title: `Orange`,
	description: ``,
	tokens: [{
		path: `base.orange.darker`,
		description: ``
	},{
		path: `base.orange.dark`,
		description: ``
	},{
		path: `base.orange.light`,
		description: ``
	},{
		path: `base.orange.lighter`,
		description: ``
	}]
},{
	title: `Yellow`,
	description: ``,
	tokens: [{
		path: `base.yellow.darker`,
		description: ``
	},{
		path: `base.yellow.dark`,
		description: ``
	},{
		path: `base.yellow.light`,
		description: ``
	},{
		path: `base.yellow.lighter`,
		description: ``
	}]
},{
	title: `Lime`,
	description: ``,
	tokens: [{
		path: `base.lime.darker`,
		description: ``
	},{
		path: `base.lime.dark`,
		description: ``
	},{
		path: `base.lime.light`,
		description: ``
	},{
		path: `base.lime.lighter`,
		description: ``
	}]
},{
	title: `Green`,
	description: ``,
	tokens: [{
		path: `base.green.darker`,
		description: ``
	},{
		path: `base.green.dark`,
		description: ``
	},{
		path: `base.green.light`,
		description: ``
	},{
		path: `base.green.lighter`,
		description: ``
	}]
},{
	title: `Teal`,
	description: ``,
	tokens: [{
		path: `base.teal.darker`,
		description: ``
	},{
		path: `base.teal.dark`,
		description: ``
	},{
		path: `base.teal.light`,
		description: ``
	},{
		path: `base.teal.lighter`,
		description: ``
	}]
},{
	title: `Blue`,
	description: ``,
	tokens: [{
		path: `base.blue.darker`,
		description: ``
	},{
		path: `base.blue.dark`,
		description: ``
	},{
		path: `base.blue.light`,
		description: ``
	},{
		path: `base.blue.lighter`,
		description: ``
	}]
},{
	title: `Purple`,
	description: ``,
	tokens: [{
		path: `base.purple.darker`,
		description: ``
	},{
		path: `base.purple.dark`,
		description: ``
	},{
		path: `base.purple.light`,
		description: ``
	},{
		path: `base.purple.lighter`,
		description: ``
	}]
},{
	title: `Pink`,
	description: ``,
	tokens: [{
		path: `base.pink.darker`,
		description: ``
	},{
		path: `base.pink.dark`,
		description: ``
	},{
		path: `base.pink.light`,
		description: ``
	},{
		path: `base.pink.lighter`,
		description: ``
	}]
}]

class BasePage extends React.Component {
	
	render() {
		const { updateToken, tokens, tokenNames } = this.props;
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
								if (!tokens[path]) { console.log(path); }
								return (
									<Token {...tokens[path]}
										path={path}
										key={path}
										description={description}
										updateToken={updateToken}
										tokenNames={tokenNames} />
								)
							})}
						</TokenGroup>
					))}
				</div>
			</div>
		)
	}
}

export default BasePage
