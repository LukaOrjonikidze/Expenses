import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [formShown, setFormShown] = useState(false);

  const saveExpanseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
    hideForm();
  };
  const showForm = () => {
    setFormShown(true);
  }
  const hideForm = () => {
    setFormShown(false);
  }

  return (
    <div className="new-expense">
      {formShown ? (
        <ExpenseForm onSaveExpenseData={saveExpanseDataHandler} onCancel={hideForm} />
      ) : (
        <button onClick={showForm}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
