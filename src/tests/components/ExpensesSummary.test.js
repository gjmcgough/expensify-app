import React from 'react';
import { shallow } from 'enzyme';
import ExpensesSummary from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

let expensesCount, expensesTotal, wrapper;

beforeEach(() => {
  expensesCount = jest.fn();
  expensesTotal = jest.fn();
  wrapper = shallow(
    <ExpensesSummary
      expensesCount={expensesCount}
      expensesTotal={expensesTotal}
      expenses={expenses}
    />);
});

test('should render single expense singularily' , () => {
    wrapper.find('ExpensesSummary').setProps('expenses')([expenses[0]]);
    expect(expensesCount).toHaveBeenLastCalledWith([expenses[0]]);
    expect(expensesTotal).toHaveBeenLastCalledWith([expenses[0]]);
  // wrapper.find('ExpensesSummary').prop('expenses')([expenses[1]]);
  // expect(expensesCount).toHaveBeenLastCalledWith([expenses[1]]);
  // expect(expensesTotal).toHaveBeenLastCalledWith([expenses[1]]);
});

test('should render multiple expenses with plural expenses' , () => {
  // wrapper.find('ExpensesSummary').prop('expenses')(expenses);
  // expect(wrapper).toMatchSnapshot();
});
