import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";
import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail";
import React, { useState } from "react";
import Login from "./components/Login";

export const ThemeContext = React.createContext({name:"",pass:""});
function App() {
  const [idsearch, setidsearch] = useState("");
  const [showform, setshowform] = useState(false);
  function idSearch(id) {
    setidsearch(id)
  }
  function setform() {
    setshowform(!showform);
  }
  return (
    <>
      <ThemeContext.Provider
        value={{
          name:"testuser",
          setform
        }}
      >
        <Router>
          <Header idSearch={idSearch}/>
          <Switch>
            <Route path="/detail/:id">
              <Detail/>
            </Route>
            <Route path="/" >
              <Home idsearch={idsearch}/>
            </Route>
          </Switch>
          <Login showform={showform}/>
          <Footer/>
        </Router>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
