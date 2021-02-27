import React, { PureComponent } from 'react'

class Calculate extends PureComponent {
	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		// call handleCalculation
		this.props.handleCalculation();
	}

	render() {
		return (
			<div>
				<button
					className=""
					type="button"
					onClick={this.handleClick}
					name={this.props.name}
					value={this.props.value}>{this.props.display}</button>
			</div>
		)
	}
}

export default Calculate