import { Container, Box, Typography } from "@mui/material";
import FieldCard from "./FieldCard";
import { useFields, usePlayer } from "../hooks/data";
import { useMemo } from "react";

function FieldList({}) {
  const { data: fields } = useFields();
  const { data: player } = usePlayer();

  const filteredFields = useMemo(() => {
    return fields?.filter((field) => field.location_name === player.location);
  }, [fields]);

  return (
    <Container sx={{ textAlign: "center", marginBottom: "5rem" }}>
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
        }}
      >
        Pick A Field
      </Typography>
      <Box
        className="fields-list"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "3rem",
          justifyContent: "center",
          gap: "1.5rem",
        }}
      >
        {filteredFields?.map((field) => (
          <FieldCard key={field.id} field={field} />
        ))}
      </Box>
    </Container>
  );
}

export default FieldList;
