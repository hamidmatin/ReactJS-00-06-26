import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { MainLayout } from './layouts/main-layout';
import { ComponentIntroductionIndex } from './pages/component-introduction';
import UsersIndex from './pages/users/users-index';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path="/" component={ComponentIntroductionIndex} />
          
          <Route path="/users" >
            <UsersIndex />
          </Route>

        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
