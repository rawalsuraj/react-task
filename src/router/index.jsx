import React, { Fragment, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import { EmployeeContextProvider } from "../context/employee/employee.context";

import Employees from '../pages/employee';
import AddEmployee from "../pages/employee/add";
import EditEmployee from "../pages/employee/edit";


const Routes = () => {
  return (
    <Fragment>
      <EmployeeContextProvider>
        <Suspense fallback={'loading...'}>
          <Router>
            <Switch>
              <Route path="/" exact component={Employees} />
              <Route path="/add" exact component={AddEmployee} />
              <Route path="/edit/:id" exact component={EditEmployee} />
            </Switch>
          </Router>
        </Suspense>
      </EmployeeContextProvider>
    </Fragment>
  );
};

export default Routes;
