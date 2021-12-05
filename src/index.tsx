import { render } from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import NotFound from './screens/NotFound';
import SignUp from './screens/SignUp';
import routes from './routes';
import { ThemeProvider } from "styled-components";
import { GlobalStyles, ourTheme } from "./styles";
import { HelmetProvider } from 'react-helmet-async';
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo';

const rootElement =  document.getElementById('root');
render(
  <ApolloProvider client={client}>
    <HelmetProvider>
      <ThemeProvider theme={ourTheme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path={routes.home} element={<App />} />
          <Route path={routes.signUp} element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
      </ThemeProvider>
    </HelmetProvider>
  </ApolloProvider>,
  rootElement
);