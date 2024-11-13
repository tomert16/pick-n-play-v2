import { useEffect } from "react";
import { useRouter } from "next/router";

import NavBar from "../NavBar";
import LocationCard from "../location/LocationCard";
import { Box, Typography } from "@mui/material";

function Welcome() {
  // const dispatch = useDispatch();
  const router = useRouter();

  // Fetch all locations
  // useEffect(() => {
  //   dispatch(fetchAllLocations());
  // }, [dispatch]);

  // Redirect based on logged in player's location
  // useEffect(() => {
  //   if (loggedInPlayer?.location?.id) {
  //     router.push(`/locations/${loggedInPlayer.location.id}`);
  //   }
  // }, [loggedInPlayer, router]);

  // if (loggedInPlayer === undefined || locations === undefined) return null;

  return (
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
        Welcome to Pick N' Play {loggedInPlayer && loggedInPlayer.first_name}!
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
        {locations.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </Box>
    </Box>
  );
}

export default Welcome;
