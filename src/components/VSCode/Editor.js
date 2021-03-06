import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import { Registry } from "monaco-textmate";
import { wireTmGrammars } from "monaco-editor-textmate";
import VSCodeTabs from './Tabs';
import validateColor from '../../helpers/validateColor';
import tokenizeSyntaxTokens from '../../helpers/tokenizeSyntaxTokens';

const registry = new Registry({
	getGrammarDefinition: async scopeName => {
		if (scopeName === 'source.js') {
			return {
					format: 'json', // can also be `plist`
					content: await (await fetch(`/grammers/javascript.tmLanguage.json`)).text() // when format is 'json', parsed JSON also works
			}
		}
		if (scopeName === 'source.json') {
			return {
					format: 'json', // can also be `plist`
					content: await (await fetch(`/grammers/JSON.tmLanguage.json`)).text() // when format is 'json', parsed JSON also works
			}
		}
		if (scopeName === 'source.css') {
			return {
					format: 'json', // can also be `plist`
					content: await (await fetch(`/grammers/css.tmLanguage.json`)).text()
			}
		}
		// if (scopeName === 'text.html.markdown') {
		// 	return {
		// 			format: 'json', // can also be `plist`
		// 			content: await (await fetch(`/grammers/markdown.tmLanguage.json`)).text()
		// 	}
		// }
  }
});

async function liftOff(monaco) {
	// map of monaco "language id's" to TextMate scopeNames
	const grammers = new Map();
	grammers.set("javascript", "source.js");
	grammers.set("json", "source.json");
	grammers.set("css", "source.css");
	// grammers.set("markdown", "text.html.markdown");

	await wireTmGrammars(monaco, registry, grammers);
}

const css = `body {
  font-family: 'Open Sans', sans-serif;
  letter-spacing: 0.05em;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
}

a {
  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
}

a:hover {}
a::before {}

.someClass {
  font-family: serif;
}

#someID {
  background: yellow;
}

main {
  margin-top: 20px;
}

p > a {}

.loader {
  transform: translateX(0);
  animation: 1.5s linear infinite normal loading_animation;
}

@keyframes loading_animation {
  0% {
    transform: translateX(-25%);
    width: 0;
  }
  50% {
    transform: translateX(50%);
    width: 50%;
  }
  100% {
    transform: translateX(150%);
    width: 75%;
  }
}

/* attribute selectors */
a[title] {}
a[href="https://example.org"] {}
a[href*="example"] {}
a[href$=".org"] {}
`

const js = `'use strict'

/*
 * This is a live code editor! You can edit code in here.
 * For reals.
 * But it won't save anywhere. What am I, and actual IDE?
 */
class Sale {
  constructor(price) {
    [this.decoratorsList, this.price] = [[], price];
  }

  /**
   * This is a documentation comment
   * @static
   * @returns null
   * @param {Object} decorator - the decorator
   */
  decorate(decorator) {
    if (!Sale[decorator]) throw new Error(\`decorator not exist: \${decorator}\`)
    this.decoratorsList.push(Sale[decorator])
  }

  getPrice() {
    for (let decorator of this.decoratorsList) {
      this.price = decorator(this.price)
    }
    return this.price.toFixed(2)
  }

  static quebec(price) {
    // this is a comment
    return price + price * 7.5 / 100
  }

  static fedtax(price) {
    return price + price * 5 / 100
  }
}

let sale = new Sale(100)
sale.decorate('fedtax')
sale.decorate('quebec')
console.log(sale.getPrice()) //112.88

getPrice()

async function asyncCall() {
  var result = await resolveAfter2Seconds();
}

const options = {
  connections: {
    compression: false
  }
}

for (let i = 0; i < 10; i++) {
  continue;
}

if (foo || bar) {}

if (true) { }

while (true) { }

switch (2) {
  case 2:
    break;
  default:
    break;
}

class EditFishForm extends Component {
  static propTypes = {
    updateFish: PropTypes.func,
    deleteFish: PropTypes.func,
    index: PropTypes.string,
    fish: PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string.isRequired
    })
  }
}`;

const json = `{
	"name": "themeweaver",
	"version": "0.1.0",
	"private": true,
	"dependencies": {
		"style-dictionary": "^2.9.0"
	}
}`

const editors = [{
	value: css,
	language: 'css'
},{
	value: js,
	language: 'javascript'
},{
	value: json,
	language: 'json'
}];

const tabs = [{
	title: 'CSS Example',
	label: 'css.css',
	iconClass: 'css-ext-file-icon',
},{
	title: 'Javascript Example',
	label: 'javascript.js',
	iconClass: 'js-ext-file-icon'
},{
	title: 'JSON Example',
	label: 'package.json',
	iconClass: 'package.json-name-file-icon'
}];

const themeMap = {
	dark: 'vs-dark',
	light: 'vs',
	hc: 'hc-black'
}

class VSCodeEditor extends React.PureComponent {
	state = {
		currentTab: 1,
		editors: editors
	}
	
	defineTheme = () => {
		const { tokenColors, currentTheme, applicationTokens, syntaxTokens } = this.props;
		const rules = tokenColors ? tokenColors : tokenizeSyntaxTokens(
			syntaxTokens,
			validateColor(applicationTokens[`editor.background`]),
			validateColor(applicationTokens[`editor.foreground`])
		);
		const base = themeMap[currentTheme] || 'light';

		this.monaco.editor.defineTheme(`myTheme`, {
			base,
			inherit: true,
			rules: rules,
			colors: applicationTokens
		});
		this.monaco.editor.setTheme(`myTheme`);
	}
	
	editorWillMount = monaco => {
		monaco.languages.register({ id: "javascript" });
		monaco.languages.register({ id: "json" });
		monaco.languages.register({ id: "css" });
		// monaco.languages.register({ id: "markdown" });
	};
	
	handleEditorDidMount = (editor, monaco) => {
		this.monaco = monaco;
		this.editor = editor;

		liftOff(monaco).then(() => {
			// monaco.editor.setModelLanguage(editor.getModel(), "json");
		});

		this.defineTheme();
	}
	
	handleTabClick = (index) => {
		this.setState({
			currentTab: index
		})
	}
	
	onChange = (newValue, e) => {
		const { editors, currentTab } = this.state;
		const newEditors = [
			...editors.slice(0, currentTab),
			Object.assign({}, editors[currentTab], { value: newValue }),
			...editors.slice(currentTab + 1)
		];
		this.setState({
			editors: newEditors
		});
  }
	
	render() {
		let width;
		const ei = document.getElementById("editor-instance");
		if (ei) {
			width = ei.offsetWidth;
		}
		if (this.monaco) {
			this.defineTheme();
		}
		
		return (
			<div className="part editor has-watermark">
				<div className="content">
					<div className="editor-group-container active">
						<VSCodeTabs
							tabs={tabs}
							selected={this.state.currentTab}
							onClick={this.handleTabClick} />
						<div className="editor-container">
							<div className="editor-instance" id="editor-instance">
								<MonacoEditor
									ref="vscode"
									theme="myTheme"
									width={width}
									onChange={this.onChange}
									options={{
										showUnused: true,
										renderWhitespace: true,
										fontSize: 14,
										fontFamily: `'Fira Code','Source Code Pro',Menlo,monospace`
									}}
									editorWillMount={this.editorWillMount}
									editorDidMount={this.handleEditorDidMount}
									{...this.state.editors[this.state.currentTab]} />
							</div>
						</div>
					</div>
				</div>
			</div>

		)
	}
}

export default VSCodeEditor
