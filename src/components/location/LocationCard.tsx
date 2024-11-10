import { useState } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import {
  selectLoggedInPlayer,
  updateLocation,
} from "../../redux/players/playersSlice";
import { Box, Typography } from "@mui/material";

function LocationCard({ location }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const loggedInPlayer = useSelector(selectLoggedInPlayer);
  const [mouseOverImage, setMouseOverImage] = useState(1);
  const [mouseOverInfo, setMouseOverInfo] = useState(0);

  const handleSetLocation = () => {
    const id = loggedInPlayer.id;
    dispatch(updateLocation({ location, id }));
  };

  return (
    <Box
      className="location-card"
      sx={{
        borderRadius: 2,
        border: "3.5px solid black",
        width: "20vw",
        height: "15vw",
        position: "relative",
        cursor: "pointer",
      }}
      onClick={() => {
        router.push(`/locations/${location.id}`);
        handleSetLocation(location);
        window.location.reload();
      }}
      onMouseOver={() => {
        setMouseOverImage(0.3);
        setMouseOverInfo(1);
      }}
      onMouseLeave={() => {
        setMouseOverImage(1);
        setMouseOverInfo(0);
      }}
    >
      <Typography
        variant="h3"
        sx={{
          position: "absolute",
          opacity: mouseOverInfo,
          fontSize: "1.8rem",
          textAlign: "center",
          width: "100%",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        {location.state}
      </Typography>
      <Box
        component="img"
        src={location.img_url}
        alt={location.state}
        sx={{
          width: "100%",
          height: "100%",
          borderRadius: 2,
          opacity: mouseOverImage,
        }}
      />
    </Box>
  );
}

export default LocationCard;