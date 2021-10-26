import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Modal = React.forwardRef((props, ref) => {

	return (
		<div className='modal' ref={ref} key={Number.toString()}>
			<div className="modal-content">
				<FontAwesomeIcon icon={faTimes} className='modal-cross' onClick={props.onClick}/>
				<h2 style={{fontSize: '3.2em'}} className="page-header">Who's the culprit?</h2>
				<h2 style={{textAlign: 'center'}}>It's the ...</h2>
				<div className='modal-grid'>
					{props.grid}
				</div>
				<p style={{textAlign: 'center'}}>{props.answer}</p>
				<div style={{textAlign: 'center'}}>
						<Link to='/'>
					<button onClick={props.newGame} style={{border:'none', backgroundColor:'#000', color: '#fff', borderRadius: '4px', width: '196px', height: '32px', cursor: 'pointer'}}>
						<p style={{margin: 0}}>New Game?</p>
					</button>
						</Link>
				</div>
			</div>
		</div>
	);
});

export default Modal;