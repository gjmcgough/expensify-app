import moment from 'moment';
import expensesReducer from '../../reducers/expenses';

const testExpenses = [{
    description: 'Food Bill',
    amount: 123,
    note: '',
    createdAt: moment(0),
    id: '1'
  } , {
    description: 'Party Bill',
    amount: 999,
    note: '',
    createdAt: moment(0),
    id: '2'
}];

const testExpense = {
    description: 'Food Bill',
    amount: 123,
    note: '',
    createdAt: moment(0),
    id: '1'
  };

test('should set up default state', () => {
  const state = expensesReducer(undefined, "@@INIT");
  expect(state).toEqual([]);
});

test('should add an expense', () => {
  const state = expensesReducer(undefined, {type: "ADD_EXPENSE", expense: testExpense});
  expect(state).toEqual([testExpense]);
});

test('should remove an expense', () => {
  const state = expensesReducer(testExpenses, {type: "REMOVE_EXPENSE", id: '1'});
  expect(state).toEqual([{
    description: 'Party Bill',
    amount: 999,
    note: '',
    createdAt: moment(0),
    id: '2'
  }]);
});

test('should not remove an expense that it does not find', () => {
  const state = expensesReducer(testExpenses, {type: 'REMOVE_EXPENSE', id: '3'});
  expect(state).toEqual(testExpenses);
});

test('should edit an expense', () => {
  const updates = {
    description: 'Camping Bill',
    amount: 555
  };
  const state = expensesReducer(testExpenses, {type: "EDIT_EXPENSE", id: '2', updates: updates})
  expect(state[1]).toEqual({
    description: 'Camping Bill',
    amount: 555,
    note: '',
    createdAt: moment(0),
    id: '2'
  });
});

test('should not edit an expense it does not find', () => {
  const updates = {
    description: 'Camping Bill',
    amount: 555
  };
  const state = expensesReducer(testExpenses, {type: "EDIT_EXPENSE", id: '3', updates: updates})
  expect(state).toEqual(testExpenses);
});

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [testExpenses[1]]
  };
  const state = expensesReducer(testExpenses, action);
  expect(state).toEqual(action.expenses);
});