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

function Home({ loggedInPlayer }) {
  const [sportFieldToggle, setSportFieldToggle] = useState(true);

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
      {/* {sportFieldToggle ? (
        <SportsList individualLocation={individualLocation} />
      ) : (
        <FieldList individualLocation={individualLocation} />
      )} */}
    </Container>
  );
}

export default Home;
