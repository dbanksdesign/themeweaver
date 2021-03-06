import React from 'react';

// https://stackoverflow.com/questions/39501289/in-reactjs-how-to-copy-text-to-clipboard
class CopyCode extends React.Component {

	constructor(props) {
		super(props);

		this.state = { copySuccess: '' }
	}

	copyToClipboard = (e) => {
		this.textArea.select();
		document.execCommand('copy');
		e.target.focus();
		this.setState({ copySuccess: 'Copied!' });
		
		setTimeout(() => {
			this.setState({ copySuccess: '' });
		}, 2000);
	};

	render() {
		const { buttonLabel, text } = this.props;
		
		return (
			<section className="copy-section">
				{
				/* Logical shortcut for only displaying the 
						button if the copy command exists */
				document.queryCommandSupported('copy') &&
					<div className="copy-button-container">
						<button className="copy-button block" onClick={this.copyToClipboard}>{buttonLabel||'Copy'}</button> 
						{this.state.copySuccess.length > 0 &&
							<span className="copy-toast">{this.state.copySuccess}</span>}
					</div>
				}
				<pre className="copy-text">
					<code>{text}</code>
					<textarea
						className="copy-textarea"
						ref={(textarea) => this.textArea = textarea}
						value={text}
						readOnly={true}
						aria-hidden={true} />
				</pre>
			</section>
		);
	}

}

export default CopyCode;
