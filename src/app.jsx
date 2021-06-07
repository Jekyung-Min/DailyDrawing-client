import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CommunityPage from "./pages/communityPage/communityPage";
import EnterPage from "./pages/enterPage/enterPage";
import { useState } from "react";

const App = () => {
  const [showSignModal, setShowSignModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <EnterPage
            showProfileModal={showProfileModal}
            setShowProfileModal={setShowProfileModal}
            setShowSignModal={setShowSignModal}
            showSignModal={showSignModal}
          ></EnterPage>
        </Route>
        <Route path="/community">
          <CommunityPage
            showProfileModal={showProfileModal}
            setShowProfileModal={setShowProfileModal}
            setShowSignModal={setShowSignModal}
            showSignModal={showSignModal}
          ></CommunityPage>
        </Route>
        <Route path="/main"></Route>
        <Route path="/list"></Route>
        <Route path="/check"></Route>
      </Switch>
    </Router>
  );
};

export default App;
