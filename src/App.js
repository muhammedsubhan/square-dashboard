import "./App.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import DataBase from "./components/database/DataBase";
import Home from "./components/home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import Reservations from "./components/reservations/Reservations";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/database" element={<DataBase />} />
            <Route path="/reservation" element={<Reservations />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
