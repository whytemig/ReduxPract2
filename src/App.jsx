import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home/home";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Moviedetailes from "./components/moviedetails/moviedetails";
import NotFound from "./components/pagenotfound/404";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/movie/:imdbID" Component={Moviedetailes} />
            <Route Component={NotFound} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
