import Expenses from './components/Expenses/Expenses';
import React from 'react';

const App = () => {
	const expenses = [
		{
			id: 'e1',
			title: 'Toilet Paper',
			amount: 92.12,
			date: new Date(2020, 7, 14),
		},
		{
			id: 'e2',
			title: 'Car Insurance',
			amount: 294.78,
			date: new Date(2020, 2, 28),
		},
		{
			id: 'e3',
			title: 'New TV',
			amount: 799.98,
			date: new Date(2020, 2, 12),
		},
		{
			id: 'e4',
			title: 'New Desk (Wooden)',
			amount: 450,
			date: new Date(2021, 5, 12),
		  }
	];
	return (
		<div>
			<h2>Let's get started!</h2>
			<Expenses items= {expenses}/>
		</div>
	);
}

export default App;
