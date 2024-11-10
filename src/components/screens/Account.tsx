import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NavBar from "../NavBar";
import UserCreatedMeetUps from "../account/UserCreatedMeetUps";
import UserJoinedMeetUps from "../account/UserJoinedMeetUps";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Box, Typography, Button, Select, MenuItem } from "@mui/material";

function Account() {
  const router = useRouter();

  const [location, setLocation] = useState({});
  const [displaySelect, setDisplaySelect] = useState(false);

  const notify = () => {
    toast.success("Location Updated🌎", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  // const locations = useSelector(selectAllLocations);
  // useEffect(() => {
  //   dispatch(fetchAllLocations())
  // }, [dispatch])

  // if (locations === undefined) return null;

  // const changeLocation = () => {
  //   const id = loggedInPlayer.id;
  //   const parsedLocation = JSON.parse(location);
  //   dispatch(updateLocation({ location: parsedLocation, id }));
  //   window.location.reload();
  //   notify();
  // }

  const handleDisplay = () => {
    setDisplaySelect(!displaySelect);
  };

  return (
    <Box
      className="account-info-page"
      sx={{ height: "100vh", backgroundColor: "black", padding: 3 }}
    >
      <Box className="header-div"></Box>
      <ToastContainer />
      <Box
        className="user-info-container"
        sx={{
          width: "80vw",
          margin: "1.5% auto",
          borderRadius: 2,
          backgroundColor: "black",
        }}
      >
        <Typography
          variant="h1"
          align="center"
          sx={{
            fontSize: 40,
            color: "rgb(255, 190, 130)",
            paddingTop: 2,
            paddingBottom: 2,
          }}
        >
          Profile Info
        </Typography>
        <Box
          className="details-container"
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Box
            className="user-info-details"
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "40%",
              color: "rgb(255, 190, 130)",
              textAlign: "center",
              paddingRight: 2,
            }}
          >
            <Typography
              variant="h5"
              className="user-info-title"
              sx={{ fontFamily: "Ultra", fontSize: 25, marginLeft: 5 }}
            >
              Name:
            </Typography>
            <Typography
              className="user-info-detail"
              sx={{ fontSize: 20, marginLeft: 5 }}
            >{`${loggedInPlayer?.first_name} ${loggedInPlayer?.last_name}`}</Typography>
            <Typography
              variant="h5"
              className="user-info-title"
              sx={{ fontFamily: "Ultra", fontSize: 25, marginLeft: 5 }}
            >
              Email:
            </Typography>
            <Typography
              className="user-info-detail"
              sx={{ fontSize: 20, marginLeft: 5 }}
            >
              {loggedInPlayer?.email}
            </Typography>
            <Typography
              variant="h5"
              className="user-info-title"
              sx={{ fontFamily: "Ultra", fontSize: 25, marginLeft: 5 }}
            >
              Password:
            </Typography>
            <Typography
              className="user-info-detail"
              sx={{ fontSize: 20, marginLeft: 5 }}
            >
              ************
            </Typography>
            <Typography
              variant="h5"
              className="user-info-title"
              sx={{ fontFamily: "Ultra", fontSize: 25, marginLeft: 5 }}
            >
              Current Location:
            </Typography>
            <Typography
              className="user-info-detail"
              sx={{ fontSize: 20, marginLeft: 5 }}
            >
              {loggedInPlayer?.location?.state}
            </Typography>
            <Button
              variant="contained"
              sx={{
                width: "10rem",
                margin: "20px auto",
                backgroundColor: "rgb(255, 190, 130)",
                color: "black",
              }}
              onClick={() => handleDisplay()}
            >
              Update Location
            </Button>
            {displaySelect && (
              <Box
                className="update-location"
                sx={{ width: "30%", margin: "0 auto", marginTop: 2 }}
              >
                <Select
                  fullWidth
                  onChange={(e) => setLocation(e.target.value)}
                  defaultValue=""
                >
                  <MenuItem value="">Select Location</MenuItem>
                  {locations.map((location) => (
                    <MenuItem
                      key={location.id}
                      value={JSON.stringify(location)}
                    >
                      {location.state}
                    </MenuItem>
                  ))}
                </Select>
                <Button
                  variant="contained"
                  sx={{ marginTop: 2 }}
                  onClick={() => changeLocation(location)}
                >
                  Submit
                </Button>
              </Box>
            )}
          </Box>
        </Box>
        <UserCreatedMeetUps loggedInPlayer={loggedInPlayer} />
      </Box>
      <UserJoinedMeetUps loggedInPlayer={loggedInPlayer} />
    </Box>
  );
}

export default Account;
