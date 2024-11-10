import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { joinMeetUp } from "../../redux/meetUps/meetUpsSlice";
import { fetchFieldById } from "../../redux/fields/fieldsSlice";
import PropTypes from "prop-types";
import {
  meetUpDropCanceled,
  successfullyDropped,
  successfullyJoined,
  unsuccessfullyJoined,
} from "../../ui/Toastify";

function FieldMeetUpCard({
  meetUp,
  loggedInPlayer,
  setShowMeetUp,
  isMeetUpFull,
  totalPlayers,
}) {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id: fieldId } = router.query;

  // checks if the user has already joined the meet up
  const isJoined = meetUp.teammates.some(
    (teammate) => teammate.id === loggedInPlayer.id
  );

  const handleJoinTeam = async () => {
    const join = {
      meet_up_id: meetUp.id,
      player_id: loggedInPlayer.id,
    };
    if (loggedInPlayer.id !== meetUp.player.id && !isJoined) {
      await dispatch(joinMeetUp(join));
      await dispatch(fetchFieldById(fieldId));
      successfullyJoined();
    } else {
      unsuccessfullyJoined();
    }
  };

  const handleDropMeetUp = async (id) => {
    let confirmation = window.confirm(
      "Are you sure you want to leave this meet up?"
    );
    if (confirmation === true) {
      await fetch(`/api1/player_meet_ups/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          meet_up_id: meetUp.id,
          player_id: loggedInPlayer.id,
        }),
      });
      await dispatch(fetchFieldById(fieldId));
      successfullyDropped();
    } else {
      meetUpDropCanceled();
    }
  };

  const handleBackClick = () => {
    setShowMeetUp(false);
  };

  return (
    <Box
      sx={{
        border: "1px solid black",
        borderRadius: 1,
        textAlign: "center",
        cursor: "pointer",
        position: "fixed",
        background: "rgba(0,0,0,.5)",
        height: "100vh",
        width: "100vw",
        top: 0,
        left: 0,
        zIndex: 1000,
        overflowX: "scroll",
      }}
    >
      <Card
        className="field-meet-up-card"
        sx={{
          backgroundColor: "white",
          border: "1px solid",
          borderRadius: 2,
          justifyContent: "center",
          position: "absolute",
          left: "35%",
          top: "15%",
          height: "max-content",
          width: "30%",
        }}
      >
        <CardMedia
          sx={{ height: 300 }}
          image={meetUp.sport.image}
          title="Meet Up"
        />
        <CardContent>
          <Button
            className="close"
            onClick={() => handleBackClick()}
            sx={{
              position: "relative",
              top: -16,
              left: "48%",
              backgroundColor: "transparent",
              border: "none",
              zIndex: 1,
            }}
          >
            <AiOutlineCloseCircle
              style={{ fontSize: "2rem", color: "#000000" }}
            />
          </Button>
          <Typography gutterBottom variant="h5" component="div">
            {meetUp.sport.type}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {meetUp.date}
            <br />
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Total Players: {totalPlayers}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <li>{meetUp.player.name}</li>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {meetUp.teammates.map((player) => (
              <li className="teammates" key={player.id}>
                {player.name}
              </li>
            ))}
          </Typography>
        </CardContent>
        <CardActions>
          {!isMeetUpFull ? (
            <Button size="small" onClick={() => handleJoinTeam()}>
              Join
            </Button>
          ) : (
            <Typography variant="body2">Full</Typography>
          )}
          <Button size="small" onClick={() => handleDropMeetUp()}>
            Leave
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

FieldMeetUpCard.propTypes = {
  meetUp: PropTypes.object.isRequired,
  loggedInPlayer: PropTypes.object.isRequired,
  setShowMeetUp: PropTypes.func.isRequired,
  isMeetUpFull: PropTypes.bool.isRequired,
  totalPlayers: PropTypes.number.isRequired,
};

export default React.memo(FieldMeetUpCard);
