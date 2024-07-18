import { useContext } from "react";
import {
  ListItemText,
  Container,
  List,
  Button,
  Modal,
  Box,
} from "@mui/material";
import { FaCheckSquare } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { NotificacionesContext } from "../context/NotificacionesContext";
import { DeleteButton } from "./DeleteButton";

const style = {
  position: "absolute",
  top: { xs: "56px", md: "70px" },
  right: 0,
  width: "300px",
  minWidth: "30%",
  maxHeight: "500px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  overflowY: "auto",
};
export function Notificacion({ handleClose, isOpen }) {
  const { array, setArray, count, setCount, handleDelete, handleSeen } =
    useContext(NotificacionesContext);

  return (
    <>
      <Modal
        open={isOpen}
        onClose={handleClose}
        BackdropProps={{
          style: {
            backgroundColor: "transparent",
          },
        }}
      >
        <Box sx={style}>
          <List component="div" disablePadding>
            <DeleteButton
              setArray={setArray}
              array={array}
              count={count}
              setCount={setCount}
            />
            {array.map(({ notificacion, id, visto }) => (
              <Container
                key={id}
                sx={{ display: "flex", alignItems: "center" }}
              >
                <ListItemText
                  primary={notificacion}
                  sx={{ color: visto ? "grey" : "black" }}
                />
                <Button onClick={() => handleSeen(id)} id={id} disabled={visto}>
                  <FaCheckSquare style={{ color: visto ? "grey" : "green" }} />
                </Button>
                <MdDelete
                  onClick={() => handleDelete(id)}
                  id={id}
                  style={{ fontSize: "22px", color: "red", cursor: "pointer" }}
                />
              </Container>
            ))}
          </List>
        </Box>
      </Modal>
    </>
  );
}
