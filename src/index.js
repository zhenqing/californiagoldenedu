import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.4.0";

// pages for this product
import HomePage from "views/HomePage/HomePage.jsx";
import SectionTabs from "views/HomePage/Sections/SectionTabs.jsx";
import SectionPills from "views/HomePage/Sections/SectionPills.jsx";
import SectionCompletedExamples from "views/HomePage/Sections/SectionCompletedExamples.jsx";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/school-introduction" component={SectionTabs} />
      <Route path="/escs-intl-program" component={SectionPills} />
      <Route path="/contact-info" component={SectionCompletedExamples} />
      <Route path="/" component={HomePage} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
