import ExpenseItem from "./components/ExpenseItem";
import expenses from "./expenses";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      {expenses.map((expense) => (
        <ExpenseItem 
        id={expense.id} 
        key={expense.id} 
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        />
      ))}
    </div>
  );
}

export default App;
