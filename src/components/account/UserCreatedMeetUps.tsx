import { useState } from "react";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import { Box, Typography, Button } from "@mui/material";

function UserCreatedMeetUps({ loggedInPlayer }) {
  const [amountOfMeetUps] = useState(5);
  const [currentSlide, setCurrentSlide] = useState(1);

  const indexOfLastCard = currentSlide * amountOfMeetUps;
  const indexOfFirstCard = indexOfLastCard - amountOfMeetUps;

  const nextSlide = () => setCurrentSlide(currentSlide + 1);
  const previousSlide = () => setCurrentSlide(currentSlide - 1);
  const end = indexOfLastCard >= loggedInPlayer?.meet_ups?.length;
  const beginning = currentSlide === 1;

  return (
    <Box
      className="user-created-container"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 3,
      }}
    >
      <Typography
        variant="h3"
        className="your-created"
        sx={{ fontFamily: "Ultra", color: "rgb(255, 190, 130)", fontSize: 30 }}
      >
        Your Created Meet Ups
      </Typography>
      <Box
        className="scroll-created"
        sx={{ display: "flex", gap: 2, overflowX: "scroll", marginY: 2 }}
      >
        {loggedInPlayer?.meet_ups
          ?.slice(indexOfFirstCard, indexOfLastCard)
          .map((meetUp) => (
            <Box
              key={meetUp.id}
              className="your-meet-ups"
              sx={{
                backgroundColor: "white",
                borderStyle: "solid",
                borderRadius: 2,
                padding: 2,
                textAlign: "center",
                width: "20%",
              }}
            >
              <Typography variant="h6">{meetUp.sport.sport_type}</Typography>
              <Typography className="mu-date">{meetUp.date}</Typography>
              <Typography>{meetUp.field.name}</Typography>
              <Typography>
                Total Players: {meetUp.teammates.length + 1}
              </Typography>
            </Box>
          ))}
      </Box>
      <Box
        className="pagination"
        sx={{ textAlign: "center", display: "flex", gap: 2 }}
      >
        <Button
          className="prev-btn"
          onClick={() => previousSlide()}
          disabled={beginning}
          sx={{
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        >
          <BsArrowLeftCircle
            style={{ fontSize: "1.5rem", color: "rgb(255, 205, 98)" }}
          />
        </Button>
        <Button
          className="next-btn"
          onClick={() => nextSlide()}
          disabled={end}
          sx={{
            backgroundColor: "transparent",
            border: "none",
            cursor: "pointer",
          }}
        >
          <BsArrowRightCircle
            style={{ fontSize: "1.5rem", color: "rgb(255, 205, 98)" }}
          />
        </Button>
      </Box>
    </Box>
  );
}

export default UserCreatedMeetUps;
