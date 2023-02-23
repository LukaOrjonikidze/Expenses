import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selected, setSelected] = useState("2020");
  const selectHandler = (selectedInput) => {
    setSelected(selectedInput);
  };
  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === selected
  );



  return (
    <Card className="expenses">
        <ExpensesFilter selected={selected} onSelect={selectHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
    </Card>
  );
};
export default Expenses;
