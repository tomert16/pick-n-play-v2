import { useState, useEffect } from "react";
import Link from "next/link";
// import { useDispatch, useSelector } from "react-redux";
// import styled from "styled-components";
import SportsList from "../sport/SportsList";
import FieldList from "../field/FieldList";
import NavBar from "../NavBar";
// import {
//   selectLocationById,
//   fetchLocationById,
// } from "../redux/locations/locationsSlice";
import { Container } from "@mui/material";
import { useSports } from "../hooks/data";

function Home({ loggedInPlayer }) {
  const [sportFieldToggle, setSportFieldToggle] = useState(true);
  const { data: sports } = useSports();

  console.log("SPORTS", sports);

  // const { id } = useParams();
  // const dispatch = useDispatch();
  //fetch individual state
  // const individualLocation = useSelector(selectLocationById);
  // useEffect(() => {
  //   dispatch(fetchLocationById(id));
  // }, [dispatch, id]);

  // if (individualLocation === undefined) {
  //   return null;
  // }

  return (
    <Container>
      {/* <NavBar
        loggedInPlayer={loggedInPlayer}
        setSportFieldToggle={setSportFieldToggle}
        isHome={true}
      /> */}
      {sportFieldToggle ? <SportsList /> : <FieldList />}
    </Container>
  );
}

export default Home;
