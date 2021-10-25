import React from "react";

const Modal = React.forwardRef((props, ref) => {

	return (
		<div className='modal' ref={ref} onMouseUp={props.onClick}>
			<div className="modal-content">
				<h2>Whodunnit?</h2>
				<div className='character-grid'>
					{props.grid}
				</div>
			</div>
		</div>
	);
});

export default Modal;