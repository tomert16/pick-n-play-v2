import { useState, useEffect } from "react";

import SportsList from "../../sport/SportsList";
import FieldList from "../../field/FieldList";
import NavBar from "../../NavBar";

import { Container } from "@mui/material";
import { useSports } from "../../hooks/data";
import { useSpecificGameContext } from "./SpecificGameContext";

function Home() {
  const { specificGame } = useSpecificGameContext();

  return (
    <Container>
      {specificGame === "Sports" ? <SportsList /> : <FieldList />}
    </Container>
  );
}

export default Home;
