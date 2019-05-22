import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, removeExpense, editExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';

const createMockStore = configureMockStore([thunk]);

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
  const result = addExpense(expenses[2]);
  expect(result).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  });
});

test('should add expense to database and store', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: 'Mouse',
    note: 'Eek a',
    amount: 12345,
    createdAt: 10000
  };
  store.dispatch(startAddExpense(expenseData)).then(() => {
    expect(2).toBe(2);
    done();
  })
});

test('should add expense with defaults to database and store', () => {
  
});

// test('should set up add expense action object with DEFAULT values', () => {
//   const result = addExpense();
//   expect(result).toEqual({
//     type: 'ADD_EXPENSE',
//     expense: {
//       description: '',
//       amount: 0,
//       createdAt: 0,
//       note: '',
//       id: expect.any(String)
//     }
//   });
// });
