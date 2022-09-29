import "./ExpensesList.css"
import ExpensItem from "./ExpenseItem";


const ExpensesList = (props) => {

    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">No expenses found!</h2>
    }

    return (
        <ul className="expenses-list">
            {props.items.map((expense) => (
                <ExpensItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                />
            ))}
        </ul>
    )


}


export default ExpensesList