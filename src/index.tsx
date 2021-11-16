import { render } from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
// import Home from './screens/Home';
// import Login from './screens/Login';
import NotFound from './screens/NotFound';

const rootElement =  document.getElementById('root');
render(
  <Router>
    <Routes>
      <Route path="/"     element={<App />} />
      {/* <Route path="home"  element={<Home />} /> */}
      {/* <Route path="login" element={<Login />} /> */}
      <Route path="*"     element={<NotFound />} />
    </Routes>
  </Router>,
  rootElement
);