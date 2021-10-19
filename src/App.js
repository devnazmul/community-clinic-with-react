import NotFound from "./Pages/NotFound/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { AuthProvider } from "./contexts/AuthProvider";
import Contact from "./Pages/Home/Components/Contact/Contact";
import Doctor from "./Pages/Home/Components/Doctor/Doctor";
import ServiceDetails from "./Pages/Home/Components/Services/ServiceDetails/ServiceDetails";
import Services from "./Pages/Home/Components/Services/Services";
import Home from "./Pages/Home/Home";
import { Login } from "./Pages/Login/Login";
import Purches from "./Pages/Purchase/Purchase";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import { SignUp } from "./Pages/SignUp/SignUp";
import PrivateRoute from "./Private/PrivateRoute";
import PurchaseDone from "./Pages/PurchaseDone/PurchaseDone";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
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
            <Route exact path="/purches_done">
              <PurchaseDone />
            </Route>
            <PrivateRoute exact path="/purches">
              <Purches />
            </PrivateRoute>
            <PrivateRoute exact path="/service_details/:desc/:name/:price">
              <ServiceDetails />
            </PrivateRoute>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
