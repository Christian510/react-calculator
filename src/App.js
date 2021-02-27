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
		let result = calculate(this.state.output);
		this.setState({
			output: result
		},() => {console.log("equation: ", this.state.ouput)})
	}

	handleClicks(event) {
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
						<div className="output" >
							<Output output={output} />
						</div>
						<div>
							<div className="row">
								<ClearOutput className="" clearOutput={this.clearOutput} name="clear" display="C" />
								<Operator className="button" disabled={this.state.btnDisabled} handleOperator={this.handleOperator} name="plus-minus" display="+/-" />
								<Operator className="" handleOperator={this.handleOperator} name="percent" display="%" />
								<Operator className="button" disabled={this.state.btnDisabled} handleOperator={this.handleOperator} name="divide" value="/" display="÷" />
							</div>
							<div className="row">
								<Number className="button" handleClicks={this.handleClicks} name="nine" value="9" />
								<Number className="button" handleClicks={this.handleClicks} name="eight" value="8" />
								<Number className="button" handleClicks={this.handleClicks} name="seven" value="7" />
								<Operator className="button" disabled={this.state.btnDisabled} handleOperator={this.handleOperator} name="multiply" value="*" display="*" />
							</div>
							<div className="row">
								<Number className="button" handleClicks={this.handleClicks} name="six" value="6" />
								<Number className="button" handleClicks={this.handleClicks} name="five" value="5" />
								<Number className="button" handleClicks={this.handleClicks} name="four" value="4" />
								<Operator className="button" disabled={this.state.btnDisabled} handleOperator={this.handleOperator} name="add" value="+" display="+" />
							</div>
							<div className="row">
								<Number className="button" handleClicks={this.handleClicks} name="three" value="3" />
								<Number className="button" handleClicks={this.handleClicks} name="two" value="2" />
								<Number className="button" handleClicks={this.handleClicks} name="one" value="1" />
								<Operator className="button" disabled={this.state.btnDisabled} handleOperator={this.handleOperator} name="subtract" value="-" display="-" />
							</div>
							<div className="row">
								<Number className="button" handleClicks={this.handleClicks} name="zero" value="0" />
								<Number className="button" handleClicks={this.handleClicks} name="decimal" value="." />
								<Calculate className="button" handleCalculation={this.handleCalculation} name="equals" value="=" display="=" />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
