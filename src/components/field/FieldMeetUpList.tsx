import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import FieldMeetUpCard from "./FieldMeetUpCard";

function FieldMeetUpList({ meetUp, loggedInPlayer }) {
  const [selectedFieldMeetUp, setSelectedFieldMeetUp] = useState();
  const [showMeetUp, setShowMeetUp] = useState(false);
  const [isFull, setIsFull] = useState(false);

  const handleMeetUpClick = (fMeetUp) => {
    setSelectedFieldMeetUp(fMeetUp);
    setShowMeetUp(true);
  };

  const totalPlayers = meetUp?.teammates?.length + 1;
  // determine if a meetUp is full
  const isMeetUpFull = totalPlayers >= meetUp.sport.total_players;

  useEffect(() => {
    if (isMeetUpFull) {
      setIsFull(true);
    } else {
      setIsFull(false);
    }
  }, [isMeetUpFull]);

  return (
    <Box className="meet-ups-list" sx={{ marginBottom: "2rem" }}>
      <Box
        className={isFull ? "full" : "open"}
        onClick={() => handleMeetUpClick(meetUp)}
        sx={{
          border: "1px solid",
          borderRadius: 2,
          width: "17vw",
          height: "60vh",
          position: "relative",
          left: "30%",
          marginBottom: "4rem",
          cursor: "pointer",
          backgroundColor: "white",
          filter: isFull ? "brightness(45%)" : "none",
          "@media (max-width: 768px)": {
            height: "120%",
            width: "20vw",
            left: "90%",
          },
        }}
      >
        <Box
          component="img"
          className="mu-field-img"
          alt={meetUp.sport.type}
          src={meetUp.sport.image}
          sx={{
            width: "100%",
            height: "52%",
            position: "relative",
            borderTopLeftRadius: 2,
            borderTopRightRadius: 2,
          }}
        />
        <Box className="mu-info" sx={{ textAlign: "center" }}>
          <Typography variant="h4">{meetUp.sport.type}</Typography>
          <Typography>{meetUp.date}</Typography>
          <Typography>Host: {meetUp.player.name}</Typography>
          <Typography>{`${totalPlayers}/${meetUp.sport.total_players}`}</Typography>
        </Box>
      </Box>
      {showMeetUp && (
        <FieldMeetUpCard
          meetUp={meetUp}
          loggedInPlayer={loggedInPlayer}
          setShowMeetUp={setShowMeetUp}
          isMeetUpFull={isMeetUpFull}
          totalPlayers={totalPlayers}
        />
      )}
    </Box>
  );
}

export default React.memo(FieldMeetUpList);
