// install > import > use
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>
    DASHBOARD
  </div>
);

const AddExpensePage = () => (
  <div>
    CREATE EXPENSE
  </div>
);

const EditExpensePage = () => (
  <div>NavLink
    EDIT EXPENSE
  </div>
);

const  HelpPage = () => (
  <div>
    HELP
  </div>
);

const  NotFoundPage = () => (
  <div>
    404! - <Link to="/">Go Home</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink><br/><br/>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink><br/><br/>
    <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink><br/><br/>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink><br/><br/>
  </header>
);

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true}/>
        <Route path="/create" component={AddExpensePage}/>
        <Route path="/edit" component={EditExpensePage}/>
        <Route path="/help" component={HelpPage}/>
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
