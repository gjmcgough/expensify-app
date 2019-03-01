// install > import > use
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>
    DASHBOARD
  </div>
);

const AddExpensePage = () => (
  <div>
    EXPENSE
  </div>
);

const EditExpensePage = () => (
  <div>
    EDIT
  </div>
);

const  HelpPage = () => (
  <div>
    HELP
  </div>
);

const  NotFoundPage = () => (
  <div>
    404 Page not found!
  </div>
);

const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true}/>
      <Route path="/create" component={AddExpensePage}/>
      <Route path="/edit" component={EditExpensePage}/>
      <Route path="/help" component={HelpPage}/>
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
