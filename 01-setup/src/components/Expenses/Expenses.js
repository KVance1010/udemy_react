import './Expenses.css';
import React from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';

const Expenses = (props) => {
	const expense1 = props.items[0];
	const expense2 = props.items[1];
	const expense3 = props.items[2];

	return (
		<Card className="expenses">
			<ExpenseItem expense={expense1} />
			<ExpenseItem expense={expense2} />
			<ExpenseItem expense={expense3} />
		</Card>
	);
}

export default Expenses;
