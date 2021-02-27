import React, { PureComponent } from 'react';
import '../Operator/operator.css';

class Operator extends PureComponent {
	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		this.props.handleOperator(e.target.value);
	}

	render() {
		return (
			<div>
				<button className={this.props.className}
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