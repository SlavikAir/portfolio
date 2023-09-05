import "./scss/index.scss";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes } from "react-router-dom";
import { Main } from "./components/layout/Main";
import { Admin } from "./components/layout/Admin";

function App() {


  return (
      <div className="App">
        <Routes>
          <Route  path="/" element={<Main />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
  );
}

export default App;
