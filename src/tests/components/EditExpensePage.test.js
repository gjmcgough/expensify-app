import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let history, editExpense, removeExpense, wrapper;

beforeEach(() => {
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      editExpense={editExpense}
      removeExpense={removeExpense}
      history={history}
    />);
})

test('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
})

test('should handle removeExpense', () => {
  console.log(expenses[2]);
  wrapper.find('button').simulate('click')(expenses[2].id);
  expect(history.push).toHaveBeenLastCalledWith('/');
})
