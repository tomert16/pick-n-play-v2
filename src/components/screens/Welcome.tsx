import { useEffect } from "react";
import { useRouter } from "next/router";

import NavBar from "../NavBar";
import LocationCard from "../location/LocationCard";
import { Box, Typography } from "@mui/material";
import { useLocations, usePlayer } from "../hooks/data";
import Spinner from "@/src/shared/Loading/Spinner";

function Welcome() {
  const router = useRouter();
  const { data: locations } = useLocations();
  const { data: player, isLoading } = usePlayer();

  return isLoading ? (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="90vh"
      width="100vw"
    >
      <Spinner />
    </Box>
  ) : (
    <Box sx={{ padding: 3 }}>
      <Typography
        variant="h1"
        align="center"
        gutterBottom
        sx={{
          fontSize: "5rem",
          color: "rgb(12, 12, 12)",
          textShadow: "2px 2px 3px rgb(255, 205, 98)",
        }}
      >
        Welcome to Pick N' Play {player?.first_name}!
      </Typography>
      <Typography variant="h2" align="center" gutterBottom>
        Pick Your Location:
      </Typography>
      <Box
        className="locations-list"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1.5rem",
          justifyContent: "center",
        }}
      >
        {locations?.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </Box>
    </Box>
  );
}

export default Welcome;
