import React from 'react';
import { 
  Container, 
  Row,
  Col
} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import NavigationBar from './layout/NavigationBar';
import Clock from './components/Clock';
import Counter from './components/Counter'
import CounterPage from './pages/CounterPage';

function App() {
  return (
    <Router>
      <Container fluid className="header">
        <Container >
          <NavigationBar />
        </Container>
      </Container>
      <Container >
        <Row>
        <Switch>
          <Route path="/watch">
            <Clock />
          </Route>
          <Route path="/counter">
            <CounterPage />
          </Route>
        </Switch>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
