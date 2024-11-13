import { useSports } from "../hooks/data";
import SportCard from "./SportCard";
import { Box, Typography, Container } from "@mui/material";

function SportsList({ handleSelectedSport, individualLocation }) {
  const { data: sports } = useSports();
  console.log("SPORTS", sports);
  return (
    <Container sx={{ textAlign: "center", marginBottom: "5rem" }}>
      <Typography
        variant="h1"
        sx={{
          fontSize: "4.5rem",
          color: "rgb(12, 12, 12)",
          textAlign: "center",
          fontFamily: "Ultra, serif",
          backgroundColor: "transparent",
          textShadow: "2px 2px 3px rgb(255, 205, 98)",
        }}
      >
        Pick A Sport
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "3rem",
          justifyContent: "center",
          gap: "1.5rem",
          // width: "100vw",
        }}
      >
        {sports?.map((sport) => (
          <SportCard
            key={sport.id}
            sport={sport}
            handleSelectedSport={handleSelectedSport}
          />
        ))}
      </Box>
    </Container>
  );
}

export default SportsList;
