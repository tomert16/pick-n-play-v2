import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import FieldMeetUpList from "../../field/FieldMeetUpList";
import {
  FormControl,
  Select,
  MenuItem,
  Box,
  Typography,
  Button,
  TextField,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchFieldById,
  isLoadingData,
  selectFieldById,
} from "../redux/fields/fieldsSlice";
import { selectLoggedInPlayer } from "../redux/players/playersSlice";
import { addNewMeetUp } from "../redux/meetUps/meetUpsSlice";
import Pagination from "../ui/Pagination";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Loader from "../ui/Loader";
import { ToastContainer } from "react-toastify";
import { successfullyCreated, unsuccessfullyCreated } from "../ui/Toastify";

function FieldInfo({ selectedField, setSelectedField, locations }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;
  const loggedInPlayer = useSelector(selectLoggedInPlayer);
  const [date, setDate] = useState("");
  const [sportInput, setSportInput] = useState();
  const [formToggle, setFormToggle] = useState(false);
  const [amountOfMeetUps, setAmountOfMeetUps] = useState();
  const [currentSlide, setCurrentSlide] = useState(1);

  // loader functionality
  const loading = useSelector(isLoadingData);

  // fetch individual field
  const individualField = useSelector(selectFieldById);
  useEffect(() => {
    if (id) {
      dispatch(fetchFieldById(id));
    }
  }, [dispatch, id]);

  const createMeetUp = async () => {
    const newMeetUp = {
      date: date,
      field_id: individualField.id,
      sport_id: sportInput,
      player_id: loggedInPlayer.id,
    };
    const addNew = await dispatch(addNewMeetUp(newMeetUp));
    await dispatch(fetchFieldById(id));
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

  if (individualField === undefined) return null;

  // pagination variables and values
  const indexOfLastCard = currentSlide * amountOfMeetUps;
  const indexOfFirstCard = indexOfLastCard - amountOfMeetUps;
  // change slides functionalities
  const nextSlide = () => setCurrentSlide(currentSlide + 1);
  const previousSlide = () => setCurrentSlide(currentSlide - 1);
  const end = indexOfLastCard >= individualField.meet_ups.length;
  const beginning = currentSlide === 1;

  const handleFormToggle = () => {
    setFormToggle(true);
  };

  return (
    <Box sx={{ padding: 3 }}>
      <ToastContainer />
      {loading ? (
        <Loader />
      ) : (
        <>
          <Typography
            variant="h1"
            className="field-info-title"
            sx={{
              color: "rgb(12, 12, 12)",
              textAlign: "center",
              fontSize: "4.5vw",
              fontFamily: "Ultra",
              textShadow: "2px 2px 3px rgb(255, 205, 98)",
              marginBottom: 3,
            }}
          >
            {individualField.field_name}:
          </Typography>
          <Box
            className="meet-ups-list"
            sx={{ display: "flex", gap: 2, marginBottom: 3 }}
          >
            {individualField.meet_ups
              .slice(indexOfFirstCard, indexOfLastCard)
              .map((meetUp) => (
                <FieldMeetUpList
                  meetUp={meetUp}
                  key={meetUp.id}
                  selectedField={selectedField}
                  setSelectedField={setSelectedField}
                  loggedInPlayer={loggedInPlayer}
                />
              ))}
          </Box>
          <Box id="pagination" sx={{ marginBottom: 3 }}>
            <Pagination
              displayNum={true}
              amount={amountOfMeetUps}
              next={nextSlide}
              prev={previousSlide}
              total={individualField.meet_ups.length}
              beginning={beginning}
              end={end}
              currentSlide={currentSlide}
            />
          </Box>
          {formToggle && (
            <Box
              className="new-meet-up-container"
              sx={{
                position: "relative",
                width: "fit-content",
                margin: "0 auto",
              }}
            >
              <Box
                className="new-mu-form"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  padding: 3,
                  borderRadius: 2,
                  border: "1px solid #535353",
                  backgroundColor: "#535353",
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
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  sx={{ marginBottom: 2, backgroundColor: "white" }}
                />
                <FormControl fullWidth sx={{ marginBottom: 2 }}>
                  <Select
                    value={sportInput || ""}
                    onChange={(e) => setSportInput(e.target.value)}
                    displayEmpty
                  >
                    <MenuItem value="">
                      <em>Pick a Sport</em>
                    </MenuItem>
                    {loggedInPlayer.location.sports.map((sport) => (
                      <MenuItem key={sport.id} value={sport.id}>
                        {sport.sport_type}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Button
                  variant="contained"
                  sx={{
                    marginBottom: 2,
                    backgroundColor: "aliceblue",
                    color: "#4d4574",
                  }}
                  onClick={createMeetUp}
                >
                  Create
                </Button>
                <Button
                  className="close-form"
                  onClick={() => setFormToggle(false)}
                  sx={{ color: "white", backgroundColor: "transparent" }}
                >
                  <AiOutlineCloseCircle style={{ fontSize: "2rem" }} />
                </Button>
              </Box>
            </Box>
          )}
        </>
      )}
    </Box>
  );
}

export default FieldInfo;
