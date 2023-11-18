export const handleResult = ({
	operand1,
	setOperand1,
	operator,
	setOperator,
	operand2,
	setOperand2,
	setIsResult,
}) => {
	if (operand2 !== '') {
		switch (operator) {
			case '+': {
				setOperand1(Number(operand1) + Number(operand2));
				break;
			}
			case '-': {
				setOperand1(Number(operand1) - Number(operand2));
				break;
			}
			case '/': {
				setOperand1(Number(operand1) / Number(operand2));
				break;
			}
			default:
		}
		setOperand2('');
	}
	setOperator('');
	setIsResult(true);
};
