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
      expenses={expenses}
      expensesCount={expensesCount}
      expensesTotal={expensesTotal}
    />);
});

test('should render single expense singularily' , () => {

  expect(wrapper).toMatchSnapshot();
});

test('should render multiple expenses with plural expenses' , () => {
  expect(wrapper).toMatchSnapshot();
});
