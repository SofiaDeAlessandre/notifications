/* eslint-disable react-hooks/exhaustive-deps */

import { Box, List, ListItemIcon } from "@mui/material";
import { useContext } from "react";
import { NotificacionesContext } from "../../context/NotificacionesContext";

import { HiBellAlert } from "react-icons/hi2";

export function ContenedorNotificaciones({ toggleModal }) {
  const { count } = useContext(NotificacionesContext);

  return (
    <Box>
      <List
        sx={{ width: "100%", maxWidth: 360 }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemIcon
          sx={{
            color: "white",
            display: "flex",
            alignItems: "flex-end",
            fontSize: 20,
            cursor: "pointer",
          }}
        >
          <HiBellAlert onClick={toggleModal} />
          {count <= 0 ? (
            ""
          ) : (
            <span style={{ fontSize: 15, marginBottom: 6 }}>{count}</span>
          )}
        </ListItemIcon>
      </List>
    </Box>
  );
}
