import Navbar from "./Components/Navbar/Navbar";

import { Outlet } from "react-router-dom";
import { FormContextProvider } from "./Context/FormContext";

import "./App.css";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <FormContextProvider>
      <div className="container">
        <Navbar />
        <div style={{ backgroundColor: "blanchedalmond", height: "90vh" }}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </FormContextProvider>
  );
}

export default App;
