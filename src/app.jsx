import React, { Component } from 'react';


class App extends Component {
  constructor() {
    super();
    this.state = {
      amountDue: '0',
      amountReceived: '0',
      output: '0',
      twentiesDue: '0',
      tensDue: '0',
      fivesDue: '0',
      onesDue: '0',
      quartersDue: '0',
      dimesDue: '0',
      nickelsDue: '0',
      penniesDue: '0',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.calculatePayment = this.calculatePayment.bind(this);
  }

  handleInputChange(event) {
    event.preventDefault()
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  calculatePayment (event) {
    event.preventDefault();
    const amountDue2 = Number(this.state.amountDue);
    const amountReceived2 = Number(this.state.amountReceived);
    let changeDue = (amountReceived2*100 - amountDue2*100).toFixed(0);
    let totalDue = changeDue/100;
    const twenties = 2000;
    const tens = 1000;
    const fives = 500;
    const ones = 100;
    const quarters = 25;
    const dimes = 10;
    const nickels = 5;
    const pennies = 1;
    let twentiesDue2 = ' ';
    let tensDue2 = ' ';
    let fivesDue2 = ' ';
    let onesDue2 = ' ';
    let quartersDue2 = ' ';
    let dimesDue2 = ' ';
    let nickelsDue2 = ' ';
    let penniesDue2 = ' ';
    let remaining = ' ';

    if (changeDue >= 2000) {
      twentiesDue2 = Math.floor(changeDue/twenties);
      remaining = changeDue % twenties;
      changeDue = remaining;
    } else {twentiesDue2='0'}
    if (changeDue >= 1000) {
      tensDue2 = Math.floor(changeDue/tens);
      remaining = changeDue % tens;
      changeDue = remaining;
    } else {tensDue2='0'}
    if (changeDue >= 500) {
      fivesDue2 = Math.floor(changeDue/fives);
      remaining = changeDue % fives;
      changeDue = remaining;
    } else {fivesDue2='0'}
    if (changeDue >= 100) {
      onesDue2 = Math.floor(changeDue/ones);
      remaining = changeDue % ones;
      changeDue = remaining;
    } else {onesDue2='0'}
    if (changeDue >= 25) {
      quartersDue2 = Math.floor(changeDue/quarters);
      remaining = changeDue % quarters;
      changeDue = remaining;
    } else {quartersDue2='0'}
    if (changeDue >= 10) {
      dimesDue2 = Math.floor(changeDue/dimes);
      remaining = changeDue % dimes;
      changeDue = remaining;
    } else {dimesDue2='0'}
    if (changeDue >= 5) {
      nickelsDue2 = Math.floor(changeDue/nickels);
      remaining = changeDue % nickels;
      changeDue = remaining;
    } else {nickelsDue2='0'}
    if (changeDue >= 1) {
      penniesDue2 = Math.floor(changeDue/pennies);
      remaining = changeDue % pennies;
      changeDue = remaining;
    } else {penniesDue2='0'}

    this.setState({
      output: `${totalDue}`,
      twentiesDue: `${twentiesDue2}`,
      tensDue:`${tensDue2}`,
      fivesDue: `${fivesDue2}`,
      onesDue: `${onesDue2}`,
      quartersDue: `${quartersDue2}`,
      dimesDue: `${dimesDue2}`,
      nickelsDue: `${nickelsDue2}`,
      penniesDue: `${penniesDue2}`,
    })
  }

  render() {
    let { amountDue, amountReceived, output } = this.state;
    return (
      <div>
        <div className="container">
          <h1 className="headerFormat">Change Calculator</h1>
          <hr size="15px" />
          <div style={{display: 'flex'}}></div>
          <div className="row">
            <div className="col-4">
              <div className="card">
                <div className="card-header">Enter Information
                </div>
                <div className="card-body">
                  <label className="question">How much is due?</label>
                  <input
                    type="number"
                    className="form-control"
                    onChange={this.handleInputChange}
                    name="amountDue"
                    placeholder="$0"
                     />
                  <br/>
                  <label className="question">How much was received?</label>
                  <input
                    type="number"
                    className="form-control"
                    onChange={this.handleInputChange}
                    name="amountReceived"
                    placeholder="$0"
                     />
                </div>
                <div className="card-footer text-muted">
                  <button
                    type="button"
                    className="btn btn-primary btn-block calculate"
                    name="submit"
                    onClick={this.calculatePayment}>Calculate</button>
                </div>
              </div>
            </div>
            <div className="Col-8">
              <div className="card text-center">
                <div className="card-header">
                  <div className="alert alert-success" role="alert">
                    The total change due is ${this.state.output}
                  </div>
                {/* </div> */}
                <div className="card-body">
                  <div className="row">
                      <div className="col col-offset-2" name="twenties">
                        <h2>Twenties</h2>
                        <p className="change">{this.state.twentiesDue}</p>
                      </div>
                      <div className="col col-offset-2" name="tens">
                        <h2>Tens</h2> <p className="change">{this.state.tensDue}</p>
                      </div>
                      <div className="col col-offset-2" name="fives">
                        <h2>Fives</h2> <p className="change">{this.state.fivesDue}</p>
                      </div>
                      <div className="col col-offset-2" name="ones">
                        <h2>Ones</h2> <p className="change">{this.state.onesDue}</p>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="row">
                      <div className="col col-offset-2" name="quarters">
                        <h2>Quarters</h2> <p className="change">{this.state.quartersDue}</p>
                      </div>
                      <div className="col col-offset-2" name="dimes">
                        <h2>Dimes</h2> <p className="change">{this.state.dimesDue}</p>
                      </div>
                      <div className="col col-offset-2" name="nickels">
                        <h2>Nickels</h2> <p className="change">{this.state.nickelsDue}</p>
                      </div>
                      <div className="col col-offset-2" name="pennies">
                        <h2>Pennies</h2> <p className="change">{this.state.penniesDue}</p>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          </div>
      </div>
      </div>
    )
  }
}

export default App;
