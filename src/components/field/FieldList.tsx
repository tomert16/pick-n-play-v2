import { Container, Box, Typography } from "@mui/material";
import FieldCard from "./FieldCard";

function FieldList({ individualLocation }) {
  return (
    <Box sx={{ padding: 3 }}>
      <Typography
        variant="h1"
        className="home-prompt"
        sx={{
          fontSize: "4.5rem",
          color: "rgb(12, 12, 12)",
          textAlign: "center",
          fontFamily: "Ultra",
          textShadow: "2px 2px 3px rgb(255, 205, 98)",
          backgroundColor: "transparent",
          marginBottom: 3,
        }}
      >
        Pick A Field
      </Typography>
      <Box
        className="fields-list"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "-6rem",
          justifyContent: "center",
          gap: 2,
          width: "100vw",
        }}
      >
        {individualLocation.fields.map((field) => (
          <FieldCard key={field.id} field={field} />
        ))}
      </Box>
    </Box>
  );
}

export default FieldList;
