import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Category from './pages/Category';
import HomePage from './pages/HomePage';
import SingleBlog from './pages/SingleBlog';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/blogs/:id">
            <SingleBlog />
          </Route>
          <Route path="/category:id">
            <Category />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
