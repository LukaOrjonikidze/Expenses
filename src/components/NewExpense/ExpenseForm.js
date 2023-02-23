import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    date: "",
  });
  
  const changeHandler = (event) => {
    const { value, name } = event.target;
    setFormData((prevValue) => ({ ...prevValue, [name]: value }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
        ...formData,
        amount: +formData.amount,
        date: new Date(formData.date)
    };
    props.onSaveExpenseData(expenseData);
    setFormData({
      title: "",
      amount: "",
      date: "",
    });

  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            value={formData.title}
            name="title"
            onChange={changeHandler}
            type="text"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={formData.amount}
            name="amount"
            onChange={changeHandler}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={formData.date}
            name="date"
            onChange={changeHandler}
            type="date"
            min="2019-01-01"
            max="2023-12-31"
          />
        </div>
        <div className="new-expense__actions">
          <button onClick={props.onCancel} type="button">
            Cancel
          </button>
          <button type="submit">
            Add Expense
          </button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
