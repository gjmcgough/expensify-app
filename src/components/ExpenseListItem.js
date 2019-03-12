import React from 'react';

export default (props) => (
  <div>
    <h2>Expense: {props.description}</h2>
    <p>Amount: ${props.amount} - Created at: {props.createdAt}</p>
  </div>
);
