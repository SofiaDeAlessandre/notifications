import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import { useContext } from "react";

import { ContenedorNotificaciones } from "./ContenedorNotificaciones";
import { NotificacionesContext } from "../../context/NotificacionesContext";
export const Navbar = ({ toggleModal }) => {
  const { array, setArray, count, setCount } = useContext(
    NotificacionesContext
  );

  return (
    <Box>
      <AppBar
        position="static"
        sx={{
          height: { xs: "56px", md: " 70px " },
          backgroundColor: "#a233c1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Toolbar
          sx={{
            maxWidth: "1000px",
            width: "100%",
            margin: "auto",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              fontSize: "2rem",
              fontFamily: "DM Serif Display",
            }}
          >
            IconTouch
          </Typography>

          <ContenedorNotificaciones
            array={array}
            setArray={setArray}
            count={count}
            setCount={setCount}
            toggleModal={toggleModal}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
