import { BiSolidLike } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import { LikeButton } from "./LikeButton";
import { TbAlertHexagon } from "react-icons/tb";
import { ImFrustrated } from "react-icons/im";
import { Typography } from "@mui/material";

export const Botones = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 20,
      }}
    >
      <Typography
        sx={{
          fontSize: 20,
          textAlign: "center",
          color: "black",
          fontFamily: "Londrina Solid",
        }}
      >
        TOQUE PARA COMENZAR
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 20,
        }}
      >
        <LikeButton
          Icon={BiSolidLike}
          notificationText="me gusta"
          style={{ color: "blue" }}
        />
        <LikeButton
          Icon={FaHeart}
          notificationText="me encanta"
          style={{ color: "red" }}
        />
        <LikeButton
          Icon={TbAlertHexagon}
          notificationText="advertencia"
          style={{ color: "#952ae3" }}
        />
        <LikeButton
          Icon={ImFrustrated}
          notificationText="enojo"
          style={{ color: " #E91E63" }}
        />
      </div>
    </div>
  );
};
