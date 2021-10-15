import logo from './logo.svg';
import './App.css';

// import class|function|variable from "module"
// "module" => import from node_modules
// "./module" => import from current folder
// "../module" => import from one level up
// default module ext => js
import studentList, { myFucntion, Course} from "./react-modules/my-module"
import stl, {myFucntion as mf, Course as crs} from "./react-modules/my-module"

function App() {
  myFucntion()

  const reactCourse = new Course('React', '40')

  console.log(reactCourse.showInfo())

  for(const st of studentList){
    console.log(st.fullName())
  }
  console.log('-------------')
  mf()

  const rc = new crs('React', '40')

  console.log(rc.showInfo())

  for(const st of stl){
    console.log(st.fullName())
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Hello React</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
