import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewField } from "../../redux/fields/fieldsSlice";
import { addNewSport } from "../../redux/sports/sportsSlice";
import {
  Box,
  Button,
  TextField,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";

function RequestManagementForm({ locations, formType }) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [bgImage, setBgImage] = useState("");

  const handleSubmitField = async (e) => {
    e.preventDefault();
    const newField = {
      field_name: name,
      img_url: image,
      location_id: parseInt(location),
    };
    try {
      let text = "Ready to add?";
      if (window.confirm(text) === true) {
        text = "Successfully added ✅";
        await dispatch(addNewField(newField));
      }
      alert(text);
    } catch {
      alert("An error has occurred ❌");
    }
  };

  const handleSubmitSport = (e) => {
    e.preventDefault();
    const newSport = {
      sport_type: name,
      img_url: image,
      bg_img: bgImage,
      location_id: parseInt(location),
    };
    let text = "Ready to add?";
    if (window.confirm(text) === true) {
      text = "Successfully added ✅";
      dispatch(addNewSport(newSport));
    }
    alert(text);
  };

  return (
    <Box sx={{ padding: 3 }}>
      {formType ? (
        <form onSubmit={handleSubmitSport}>
          <Typography variant="h6" gutterBottom>
            Add Sport
          </Typography>
          <TextField
            required
            fullWidth
            label="Name"
            placeholder="Enter name of sport"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
          />
          <TextField
            required
            fullWidth
            label="Image URL"
            placeholder="Enter image url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            margin="normal"
          />
          <TextField
            required
            fullWidth
            label="Background Image URL"
            placeholder="Enter background image url"
            value={bgImage}
            onChange={(e) => setBgImage(e.target.value)}
            margin="normal"
          />
          <Select
            required
            fullWidth
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            displayEmpty
            margin="normal"
          >
            <MenuItem value="">Select Location</MenuItem>
            {locations.map((loc) => (
              <MenuItem key={loc.id} value={loc.id}>
                {loc.state}
              </MenuItem>
            ))}
          </Select>
          <Button type="submit" variant="contained" sx={{ marginTop: 2 }}>
            Submit
          </Button>
        </form>
      ) : (
        <form onSubmit={handleSubmitField}>
          <Typography variant="h6" gutterBottom>
            Add Field
          </Typography>
          <TextField
            required
            fullWidth
            label="Name"
            placeholder="Enter name of field/park"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
          />
          <TextField
            required
            fullWidth
            label="Image URL"
            placeholder="Enter image url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            margin="normal"
          />
          <Select
            required
            fullWidth
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            displayEmpty
            margin="normal"
          >
            <MenuItem value="">Select Location</MenuItem>
            {locations.map((loc) => (
              <MenuItem key={loc.id} value={loc.id}>
                {loc.state}
              </MenuItem>
            ))}
          </Select>
          <Button type="submit" variant="contained" sx={{ marginTop: 2 }}>
            Submit
          </Button>
        </form>
      )}
    </Box>
  );
}

export default RequestManagementForm;
