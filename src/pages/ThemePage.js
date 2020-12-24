import React from 'react';
import {Helmet} from 'react-helmet';
import Token from '../components/Token';
import TokenGroup from '../components/TokenGroup';

const sections = [{
	title: `Background`,
	description: `All colors used for backgrounds including selection and highlights.`,
	tokens: [{
		path: `theme.background.primary`,
		description: `Primary background color, used for the code editor area.`
	},{
		path: `theme.background.secondary`,
		description: ``
	},{
		path: `theme.background.tertiary`,
		description: ``
	},{
		path: `theme.background.quaternary`,
		description: ``
	},{
		path: `theme.background.badge`,
		description: ``
	},{
		path: `theme.background.debug`,
		description: ``
	},{
		path: `theme.background.danger`,
		description: ``
	},{
		path: `theme.background.warning`,
		description: ``
	},{
		path: `theme.background.success`,
		description: ``
	},{
		path: `theme.background.info`,
		description: ``
	},{
		path: `theme.background.drop`,
		description: ``
	},{
		path: `theme.background.interactive.base`,
		description: ``
	},{
		path: `theme.background.interactive.hover`,
		description: ``
	},{
		path: `theme.background.selection.primary.active`,
		description: ``
	},{
		path: `theme.background.selection.primary.inactive`,
		description: ``
	},{
		path: `theme.background.selection.secondary.active`,
		description: ``
	},{
		path: `theme.background.selection.secondary.inactive`,
		description: ``
	},{
		path: `theme.background.selection.tertiary.active`,
		description: ``
	},{
		path: `theme.background.selection.tertiary.inactive`,
		description: ``
	},{
		path: `theme.background.highlight.primary.active`,
		description: ``
	},{
		path: `theme.background.highlight.primary.inactive`,
		description: ``
	},{
		path: `theme.background.highlight.secondary.active`,
		description: ``
	},{
		path: `theme.background.highlight.secondary.inactive`,
		description: ``
	}]
},{
	title: `Font`,
	description: ``,
	tokens: [{
		path: `theme.font.primary`,
		description: `Base font color used`
	},{
		path: `theme.font.secondary`,
		description: ``
	},{
		path: `theme.font.tertiary`,
		description: ``
	},{
		path: `theme.font.quaternary`,
		description: ``
	},{
		path: `theme.font.ghost`,
		description: ``
	},{
		path: `theme.font.inverse`,
		description: ``
	},{
		path: `theme.font.active`,
		description: ``
	},{
		path: `theme.font.success`,
		description: ``
	},{
		path: `theme.font.danger`,
		description: ``
	},{
		path: `theme.font.warning`,
		description: ``
	},{
		path: `theme.font.info`,
		description: ``
	},{
		path: `theme.font.link.primary.active`,
		description: ``
	},{
		path: `theme.font.link.primary.inactive`,
		description: ``
	},{
		path: `theme.font.link.secondary.active`,
		description: ``
	},{
		path: `theme.font.link.secondary.inactive`,
		description: ``
	},{
		path: `theme.font.code.1`,
		description: ``
	},{
		path: `theme.font.code.2`,
		description: ``
	},{
		path: `theme.font.code.3`,
		description: ``
	},{
		path: `theme.font.code.4`,
		description: ``
	},{
		path: `theme.font.code.5`,
		description: ``
	},{
		path: `theme.font.code.6`,
		description: ``
	},{
		path: `theme.font.code.7`,
		description: ``
	},{
		path: `theme.font.code.8`,
		description: ``
	},{
		path: `theme.font.code.9`,
		description: ``
	},{
		path: `theme.font.code.21`,
		description: ``
	},{
		path: `theme.font.code.22`,
		description: ``
	},{
		path: `theme.font.code.23`,
		description: ``
	},{
		path: `theme.font.code.24`,
		description: ``
	},{
		path: `theme.font.code.25`,
		description: ``
	},{
		path: `theme.font.code.26`,
		description: ``
	},{
		path: `theme.font.code.27`,
		description: ``
	},{
		path: `theme.font.code.28`,
		description: ``
	},{
		path: `theme.font.code.29`,
		description: ``
	}]
},{
	title: `Border`,
	description: ``,
	tokens: [{
		path: `theme.border.primary`,
		description: ``
	},{
		path: `theme.border.secondary`,
		description: ``
	},{
		path: `theme.border.info`,
		description: ``
	},{
		path: `theme.border.success`,
		description: ``
	},{
		path: `theme.border.warning`,
		description: ``
	},{
		path: `theme.border.danger`,
		description: ``
	},{
		path: `theme.border.active`,
		description: ``
	}]
}]

class ThemePage extends React.Component {

	render() {
		const { updateToken, tokens, changeTheme, currentTheme } = this.props;
		
		return (
			<>
				<Helmet>
					<title>Theme Tokens | Themeweaver</title>
				</Helmet>
				
				<div className="page-content" id="page-content">
					<div className="page-content-inner">
						<p>Most theme packages contain multiple <em>themes</em>. The theme tokens here allow application and syntax tokens to reference these theme tokens so you don't need to re-write all those tokens for each theme.</p>

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
											allTokens={tokens}
											description={description}
											updateToken={updateToken} />
									)
								})}
							</TokenGroup>
						))}
					</div>
				</div>
			</>
		)
	}
}

export default ThemePage
