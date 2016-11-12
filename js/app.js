import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {

    // ES6: Arrow function shorthand when function consists of single line return statement
    render() {
        return (
            <header>
                <h1>{this.props.title}</h1>
            </header>
        )
    }

};

class HourTracker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {totalHours: 0}
    }

    addHour() {
        this.setState((prevState => {return {totalHours: prevState.totalHours + 1};}));
    }


    render() {
        // ES6: Object destructuring syntax
        // let {monthlyPayment, amortization} = calculatePayment(this.state.principal, this.state.years, this.state.rate);
        return (
            <div className="content">
                <div className="form">
                    <div>
                        <p>{this.state.totalHours}</p>
                        <input type="button" onClick={this.addHour.bind(this)} value="Add Hour" />
                    </div>
                </div>
            </div>
        );
    }
};

class App extends React.Component {

    render() {
        return (
            <div>
                <Header title="Disciplain"/>
                <HourTracker />
            </div>
        );
    }

};

ReactDOM.render(<App/>, document.getElementById("app"));