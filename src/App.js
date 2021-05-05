import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import PostDetails from './Components/PostDetails/PostDetails';

function App() {
  return (
    <div className="App">
        <Router>
           <Switch>
             <Route exact path="/">
                <Home></Home>
             </Route>
             <Route path="/about">
                  <About/>
             </Route>
             <Route path="/post/:id">
                <PostDetails></PostDetails>
             </Route>
           </Switch>
        </Router>
    </div>
  );
}

export default App;
