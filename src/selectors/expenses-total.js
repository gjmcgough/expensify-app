export default (expenses) => {
  const amountsArray = [];
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let total = 0;
  if (expenses.length <= 0) {
    return total
  } else {
    expenses.map((expense) => {
      amountsArray.push(expense.amount);
    });
    total = amountsArray.reduce(reducer);
    return total;
  };
};
