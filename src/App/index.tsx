import { HashRouter as Router } from "react-router-dom";

import { Pages } from "Pages";

import "Styles/main.css";

const App = (): JSX.Element => {
  localStorage.clear();
  return (
    <Router>
      <Pages />
    </Router>
  );
};

export { App };
