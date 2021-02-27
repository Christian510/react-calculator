import React, { PureComponent } from 'react'

class Operator extends PureComponent {
	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		// Write a function that allows for one click to add the operator to evaluation
		// But, prevents consecutive clicks
		// And, can only be clicked again once a number had been clicked.
		this.props.handleOperator(e.target.value);
	}

	render() {
		return (
			<div>
				<button 
					className=""
					disabled={this.props.disabled}
					type="button" 
					onClick={this.handleClick}
					name={this.props.name} 
					value={this.props.value}>{this.props.display}</button>
			</div>
		)
	}
}

export default Operator