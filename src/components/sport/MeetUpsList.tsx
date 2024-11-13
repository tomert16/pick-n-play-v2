import React, { useState, useEffect } from "react";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import PropTypes from "prop-types";
import MeetUpCard from "./MeetUpCard";

function MeetUpsList({ meetUp, loggedInPlayer }) {
  const [showMeetUp, setShowMeetUp] = useState(false);
  const [isFull, setIsFull] = useState(false);
  const [selectedMeetUp, setSelectedMeetUp] = useState();

  const handleMeetUpClick = (meetUp) => {
    setSelectedMeetUp(meetUp);
    setShowMeetUp(true);
  };

  // determine the total number of players
  const totalPlayers = meetUp.teammates.length + 1;

  // determine if a meetUp is full
  const isMeetUpFull = totalPlayers >= meetUp.sport.total_players;

  useEffect(() => {
    setIsFull(isMeetUpFull);
  }, [isMeetUpFull]);

  return (
    <Box sx={{ marginBottom: "5rem", textAlign: "center" }}>
      <Box
        onClick={() => handleMeetUpClick(meetUp)}
        sx={{
          border: "1px solid",
          borderRadius: "16px",
          width: { xs: "90%", md: "17vw" },
          height: { xs: "120%", md: "60vh" },
          position: "relative",
          left: { xs: "5%", md: "30%" },
          marginBottom: "4rem",
          cursor: "pointer",
          backgroundColor: isFull ? "rgba(255, 255, 255, 0.45)" : "white",
          filter: isFull ? "brightness(45%)" : "none",
        }}
      >
        <CardMedia
          component="img"
          image={meetUp.field.img_url}
          alt={meetUp.field.name}
          sx={{
            width: "100%",
            height: "52%",
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
          }}
        />
        <CardContent>
          <Typography variant="h5" component="div">
            {meetUp.field.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {meetUp.date}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Host: {meetUp.player.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {`${totalPlayers}/${meetUp.sport.total_players}`}
          </Typography>
        </CardContent>
      </Box>
      {showMeetUp && (
        <MeetUpCard
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

MeetUpsList.propTypes = {
  meetUp: PropTypes.object.isRequired,
  loggedInPlayer: PropTypes.object.isRequired,
};

export default React.memo(MeetUpsList);
