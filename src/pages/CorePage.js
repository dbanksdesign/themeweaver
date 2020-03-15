import React from 'react';
import Token from '../components/Token';
import TokenGroup from '../components/TokenGroup';
import TOC from '../components/TOC';

const sections = [{
	title: `Grey`,
	description: ``,
	tokens: [{
		path: `core.grey.5`,
		description: ``
	},{
		path: `core.grey.10`,
		description: ``
	},{
		path: `core.grey.20`,
		description: ``
	},{
		path: `core.grey.40`,
		description: ``
	},{
		path: `core.grey.60`,
		description: ``
	},{
		path: `core.grey.80`,
		description: ``
	},{
		path: `core.grey.90`,
		description: ``
	},{
		path: `core.grey.100`,
		description: ``
	}]
},{
	title: `Red`,
	description: ``,
	tokens: [{
		path: `core.red.darker`,
		description: ``
	},{
		path: `core.red.dark`,
		description: ``
	},{
		path: `core.red.light`,
		description: ``
	},{
		path: `core.red.lighter`,
		description: ``
	}]
},{
	title: `Orange`,
	description: ``,
	tokens: [{
		path: `core.orange.darker`,
		description: ``
	},{
		path: `core.orange.dark`,
		description: ``
	},{
		path: `core.orange.light`,
		description: ``
	},{
		path: `core.orange.lighter`,
		description: ``
	}]
},{
	title: `Yellow`,
	description: ``,
	tokens: [{
		path: `core.yellow.darker`,
		description: ``
	},{
		path: `core.yellow.dark`,
		description: ``
	},{
		path: `core.yellow.light`,
		description: ``
	},{
		path: `core.yellow.lighter`,
		description: ``
	}]
},{
	title: `Lime`,
	description: ``,
	tokens: [{
		path: `core.lime.darker`,
		description: ``
	},{
		path: `core.lime.dark`,
		description: ``
	},{
		path: `core.lime.light`,
		description: ``
	},{
		path: `core.lime.lighter`,
		description: ``
	}]
},{
	title: `Green`,
	description: ``,
	tokens: [{
		path: `core.green.darker`,
		description: ``
	},{
		path: `core.green.dark`,
		description: ``
	},{
		path: `core.green.light`,
		description: ``
	},{
		path: `core.green.lighter`,
		description: ``
	}]
},{
	title: `Teal`,
	description: ``,
	tokens: [{
		path: `core.teal.darker`,
		description: ``
	},{
		path: `core.teal.dark`,
		description: ``
	},{
		path: `core.teal.light`,
		description: ``
	},{
		path: `core.teal.lighter`,
		description: ``
	}]
},{
	title: `Blue`,
	description: ``,
	tokens: [{
		path: `core.blue.darker`,
		description: ``
	},{
		path: `core.blue.dark`,
		description: ``
	},{
		path: `core.blue.light`,
		description: ``
	},{
		path: `core.blue.lighter`,
		description: ``
	}]
},{
	title: `Purple`,
	description: ``,
	tokens: [{
		path: `core.purple.darker`,
		description: ``
	},{
		path: `core.purple.dark`,
		description: ``
	},{
		path: `core.purple.light`,
		description: ``
	},{
		path: `core.purple.lighter`,
		description: ``
	}]
},{
	title: `Pink`,
	description: ``,
	tokens: [{
		path: `core.pink.darker`,
		description: ``
	},{
		path: `core.pink.dark`,
		description: ``
	},{
		path: `core.pink.light`,
		description: ``
	},{
		path: `core.pink.lighter`,
		description: ``
	}]
}]

class CorePage extends React.Component {
	
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

export default CorePage
