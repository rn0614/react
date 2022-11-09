import logo from './logo.svg';
import './App.css';
import ImportComponent from './R003_ImportComponent';
import LifeCycleEx from './R004_LifeCycleEx';

// react 첫 페이지 적용하는 곳
function App() {
  return (
    <div className="App">
      <h1>Start React</h1>
      <p>HTML적용단</p>
      <ImportComponent></ImportComponent>
      <LifeCycleEx></LifeCycleEx>
    </div>
  );
}

export default App;
