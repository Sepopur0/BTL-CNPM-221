// import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

import routes from '../src/routes'

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
