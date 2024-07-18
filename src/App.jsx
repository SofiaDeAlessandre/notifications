import "./App.css";

import { useContext, useState } from "react";
import { NotificacionesContext } from "././context/NotificacionesContext";
import { Navbar } from "./components/layout/Navbar";
import { Notificacion } from "./components/Notificacion";
import { Botones } from "./components/Botones";
import { Footer } from "./components/layout/Footer";

function App() {
  const { array, setArray, count, setCount } = useContext(
    NotificacionesContext
  );
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const toggleModal = () => setIsOpen(!isOpen);
  return (
    <div className="container">
      <Navbar toggleModal={toggleModal} />
      <Notificacion isOpen={isOpen} handleClose={handleClose} />
      <div className="botones-container">
        <Botones
          setArray={setArray}
          array={array}
          count={count}
          setCount={setCount}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
