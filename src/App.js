import React, { Component } from 'react';
import './App.css';
import Number from './Components/Number/Number';
import Operator from './Components/Operator/Operator';
import Output from './Components/Output/Output';
import ClearOutput from './Components/ClearOutput/ClearOutput';
import Calculate from './Components/Calculate/Calculate';

const calculate = (eq) => {
	return eval(eq);
}

class App extends Component {
	constructor() {
		super();
		this.handleClicks = this.handleClicks.bind(this);
		this.handleCalculation = this.handleCalculation.bind(this);
		this.handleOperator = this.handleOperator.bind(this);
		this.clearOutput = this.clearOutput.bind(this);
		this.state = {
			output: '',
			btnDisabled: false,
		};
	}

	handleCalculation() {
		// runs the expression and updates output state to display result
		let result = calculate(this.state.output);
		this.setState({
			output: result
		},() => {console.log("equation: ", this.state.ouput)})
	}

	handleClicks(event) {
		// updates state of output and revents consecutive operator clicks.
		this.setState((state) => ({
			output: state.output + event,
			btnDisabled: false
		}), () => { console.log("click event: ", event) })
	}

	handleOperator(event) {
		// set state of operator and gives space before and after
		this.setState((state) => ({
			output: state.output + " " + event + " ",
			btnDisabled: true
		}))
	}

	clearOutput() {
		// Clear out the output when "C" is clicked
		this.setState({
			output: ''
		}, () => {console.log("output reset: ", this.state.output)})
	}

	render() {
		let output = this.state.output;
		return (
			<div className="App">
				<header className="App-header">
					<h3>React Calculator</h3>
				</header>
				<div className="container">
					<div className="calculator">
						<div>
							<Output className="output" output={output} />
						</div>
						<div>
							<div className="row">
								<ClearOutput className="btn" clearOutput={this.clearOutput} name="clear" display="C" />
								<Operator className="btn " disabled={this.state.btnDisabled} handleOperator={this.handleOperator} name="plus-minus" display="+/-" />
								<Operator className="btn" handleOperator={this.handleOperator} name="percent" display="%" />
								<Operator className="btn operators" disabled={this.state.btnDisabled} handleOperator={this.handleOperator} name="divide" value="/" display="÷" />
							</div>
							<div className="row">
								<Number className="btn" handleClicks={this.handleClicks} name="nine" value="9" />
								<Number className="btn" handleClicks={this.handleClicks} name="eight" value="8" />
								<Number className="btn" handleClicks={this.handleClicks} name="seven" value="7" />
								<Operator className="btn operators" disabled={this.state.btnDisabled} handleOperator={this.handleOperator} name="multiply" value="*" display="*" />
							</div>
							<div className="row">
								<Number className="btn" handleClicks={this.handleClicks} name="six" value="6" />
								<Number className="btn" handleClicks={this.handleClicks} name="five" value="5" />
								<Number className="btn" handleClicks={this.handleClicks} name="four" value="4" />
								<Operator className="btn operators" disabled={this.state.btnDisabled} handleOperator={this.handleOperator} name="add" value="+" display="+" />
							</div>
							<div className="row">
								<Number className="btn" handleClicks={this.handleClicks} name="three" value="3" />
								<Number className="btn" handleClicks={this.handleClicks} name="two" value="2" />
								<Number className="btn" handleClicks={this.handleClicks} name="one" value="1" />
								<Operator className="btn operators" disabled={this.state.btnDisabled} handleOperator={this.handleOperator} name="subtract" value="-" display="-" />
							</div>
							<div className="row">
								<Number className="btn zero" handleClicks={this.handleClicks} name="zero" value="0" />
								<Number className="btn" handleClicks={this.handleClicks} name="decimal" value="." />
								<Calculate className="btn operators" handleCalculation={this.handleCalculation} name="equals" value="=" display="=" />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
