import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./contexts/AuthProvider";
import Contact from "./Pages/Home/Components/Contact/Contact";
import Doctor from "./Pages/Home/Components/Doctor/Doctor";
import Services from "./Pages/Home/Components/Services/Services";
import Home from "./Pages/Home/Home";
import { Login } from "./Pages/Login/Login";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import { SignUp } from "./Pages/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/doctors">
            <Doctor />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
