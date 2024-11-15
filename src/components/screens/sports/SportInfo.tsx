import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  FormControl,
  Select,
  MenuItem,
  Box,
  Typography,
  Button,
  TextField,
} from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import MeetUpList from "../components/sport/MeetUpsList";
import {
  fetchSportById,
  isLoadingData,
  selectSportById,
} from "../redux/sports/sportsSlice";
import { addNewMeetUp } from "../redux/meetUps/meetUpsSlice";
import { selectLoggedInPlayer } from "../redux/players/playersSlice";
// import Pagination from "../ui/Pagination";
// import Loader from "../ui/Loader";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { ToastContainer } from "react-toastify";
// import { successfullyCreated, unsuccessfullyCreated } from "../ui/Toastify";

function SportInfo({ setSelectedMeetUp, locations }) {
  // const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  // const loggedInPlayer = useSelector(selectLoggedInPlayer);
  const [date, setDate] = useState("");
  const [location, setLocation] = useState();
  const [formToggle, setFormToggle] = useState(false);
  const [amountOfMeetUps, setAmountOfMeetUps] = useState();
  const [currentSlide, setCurrentSlide] = useState(1);
  // loading function
  // const loading = useSelector(isLoadingData);

  // fetch individual sport
  // const individualSport = useSelector(selectSportById);
  // useEffect(() => {
  //   if (id) {
  //     dispatch(fetchSportById(id));
  //   }
  // }, [dispatch, id]);

  const handleFormToggle = () => {
    setFormToggle(true);
  };

  const createMeetUps = async () => {
    const newMeetUp = {
      date: date,
      field_id: parseInt(location),
      sport_id: parseInt(individualSport.id),
      player_id: parseInt(loggedInPlayer.id),
    };
    // const addNew = await dispatch(addNewMeetUp(newMeetUp));
    // await dispatch(fetchSportById(id));
    if (!addNew.error) {
      setFormToggle(false);
      successfullyCreated();
      setDate("");
    } else {
      unsuccessfullyCreated();
    }
  };

  // display amount of meet ups based on screen size
  useEffect(() => {
    if (window.innerWidth >= 768) {
      setAmountOfMeetUps(5);
    } else {
      setAmountOfMeetUps(3);
    }
  }, [amountOfMeetUps]);

  // if (individualSport === undefined) return null;

  // Pagination variables and values
  const indexOfLastCard = currentSlide * amountOfMeetUps;
  const indexOfFirstCard = indexOfLastCard - amountOfMeetUps;
  // Change slides functionalities
  const nextSlide = () => setCurrentSlide(currentSlide + 1);
  const previousSlide = () => setCurrentSlide(currentSlide - 1);
  const end = indexOfLastCard >= individualSport.meet_ups.length;
  const beginning = currentSlide === 1;

  return (
    <Box sx={{ padding: 3 }}>
      <ToastContainer />
      {loading ? (
        <Loader />
      ) : (
        <Box
          className="bg-image"
          sx={{
            backgroundImage: `url(${individualSport.bg_img})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: "100vh",
            width: "100vw",
            overflowX: "scroll",
          }}
        >
          <Typography
            variant="h1"
            className="info-title"
            sx={{
              color: "rgb(246, 247, 248)",
              textAlign: "center",
              fontSize: "5vw",
              fontFamily: "Ultra",
              textShadow: "2px 2px 3px rgb(255, 205, 98)",
              marginBottom: 3,
            }}
          >
            {individualSport.sport_type}:
          </Typography>
          <Box
            className="meet-ups-list"
            sx={{ display: "flex", gap: 2, marginBottom: 3 }}
          >
            {individualSport.meet_ups
              .slice(indexOfFirstCard, indexOfLastCard)
              .map((meetUp) => (
                <MeetUpList
                  setSelectedMeetUp={setSelectedMeetUp}
                  meetUp={meetUp}
                  key={meetUp.id}
                  loggedInPlayer={loggedInPlayer}
                  individualSport={individualSport}
                />
              ))}
          </Box>
          <Box id="pagination" sx={{ marginBottom: 3 }}>
            <Pagination
              isSport={true}
              displayNum={true}
              amount={amountOfMeetUps}
              next={nextSlide}
              prev={previousSlide}
              total={individualSport.meet_ups.length}
              beginning={beginning}
              end={end}
              currentSlide={currentSlide}
            />
          </Box>
          <Box
            className="new-meet-up-container"
            sx={{ position: "absolute", top: "4rem", right: "10%" }}
          >
            {formToggle && (
              <Box
                className="new-mu-form"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  padding: 3,
                  borderRadius: 2,
                  border: "1px solid #535353",
                  backgroundColor: "#535353",
                  width: "15vw",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ color: "white", fontFamily: "Ultra", marginBottom: 2 }}
                >
                  Create a Meet Up
                </Typography>
                <TextField
                  type="datetime-local"
                  name="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  sx={{ marginBottom: 2, backgroundColor: "white" }}
                />
                <FormControl fullWidth sx={{ marginBottom: 2 }}>
                  <Select
                    key={loggedInPlayer.location.fields.length}
                    value={location || ""}
                    onChange={(e) => setLocation(e.target.value)}
                    displayEmpty
                  >
                    <MenuItem value="">
                      <em>Pick your field/court</em>
                    </MenuItem>
                    {loggedInPlayer?.location?.fields.map((field) => (
                      <MenuItem key={field.id} value={field.id}>
                        {field.field_name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Button
                  type="button"
                  value="Create Meet Up"
                  variant="contained"
                  className="create"
                  onClick={() => {
                    createMeetUps();
                  }}
                  sx={{
                    marginBottom: 2,
                    backgroundColor: "aliceblue",
                    color: "#4d4574",
                  }}
                >
                  Create
                </Button>
                <Button
                  className="close-form"
                  type="button"
                  onClick={() => setFormToggle(false)}
                  sx={{ color: "white", backgroundColor: "transparent" }}
                >
                  <AiOutlineCloseCircle />
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default SportInfo;
