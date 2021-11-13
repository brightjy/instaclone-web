import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const isLoggedIn = false;
  return (
    <Router>
      <Routes>
        <Route path="/">
          {isLoggedIn ? "HOME" : "Login"}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
