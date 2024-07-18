import { Box, Typography } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
export const Footer = () => {
  const isLargeScreen = useMediaQuery("(min-width: 900px)");

  const iconSize = isLargeScreen ? "1.5rem" : "1rem";
  return (
    <Box>
      <Typography sx={{ fontSize: 15, textAlign: "center", color: "#f4e5e5" }}>
        COPYRIGHT 2024.
      </Typography>
      <Box
        sx={{
          display: "flex",
          maxWidth: "1000px",
          margin: "auto",
          justifyContent: "space-around",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "0.8rem", md: "20px" },
              textAlign: "center",
              color: "#f4e5e5",
            }}
          >
            Melie
          </Typography>
          <a
            href="https://github.com/MelieGalaz?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub style={{ color: "#f4e5e5", fontSize: iconSize }} />
          </a>
          <a
            href="https://www.linkedin.com/in/mely-galaz-9638bb246/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin style={{ color: "#f4e5e5", fontSize: iconSize }} />
          </a>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "0.8rem", md: "20px" },
              textAlign: "center",
              color: "#f4e5e5",
              fontWeight: 700,
            }}
          >
            Paula
          </Typography>
          <a
            href="https://github.com/paulanabelgonzalez"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              style={{
                color: "#f4e5e5",
                fontSize: iconSize,
              }}
            />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <FaLinkedin
              style={{
                color: "#f4e5e5",
                fontSize: iconSize,
              }}
            />
          </a>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "0.8rem", md: "20px" },
              textAlign: "center",
              color: "#f4e5e5",
            }}
          >
            Sofia
          </Typography>
          <a
            href="https://github.com/SofiaDeAlessandre "
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              className="icono"
              style={{ color: "#f4e5e5", fontSize: iconSize }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/sof%C3%ADa-de-alessandre/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              className="icono"
              style={{ color: "#f4e5e5", fontSize: iconSize }}
            />
          </a>
        </div>
      </Box>
    </Box>
  );
};
