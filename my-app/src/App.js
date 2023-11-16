import { useState } from 'react';
import styles from './App.module.css';

function App() {
	const [operand1, setOperand1] = useState('');
	const [operand2, setOperand2] = useState('');
	const [operator, setOperator] = useState('');
	const [isResult, setIsResult] = useState(false);

	// Function to update the state of operands
	const updateOperand = (value) => {
		// Check which operand to update. If there's an operator, update the second operand. Otherwise, update the first operand.
		if (!operator) {
			setOperand1(operand1 + value);
		} else {
			setOperand2(operand2 + value);
		}
	};

	// Function to create buttons for digits and operators
	const createButtons = () => {
		const buttonsData = [
			{ label: '1', type: 'digit' },
			{ label: '2', type: 'digit' },
			{ label: '3', type: 'digit' },
			{ label: '4', type: 'digit' },
			{ label: '5', type: 'digit' },
			{ label: '6', type: 'digit' },
			{ label: '7', type: 'digit' },
			{ label: '8', type: 'digit' },
			{ label: '9', type: 'digit' },
			{ label: '0', type: 'digit' },
			{ label: '+', type: 'operator' },
			{ label: '-', type: 'operator' },
			{ label: 'C', type: 'clear' },
			{ label: '=', type: 'equal' },
		];

		const buttons = buttonsData.map((button) => {
			return (
				<button
					className={`${
						button.type === 'digit'
							? styles.digitsButton
							: styles.operatorsButton
					} ${
						button.type === 'clear' || button.type === 'equal'
							? styles.digitsButton
							: ''
					}`}
					onClick={() => {
						if (button.type === 'digit') {
							updateOperand(button.label);
							setIsResult(false);
						} else if (button.type === 'operator') {
							if (!operator) {
								setOperator(button.label);
							}
							setIsResult(false);
						} else if (button.type === 'clear') {
							setIsResult(false);
							clear();
						} else if (button.type === 'equal') {
							setIsResult(true);
							resultat();
						}
					}}
					key={button.label}
				>
					{button.label}
				</button>
			);
		});

		return buttons;
	};

	// Function to perform calculations
	// Функция для выполнения вычислений
	const resultat = () => {
		let op1 = 0;
		const op2 = parseInt(operand2);

		if (operand1) {
			op1 = parseInt(operand1);
		}
		if (!operand2) {
			return;
		}

		// Вычисляем результат и обновляем до состояния результата
		if (operator === '+') {
			const resPlus = op1 + op2;
			setOperand1(resPlus.toString());
		}

		if (operator === '-') {
			const resMinus = op1 - op2;
			setOperand1(resMinus.toString());
		}
		setOperand2('');
		setOperator('');
	};

	// Function to reset the calculator state
	const clear = () => {
		setOperand1('');
		setOperand2('');
		setOperator('');
	};

	return (
		<div className={styles.App}>
			<div className={styles.calculator}>
				<div className={`${styles.display} ${isResult ? styles.highlight : ''}`}>
					{operand1 || '0'} {operator} {operand2}
				</div>
				<div className={styles.container}>{createButtons()}</div>
				{/* ... */}
			</div>
		</div>
	);
}

export default App;
