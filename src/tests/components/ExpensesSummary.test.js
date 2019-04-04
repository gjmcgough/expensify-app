import React from 'react';
import { shallow } from 'enzyme';
import ExpensesSummary from '../../components/ExpensesSummary';
import expenses from '../fixtures/expenses';

test('should render single expense singularily' , () => {
  const wrapper = shallow(
    <ExpensesSummary
      expensesCount={expensesCount([expenses[0]])}
      expensesTotal={expensesTotal([expenses[0]])}
    />);
  expect(wrapper).toMatchSnapshot();
});

test('should render multiple expenses with plural expenses' , () => {
  // wrapper.find('ExpensesSummary').prop('expenses')(expenses);
  // expect(wrapper).toMatchSnapshot();
});
