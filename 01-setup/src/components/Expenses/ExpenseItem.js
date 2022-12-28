import './ExpenseItem.css';
import React, {useState} from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

const ExpenseItem = (props) => {
	const [title, setTitle] = useState(props.title);

	const clickHandler = () => {
		setTitle('updated');
		console.log('clicked');
	};

	return (
		<Card className="expense-item">
			<ExpenseDate date={props.expense.date} />
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">{props.expense.amount}</div>
			</div>
			<button onClick={clickHandler}> Change Title </button>
		</Card>
	);
};

export default ExpenseItem;
