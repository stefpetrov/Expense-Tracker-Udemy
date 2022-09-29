import React, { useState } from "react";

import "./Expenses.css";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2019");

  const filterChangeHandler = (enteredYear) => {
    setFilteredYear(enteredYear);
  };

  const filteredExpenses = props.items.filter((expense) => expense.date.getFullYear().toString() === filteredYear)

  return (
    <Card className="expenses">
      <ExpensesFilter
        selectedYear={filteredYear}
        onChangeYearFilter={filterChangeHandler}
      />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
