import React from 'react';
import './Modal.scss';

const Modal = ({ children, hideModal }) => {
	return (
		<>
			<div className="modal-wrapper" onClick={hideModal}>
			</div>
			<div className="modal">
				<button className="modal-close" onClick={hideModal}>
					<span className="codicon codicon-close" />
				</button>
				{children}
			</div>
		</>
	)
};

export default Modal;
