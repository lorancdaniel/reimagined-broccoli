import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";
import Header from "./Header";
import TinderCards from "./TinderCards";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>
          <Route path="/">
            <Header />
            <TinderCards />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
