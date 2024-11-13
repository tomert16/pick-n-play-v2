import React from "react";
import { useRouter } from "next/router";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import { AiOutlineCloseCircle } from "react-icons/ai";
// import { useDispatch } from 'react-redux';
import { joinMeetUp } from "../../redux/meetUps/meetUpsSlice";
import { fetchSportById } from "../../redux/sports/sportsSlice";
import PropTypes from "prop-types";
import {
  meetUpDropCanceled,
  successfullyDropped,
  successfullyJoined,
  unsuccessfullyJoined,
} from "../../ui/Toastify";

function MeetUpCard({
  loggedInPlayer,
  meetUp,
  setShowMeetUp,
  isMeetUpFull,
  totalPlayers,
}) {
  // const dispatch = useDispatch();
  const router = useRouter();
  const { id: sportId } = router.query;

  // checks if the user has already joined the meet up
  // const isJoined = meetUp.teammates.some((teammate) => teammate.id === loggedInPlayer.id);

  // const handleJoinTeam = async () => {
  //   const join = {
  //     meet_up_id: meetUp.id,
  //     player_id: loggedInPlayer.id,
  //   };
  //   if (loggedInPlayer.id !== meetUp.player.id && !isJoined) {
  //     await dispatch(joinMeetUp(join));
  //     await dispatch(fetchSportById(sportId));
  //     successfullyJoined();
  //   } else {
  //     unsuccessfullyJoined();
  //   }
  // };

  // const handleDropMeetUp = async (id) => {
  //   let confirmation = window.confirm('Are you sure you want to leave this meet up?');
  //   if (confirmation === true) {
  //     await fetch(`/api1/player_meet_ups/${id}`, {
  //       method: 'DELETE',
  //       headers: { 'Content-Type': 'application/json' },
  //       body: JSON.stringify({
  //         meet_up_id: meetUp.id,
  //         player_id: loggedInPlayer.id,
  //       }),
  //     });
  //     await dispatch(fetchSportById(sportId));
  //     successfullyDropped();
  //   } else {
  //     meetUpDropCanceled();
  //   }
  // };

  const handleBackClick = () => {
    setShowMeetUp(false);
  };

  return (
    <Box
      sx={{
        border: "1px solid black",
        borderRadius: "3px",
        position: "fixed",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        height: "100vh",
        width: "100vw",
        top: 0,
        left: 0,
        zIndex: 1000,
        overflowX: "scroll",
        textAlign: "center",
      }}
    >
      <Card
        sx={{
          backgroundColor: "white",
          border: "1px solid",
          borderRadius: "10px",
          position: "absolute",
          left: "35%",
          top: "15%",
          height: "max-content",
          width: "30%",
          justifyContent: "center",
        }}
      >
        <CardMedia
          sx={{ height: 300 }}
          image={meetUp.field.img_url}
          title="meet-up"
        />
        <CardContent>
          <IconButton
            onClick={handleBackClick}
            sx={{
              position: "relative",
              top: "-1rem",
              left: "48%",
              zIndex: 1,
            }}
          >
            <AiOutlineCloseCircle size={24} color="#000000" />
          </IconButton>
          <Typography gutterBottom variant="h5" component="div">
            {meetUp.field.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {meetUp.date}
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
            <Button size="small" onClick={handleJoinTeam}>
              Join
            </Button>
          ) : (
            <Typography variant="body2">Full</Typography>
          )}
          <Button size="small" onClick={() => handleDropMeetUp(meetUp.id)}>
            Leave
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

MeetUpCard.propTypes = {
  loggedInPlayer: PropTypes.object.isRequired,
  meetUp: PropTypes.object.isRequired,
  totalPlayers: PropTypes.number.isRequired,
  isMeetUpFull: PropTypes.bool.isRequired,
  setShowMeetUp: PropTypes.func.isRequired,
};

export default React.memo(MeetUpCard);
