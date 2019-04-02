import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

 export const ExpenseListItem = (props) => (
  <div>
    <Link to={`/edit/${props.id}`}>
      <h2>Expense: {props.description}</h2>
    </Link>
    <p>
      Amount: {numeral(props.amount / 100).format('$0,0.00')}
      -
      Created at: {moment(props.createdAt).format('MMMM Do, YYYY')}
    </p>
  </div>
);

export default connect()(ExpenseListItem);
