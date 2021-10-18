import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Contact from "./Pages/Home/Components/Contact/Contact";
import Doctor from "./Pages/Home/Components/Doctor/Doctor";
import Services from "./Pages/Home/Components/Services/Services";
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
        <Route exact path='/services'>
          <Services />
        </Route>
        <Route exact path='/doctors'>
          <Doctor />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
