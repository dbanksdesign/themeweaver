import React, {useRef} from 'react';

const CopyButton = ({ label, string }) => {
	const inputRef = useRef();
	
	const copyText = (e) => {
		inputRef.current.select();
		document.execCommand('copy');
		e.target.focus();
	}
	
	return (
		<>
			<button onClick={copyText}>{label}</button>
			<input style={{
				position: 'absolute',
				top: '-9999px'
			}} ref={inputRef} value={string} />
		</>
	)
}

export default CopyButton;
