import { useContext } from "react";
import { NotificacionesContext } from "../context/NotificacionesContext";
import { Box } from "@mui/material";

export function LikeButton({ Icon, notificationText, style = {} }) {
  const { handleChangeNotification } = useContext(NotificacionesContext);
  const handleClick = () => {
    handleChangeNotification(notificationText);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "0" }}>
      <Icon
        variant="text"
        onClick={handleClick}
        style={{ fontSize: 35, marginTop: 0, cursor: "pointer", ...style }}
      />
    </Box>
  );
}
