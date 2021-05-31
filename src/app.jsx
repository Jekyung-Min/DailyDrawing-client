import "./app.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CommunityPage from "./pages/communityPage/communityPage";
import EnterPage from "./pages/enterPage/enterPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <EnterPage></EnterPage>
        </Route>
        <Route path="/community">
          <CommunityPage></CommunityPage>
        </Route>
        <Route path="/main"></Route>
        <Route path="/list"></Route>
        <Route path="/check"></Route>
      </Switch>
    </Router>
  );
};

export default App;
