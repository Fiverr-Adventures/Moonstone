import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './assets/css/style.css'
import Register from './pages/Register';
import SideBar from './components/sideBar';
function App() {
  
  return (
    <Router>
        <Switch>
        <Route path='/Register'>
            <Register />
        </Route>
        <Route path='/'>
          <SideBar></SideBar>
        </Route>
        </Switch>
    </Router>
  );
}

export default App;
