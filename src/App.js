import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { MainLayout } from './layouts/main-layout';
import { ComponentIntroductionIndex } from './pages/component-introduction';
import UsersIndex from './pages/users/users-index';
import UserNew from './pages/users/user-new';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path="/" component={ComponentIntroductionIndex} />

          <Route path="/users" exact>
            <UsersIndex />
          </Route>
          <Route path='/users/new' component={UserNew} />
          
          <Route path="*" render={()=><p style={{textAlign: 'center'}}>Page Not Fount</p>}/>
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
