import React, { PureComponent } from 'react'

class Evaluator extends PureComponent {
	render() {

		return (
			<div>
					{this.props.output}
			</div>
		)
	}
}

export default Evaluator