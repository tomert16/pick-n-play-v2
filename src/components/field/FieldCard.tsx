import { Container, Box, Typography } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/router";

function FieldCard({ field }) {
  const [mouseOverImage, setMouseOverImage] = useState(1);
  const [mouseOverInfo, setMouseOverInfo] = useState(0);
  const { field_name, img_url } = field;
  const router = useRouter();

  return (
    <Box
      sx={{
        justifyContent: "center",
        border: "1px solid transparent",
        borderRadius: 1,
        textAlign: "center",
        cursor: "pointer",
        position: "relative",
        overflow: "hidden",
      }}
      onMouseOver={() => {
        setMouseOverImage(0.3);
        setMouseOverInfo(1);
      }}
      onMouseLeave={() => {
        setMouseOverImage(1);
        setMouseOverInfo(0);
      }}
      onClick={() => router.push(`/fields/${field.id}`)}
    >
      <Typography
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "1.5rem",
          fontFamily: "Ultra",
          fontWeight: "bolder",
          color: "rgb(0, 0, 0)",
          opacity: mouseOverInfo,
          zIndex: 1,
        }}
      >
        {field_name}
      </Typography>
      <Box
        component="img"
        src={img_url}
        alt={field_name}
        sx={{
          height: "22vw",
          width: "22vw",
          border: "1px solid rgb(255, 205, 98)",
          borderRadius: 0.5,
          backgroundColor: "transparent",
          transition: "opacity 0.3s ease-in-out",
          opacity: mouseOverImage,
        }}
      />
    </Box>
  );
}

export default FieldCard;
