// import ReactDom from "react-dom";
import React from "react";

import "./App.css";

class App extends React.Component {
  state = {
    expenses: [],
    newExpenseName: "",
    newExpenseAmount: "",
    SelectedExpense: "",
  };
  expensesTypes = ["Food", "Transport", "Entertainment", "Grocery"];
  updateExpenseName = (event) => {
    this.setState({
      newExpenseName: event.target.value,
    });
  };
  add = () => {
    let newExpense = {
      id: Math.random() * 10000 + 9999,
      title: this.state.newExpenseName,
      amount: this.state.newExpenseAmount,
      type: this.state.SelectedExpense,
    };
    let expenses = [...this.state.expenses, newExpense];
    this.setState({
      expenses,
      newExpenseName: "",
      newExpenseAmount: "",
    });
  };
  remove = (expenses_to_remove) => {
    //find the expense to remove
    let expenses = this.state.expenses.filter((e) => {
      return e.id !== expenses_to_remove.id;
    });
    this.setState({
      expenses,
    });
  };
  renderList() {
    let a = [];
    for (let i = 0; i < this.state.expenses.length; i++) {
      a.push(
        <li className="list-items">
          {this.state.expenses[i].title}:{" "}
          <strong>${this.state.expenses[i].amount}</strong>-{" "}
          {this.state.expenses[i].type}
          <button
            className="button"
            onClick={() => {
              this.remove(this.state.expenses[i]);
            }}
          >
            Remove
          </button>
        </li>
      );
    }
    return a;
  }
  ShowTotal() {
    let Total = this.state.expenses.reduce((total, expense) => {
      return total + parseFloat(expense.amount);
    }, 0);
    return <span>{Total}</span>;
  }

  render() {
    return (
      <section className="App section">
        <div className="container">
          <h1 className="title">Expense Tracker</h1>
          <div className="form">
            <div className="field">
              <label className="label">Expense Name</label>
              <div className="control">
                <input
                  className="input"
                  value={this.state.newExpenseName}
                  type="text"
                  placeholder="Enter name of expense"
                  onChange={this.updateExpenseName}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Expense Amount</label>
              <div className="control">
                <input
                  className="input"
                  value={this.state.newExpenseAmount}
                  type="text"
                  placeholder="Enter name of expense"
                  onChange={(event) => {
                    this.setState({
                      newExpenseAmount: event.target.value,
                    });
                  }}
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Expense Type</label>
              <select
                value={this.state.SelectedExpense}
                options={this.state.expensesTypes}
                onChange={(event) => {
                  this.setState({
                    SelectedExpense: event.target.value,
                  });
                }}
              >
                {this.expensesTypes.map((e) => {
                  return <option>{e}</option>;
                })}
              </select>
            </div>
            <div className="control">
              <input
                type="button"
                className="button"
                onClick={this.add}
                value="Add"
              />
            </div>
          </div>
          <ul className="list" style={{ marginTop: "2em" }}>
            {this.renderList()}
          </ul>
        </div>
        <div className="container">Total spent:${this.ShowTotal()}</div>
      </section>
    );
  }
}

export default App;
