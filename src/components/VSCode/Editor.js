import React from 'react';
import MonacoEditor from 'react-monaco-editor';

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

const html = "<html><!-- // !!! Tokens can be inspected using F1 > Developer: Inspect Tokens !!! -->\n<head>\n	<!-- HTML comment -->\n	<style type=\"text/css\">\n		/* CSS comment */\n	</style>\n	<script type=\"javascript\">\n		// JavaScript comment\n	</"+"script>\n</head>\n<body></body>\n</html>";

class VSCodeEditor extends React.PureComponent {
	render() {
		return (
			<div className="editor-container">
				<div className="editor-instance">
					<MonacoEditor
						height="100%"
						width="100%"
						ref="vscode"
						theme="myTheme"
						language="javascript"
						value={code} />
				</div>
			</div>
		)
	}
}

export default VSCodeEditor
