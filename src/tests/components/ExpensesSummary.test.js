import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should render single expense singularily' , () => {
  const wrapper = shallow(
    <ExpensesSummary
      expensesCount={1}
      expensesTotal={300}
    />);
  expect(wrapper).toMatchSnapshot();
});

test('should render multiple expenses with plural expenses' , () => {
  const wrapper = shallow(
    <ExpensesSummary
      expensesCount={2}
      expensesTotal={900}
    />);
  expect(wrapper).toMatchSnapshot();
});
