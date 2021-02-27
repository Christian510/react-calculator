import React, { PureComponent } from 'react'

class ClearOutput extends PureComponent {
	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.clearOutput();
	}

	render() {
		return (
			<div>
			<button
				className={this.props.className}
				type="button"
				onClick={this.handleClick}
				name={this.props.name}>{this.props.display}</button>
			</div >
		)
	}
}

export default ClearOutput