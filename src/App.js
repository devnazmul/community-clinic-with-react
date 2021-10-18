import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home/Home";
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/home'>
          <Home />
        </Route>
        
        <Footer />
      </Router>

    </div>
  );
}

export default App;
