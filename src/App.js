import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { MainLayout } from './layouts/main-layout';
import ComponentIntroductionIndex from './pages/component-introduction';
import UsersIndex from './pages/users/users-index';
import UserNew from './pages/users/user-new';
import UserEdit from './pages/users/user-edit';
import { PostIndex } from './pages/posts/posts-index';
import { HookIndex } from './pages/react-hook/hook-index';
import { PostNew } from './pages/posts/post-new';
import { PostEdit } from './pages/posts/post-edit';
import { HOCIndex } from './pages/HOC-intro';
import TestReduxCCIndex from './pages/test-redux-cc';

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path="/" component={ComponentIntroductionIndex} />
          <Route path='/hook' component={HookIndex}/>

          {/* <Route path="/users" exact>
            <UsersIndex />
          </Route> */}
          <Route path='/users' exact component={UsersIndex}/>
          <Route path='/users/new' component={UserNew} />
          <Route path='/users/:id/edit' component={UserEdit} />
          
          <Route path='/posts' exact component={PostIndex} />
          <Route path='/posts/new'  component={PostNew} />
          <Route path='/posts/:id/edit'  component={PostEdit} />

          <Route path='/hoc-intro' component={HOCIndex} />
          
          <Route path='/redux-cc' component={TestReduxCCIndex} />
          
          <Route path="*" render={()=><p style={{textAlign: 'center'}}>Page Not Fount</p>}/>
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
