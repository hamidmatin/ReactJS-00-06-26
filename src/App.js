import './App.css';
import { MainLayout } from './layouts/main-layout';
import { ComponentIntroductionIndex } from './pages/component-introduction';
import UsersIndex from './pages/users/users-index';

function App() {
  return (
    <MainLayout>
      <ComponentIntroductionIndex />
      {/* <UsersIndex /> */}
    </MainLayout>
  );
}

export default App;
