import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Typography,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import RequestCard from "../requests/RequestCard";
import { requestCreated, requestNotCreated } from "../ui/Toastify";
import { ToastContainer } from "react-toastify";

function Requests() {
  // const dispatch = useDispatch();
  // // const loggedInPlayer = useSelector(selectLoggedInPlayer) || {};
  // const [name, setName] = useState("");
  // const [location, setLocation] = useState("");

  // // fetch request data
  // const requests = useSelector(selectRequests);
  // useEffect(() => {
  //   dispatch(fetchRequests()).then(() => {
  //     dispatch(fetchRequests());
  //   });
  // }, [dispatch]);

  // // fetch locations for form dropdown
  // const locations = useSelector(selectAllLocations);
  // useEffect(() => {
  //   dispatch(fetchAllLocations());
  // }, [dispatch]);

  // // create a new request
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const newRequest = {
  //     name: name,
  //     location: location,
  //     player_id: loggedInPlayer.id,
  //   };
  //   const addNew = await dispatch(createNewRequest(newRequest));
  //   if (!addNew.error) {
  //     requestCreated();
  //     setName("");
  //     setLocation("");
  //   } else {
  //     requestNotCreated();
  //   }
  // };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography
        variant="h1"
        className="request-title"
        sx={{
          color: "rgb(0, 0, 0)",
          textAlign: "center",
          fontSize: "5rem",
          fontFamily: "Ultra",
          textShadow: "2px 2px 3px rgb(255, 205, 98)",
          marginBottom: 3,
        }}
      >
        Sport or Field Requests:
      </Typography>
      <ToastContainer />
      <Box
        className="request-container"
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          flexWrap: "wrap",
          marginBottom: 3,
        }}
      >
        {requests.map((request) => (
          <RequestCard key={request.id} request={request} />
        ))}
      </Box>
      <Box
        className="card"
        sx={{
          width: 350,
          border: "1px solid #ccc",
          borderRadius: 1,
          boxShadow: 3,
          overflow: "hidden",
          margin: "10px auto",
          position: "relative",
          top: "3rem",
        }}
      >
        <Box
          className="card-header"
          sx={{ backgroundColor: "#333", padding: 2, textAlign: "center" }}
        >
          <Typography
            className="text-header"
            variant="h6"
            sx={{ color: "white", margin: 0 }}
          >
            Create a request
          </Typography>
        </Box>
        <Box className="card-body" sx={{ padding: 2 }}>
          <form onSubmit={handleSubmit}>
            <FormControl fullWidth sx={{ marginBottom: 2 }}>
              <TextField
                required
                label="Name"
                name="name"
                id="name"
                placeholder="Enter name of sport or field/park"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>
            <FormControl fullWidth sx={{ marginBottom: 2 }}>
              <InputLabel id="location-label">Location</InputLabel>
              <Select
                labelId="location-label"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <MenuItem value="null">Select Here</MenuItem>
                {locations.map((location) => (
                  <MenuItem key={location.id} value={location.state}>
                    {location.state}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button
              type="submit"
              variant="contained"
              className="btn"
              sx={{
                padding: "12px 24px",
                marginLeft: 1,
                fontSize: 16,
                borderRadius: 1,
                backgroundColor: "#333",
                color: "#fff",
                textTransform: "uppercase",
                transition: "background-color 0.2s ease-in-out",
                "&:hover": { backgroundColor: "#ccc", color: "#333" },
              }}
            >
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
}

export default Requests;
