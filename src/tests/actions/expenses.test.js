import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('should set up remove expense action object', () => {
  const result = removeExpense('123abc');
  expect(result).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should set up edit expense action object', () => {
  const result = editExpense('123abc', {description: "New description", amount: 100});
  expect(result).toEqual({
    type:'EDIT_EXPENSE',
    updates: {
      description: "New description",
      amount: 100
    },
    id: '123abc'
  });
});

test('should set up add expense object with input values', () => {
  const expenseData = {
    description: 'Test Description',
    amount: 69,
    createdAt: 14343523532,
    note: 'Testing this note'
  }
  const result = addExpense(expenseData);
  expect(result).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('should set up add expense action object with DEFAULT values', () => {
  const result = addExpense();
  expect(result).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      description: '',
      amount: 0,
      createdAt: 0,
      note: '',
      id: expect.any(String)
    }
  });
});
