export const handleNum = (
	{ operand1, setOperand1, operator, operand2, setOperand2, setIsResult },
	label,
) => {
	if (operator === '') {
		if (operand1 === '0') {
			setOperand1(label);
		} else {
			setOperand1(operand1 + label);
		}
	} else {
		if (operand1 === '0') {
			setOperand2(label);
		} else {
			setOperand2(operand2 + label);
		}
	}

	setIsResult(false);
};
