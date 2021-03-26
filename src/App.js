import './App.css';
import { Switch, Route } from 'react-router-dom';
import { Home, About, Guide, React_main, NotFound} from './pages';
import { Navbar, Footer } from './components';

function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <Switch>
            <Route exact path="/" component={Home} />
            <Route  path="/about" component={About} />
            <Route  path="/guide" component={Guide} />
          <Route path="/react" component={React_main} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
