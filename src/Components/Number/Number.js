import React, { PureComponent } from 'react'

class Number extends PureComponent {
	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this);

	}

	handleClick(e) {
		// Create a function in Calculator that tracks and concatinates consecutive clicks
		this.props.handleClicks(e.target.value);
	}

	render() {
		return (
			<div>
				<button className=""
								type="button"
								onClick = {this.handleClick}
								name={this.props.name}
								value={this.props.value} >{this.props.value}</button>
			</div>
		)
	}
}

export default Number