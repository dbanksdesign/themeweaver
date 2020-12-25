import React, {Component} from 'react';
import clsx from 'clsx';
import './FileInput.scss';

class FileInput extends Component {
	state = {
		drag: false,
		fileName: '',
	}
	dragCounter = 0
	
	handleDragOver = (e) => {
		e.preventDefault();
		e.stopPropagation();
	}
	
	handleDragEnter = (e) => {
		e.preventDefault();
		e.stopPropagation();
		this.dragCounter++
		if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
			this.setState({drag: true})
		}
	}
	
	handleDragLeave = (e) => {
		e.preventDefault();
		e.stopPropagation();
		this.dragCounter--;
		if (this.dragCounter === 0) {
			this.setState({drag: false})
		}
	}
	
	handleDrop = (e) => {
		e.preventDefault()
		e.stopPropagation()
		this.setState({drag: false})
		if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
			this.handleFiles(e.dataTransfer.files);
			// this.props.handleDrop(e.dataTransfer.files)
			// e.dataTransfer.clearData()
			this.dragCounter = 0
		}
	}
	
	handleFiles = (fileList) => {
		let fileReader = new FileReader();
		const {onUpload} = this.props;
		fileReader.onloadend = function() {
			if (onUpload) {
				onUpload(this.result);
			}
		};
		if (fileList.length > 1) {
			console.log("too many files");
		}
		const file = fileList[0];
		// TODO: add file type checks here
		this.setState({
			fileName: file.name
		});
		
		fileReader.readAsText(file);
	}
	
	onChange = (e) => {
		this.handleFiles(e.target.files);
	}
	
	render() {
		const { fileName, drag } = this.state;
		return (
			<label className={clsx(
				`file-input`,
				drag && `dragging`
			)}
				onDrop={this.handleDrop}
				onDragOver={this.handleDragOver}
				onDragEnter={this.handleDragEnter}
				onDragLeave={this.handleDragLeave}>
				<input className="file-input-input" type="file" onChange={this.onChange} />
				<div className="file-input-button">
					{fileName ? <span className="file-input-name">{fileName}</span> : <span className="file-input-text">
						<span className="codicon codicon-new-file" />
						Drop a file here or <u>browse files</u>
					</span>}
				</div>
				
			</label>
		)
	}
}

export default FileInput;
