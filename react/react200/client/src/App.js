import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
//import ImportComponent from './R003_ImportComponent';
//import LifeCycleEx from './R004_LifeCycleEx';
//import LifeCycleEx from './R005_LifeCycleEx';
//import LifeCycleEx from './R006_LifeCycleEx';
//import LifeCycleEx from './R007_LifeCycleEx';
//import LifeCycleEx from './R008_LifeCycleEx';
//import Es6 from './R009_Es6';
//import ArrowFunc from './R013_ArrowFunction';
//import Jquery from './R016_Jquery'
//import PropsDatatype from './R018_PropsDatatype'
//import PropsObjVal from './R020_PropsObjVal';
//import PropsNode from './R023_PropsNode';
//import ReactState from './R024_ReactState';
//import FunctionComponent from './R030_FunctionComponent';
//import ReactstrapAlerts from './R034_ReactstrapAlerts';
//import ReactstrapCard from './R040_ReactstrapCard';
import Navbar from './R048_ReactstrapNavbar'

// react 첫 페이지 적용하는 곳
function App() {
  return (
    <div className="App">
      <h1>Start React</h1>
      <p>HTML적용단</p>
      <Navbar/>
      <p>nav 밑에 있는것</p>
      {/* <ReactState reactString = {"react"}/> */}
      {/* <PropsDatatype
        String="react"
        Number={200}
        Boolean={true}
        Array={[0,10,8]}
        ObjectJson ={{react:"리액트", twohundered:"200"}}
        Function ={console.log("functionProps: function!")}
      /> */}
    </div>
  );
}

export default App;
