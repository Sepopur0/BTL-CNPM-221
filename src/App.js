// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './layout/navbar';
import Footer from './layout/footer';
import routes from '../src/routes'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            )
          })}
        {/* <Route path='/' element={<Homepage />} /> */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
