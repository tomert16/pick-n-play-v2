import React from "react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
// import { useRequestActions } from "../../hooks/useRequestActions";
import { Box, Typography, Button, IconButton } from "@mui/material";

function RequestCard({ request }) {
  // const { like, dislike } = useRequestActions(request);

  return (
    <Box
      className="request-card"
      sx={{
        backgroundColor: "white",
        border: "1px solid",
        borderRadius: 2,
        width: "13vw",
        height: "100%",
        textAlign: "center",
        padding: 2,
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        {request.name}
      </Typography>
      <Typography variant="body1">{request.location}</Typography>
      <Typography variant="body2" sx={{ fontStyle: "italic" }}>
        Requested by: {request.player.name}
      </Typography>
      <Box
        className="icon-group"
        sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}
      >
        <IconButton aria-label="like" onClick={like} sx={{ color: "green" }}>
          <AiOutlineLike />
        </IconButton>
        <Typography variant="body2" sx={{ marginRight: 1 }}>
          {request.likes}
        </Typography>
        <IconButton
          aria-label="dislike"
          onClick={dislike}
          sx={{ color: "red" }}
        >
          <AiOutlineDislike />
        </IconButton>
        <Typography variant="body2">{request.dislikes}</Typography>
      </Box>
    </Box>
  );
}

export default React.memo(RequestCard);
