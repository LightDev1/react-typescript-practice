import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { AboutPage } from './pages/AboutPage';
import { TodosPage } from './pages/TodosPage';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" exact>
            <TodosPage />
          </Route>
          <Route path="/about" exact>
            <AboutPage />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
