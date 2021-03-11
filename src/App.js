import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Home from "./Pages/Home";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </>
    );
}

export default App;
