export default (expenses) => {
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const expensesArray = expenses.map((expense) => expense.amount);
  const total = expensesArray.reduce(reducer, 0); //2nd argument is the initial value, so with no expenses this will return 0
  return total;
};
