import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.css";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";
import Header from "./Header";
import TinderCards from "./TinderCards";

function App() {
  return (
    <div className="app">
      <Router>
        <Route render={({ location }) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={300} // Duration of the transition
              classNames="fade" // Prefix for the transition classNames
            >
              <Switch location={location}>
                <Route path="/chat/:person">
                  <div className="route-section">
                    <Header backButton="/chat" />
                    <ChatScreen />
                  </div>
                </Route>
                <Route path="/chat">
                  <div className="route-section">
                    <Header backButton="/" />
                    <Chats />
                  </div>
                </Route>
                <Route path="/">
                  <div className="route-section">
                    <Header />
                    <TinderCards />
                  </div>
                </Route>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
      </Router>
    </div>
  );
}

export default App;