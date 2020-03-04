import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import { Registry } from "monaco-textmate";
import { wireTmGrammars } from "monaco-editor-textmate";
import VSCodeTabs from './Tabs';

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
  }
});

async function liftOff(monaco) {
  // map of monaco "language id's" to TextMate scopeNames
  const grammers = new Map();
	// grammers.set("c++", "source.cpp");
	grammers.set("javascript", "source.js");
	grammers.set("json", "source.json");

  await wireTmGrammars(monaco, registry, grammers);
}

const tokenizeSyntaxTokens = (tokenObject, background, foreground) => {
	const toRet = [{ background, foreground }];
	Object.keys(tokenObject).forEach(key => {
		const token = {};
		const foreground = tokenObject[key];
		// if *
		if (key.indexOf('*') > -1) {
			token.token = key.replace('.*','');
		} else {
			token.token = key;
		}
		// if .fontStyle
		if (key.indexOf('.fontStyle') > -1) { return; }
		
		// Test to make sure valid hex, a valid hex has
		// 3,4,6, or 8 digits (+#)
		if (![7,9].includes(foreground.length)) {
			console.log(`invalid hex: ${foreground}`);
			return;
		}
		token.foreground = tokenObject[key];
		toRet.push(token);
	});
	return toRet;
}

const code = `'use strict'

/**
 * This is a *italics* **bold** and [a link](https://dbanks.design).
 */
class Sale {
  constructor(price) {
    ;[this.decoratorsList, this.price] = [[], price]
  }

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

//deeply nested
/**
 * 
 */

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

class VSCodeEditor extends React.PureComponent {
	defineTheme = () => {
		this.monaco.editor.defineTheme(`myTheme`, {
			base: 'vs-dark',
			inherit: false,
			rules: tokenizeSyntaxTokens(
				this.props.syntaxTokens,
				this.props.applicationTokens[`editor.background`],
				this.props.applicationTokens[`editor.foreground`]
			),
			colors: this.props.applicationTokens
		});
		this.monaco.editor.setTheme(`myTheme`);
	}
	
	editorWillMount = monaco => {
		monaco.languages.register({ id: "javascript" });
		monaco.languages.register({ id: "json" });
	};
	
	handleEditorDidMount = (editor, monaco) => {
		this.monaco = monaco;
		this.editor = editor;
		console.log(this.editor);
		console.log(this.monaco);
		
		// editor.focus();

    liftOff(monaco).then(() => {
      // monaco.editor.setModelLanguage(editor.getModel(), "json");
    });

		this.defineTheme();
	}
	
	render() {
		if (this.monaco) {
			this.defineTheme();
		}
		
		return (
			<div className="part editor has-watermark">
				<div className="content">
					<div className="editor-group-container active">
						<VSCodeTabs />
						<div className="editor-container">
							<div className="editor-instance">
								<MonacoEditor
									height="100%"
									width="100%"
									ref="vscode"
									theme="myTheme"
									language="javascript"
									editorWillMount={this.editorWillMount}
									editorDidMount={this.handleEditorDidMount}
									value={code} />
							</div>
						</div>
					</div>
				</div>
			</div>

		)
	}
}

export default VSCodeEditor
