export default (expenses) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  if (expenses.length <= 0) {
    return 0;
  } else {
    const expensesArray = expenses.map((expense) => expense.amount);
    const total = expensesArray.reduce(reducer);
    return total;
  };
};
