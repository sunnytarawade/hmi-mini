import  { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home  from './pages/Home';
import Ats from './pages/ATS';
import CurbForm from './pages/CurbForm';
import Treatment from './pages/Treatment';
import {useState} from 'react';
function App() {

  const [state, setState] = useState({
    curbScore : 0,
    atsScore : 0,
  })

  return (
   <BrowserRouter>
    <Switch>
   
    <Route exact path='/' component={Home}/>
    <Route exact path='/ats' render={()=><Ats {...state} setState={setState}/>} />
    <Route exact path='/curb-form' render={()=><CurbForm {...state} setState={setState}/>}/>
    <Route exact path='/treatment' render={()=><Treatment {...state} setState={setState}/>}/>
    </Switch>
   
   </BrowserRouter>
    );
}

export default App;
