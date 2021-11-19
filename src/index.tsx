import { render } from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import NotFound from './screens/NotFound';
import SignUp from './screens/SignUp';
import routes from './routes';

const rootElement =  document.getElementById('root');
render(
  <Router>
    <Routes>
      <Route path={routes.home} element={<App />} />
      <Route path={routes.signUp} element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>,
  rootElement
);