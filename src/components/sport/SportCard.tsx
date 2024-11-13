import { useState } from "react";
import { useRouter } from "next/router";
import { Box, Typography, Card, CardMedia } from "@mui/material";

function SportCard({ sport }) {
  const { sport_type, img_url } = sport;
  const [mouseOverImage, setMouseOverImage] = useState(1);
  const [mouseOverInfo, setMouseOverInfo] = useState(0);
  const router = useRouter();

  return (
    <Card
      onMouseOver={() => {
        setMouseOverImage(0.3);
        setMouseOverInfo(1);
      }}
      onMouseLeave={() => {
        setMouseOverImage(1);
        setMouseOverInfo(0);
      }}
      sx={{
        height: "90%",
        border: "1px solid transparent",
        borderRadius: "3px",
        textAlign: "center",
        cursor: "pointer",
        position: "relative",
        width: "22vw",
        marginBottom: "1rem",
      }}
    >
      <Typography
        component="p"
        sx={{
          opacity: mouseOverInfo,
          position: "absolute",
          top: "15rem",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "1.5rem",
          fontFamily: "Ultra, serif",
          height: "3em",
          color: "rgb(0, 0, 0)",
          fontWeight: "bolder",
        }}
      >
        {sport_type}
      </Typography>
      <CardMedia
        component="img"
        image={img_url}
        alt={sport_type}
        sx={{
          height: "22vw",
          width: "22vw",
          border: "1px solid rgb(255, 205, 98)",
          borderRadius: "0.5rem",
          backgroundColor: "transparent",
          opacity: mouseOverImage,
        }}
        onClick={() => {
          router.push(`/sports/${sport.id}`);
        }}
      />
    </Card>
  );
}

export default SportCard;
