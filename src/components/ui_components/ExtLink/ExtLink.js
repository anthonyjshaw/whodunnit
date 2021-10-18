import React from "react";

const ExtLink = (props) => {
	return <a href={props.link} target="_blank" rel="noreferrer">{props.children}</a>
}
export default ExtLink;