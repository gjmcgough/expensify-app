import selectExpensesTotal from '../../selectors/expenses-total';



test('should return 0 if no expenses', () => {
  const expenses = [];
  const result = selectExpensesTotal(expenses);
  expect(result).toEqual(0);
});

test('should correctly add up a single expense', () => {
  const expenses = [{
    amount: 100
  }];
  const result = selectExpensesTotal(expenses);
  expect(result).toEqual(100);
});

test('should correctly add up multiple expenses', () => {
  const expenses = [{
      amount: 10
    },{
      amount: -10
    },{
      amount: 500
  }];
  const result = selectExpensesTotal(expenses);
  expect(result).toEqual(500);
});
