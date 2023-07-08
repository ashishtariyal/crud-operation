import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Emplist from './Emplisting';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Create from './Create';
import Details from './Details';
import Edit from './Edit';
import './App.css'

function App() {
  return (
    <div className="App">
    {/* <h2>This is a React Page</h2> */}
   <BrowserRouter>
   <Routes>
   
      <Route path="/" element ={<Emplist/>}></Route>
      <Route path="/create" element ={<Create/>}></Route>
      <Route path="/details/:emp" element ={<Details/>}></Route>
      <Route path="/edit/:emp" element ={<Edit/>}></Route>

   </Routes>
   </BrowserRouter>
   </div>
    
    
  );
}

export default App;