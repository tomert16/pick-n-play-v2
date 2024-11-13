import { useState } from "react";
import { useRouter } from "next/router";
// import { useDispatch } from 'react-redux';

// import { createNewPlayer } from "../redux/players/playersSlice";
import {
  Box,
  Button,
  Typography,
  TextField,
  Container,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { createClient } from "@/utils/supabase/client";
import DatePicker from "@/src/shared/components/DatePicker";
import { Moment } from "moment-timezone";

function CompleteProfile() {
  const router = useRouter();
  const supabase = createClient();

  const [firstNameInput, setFirstNameInput] = useState<string>("");
  const [lastNameInput, setLastNameInput] = useState<string>("");
  const [birthDateInput, setBirthDateInput] = useState<Moment | null>(null);
  const [genderInput, setGenderInput] = useState<string>("");
  const [phoneNumberInput, setPhoneNumberInput] = useState<string>("");

  const [errors, setErrors] = useState<string>("");

  const handleCreateProfile = async (e: any) => {
    e.preventDefault();

    const {
      data: { user },
    } = await supabase.auth.getUser();
    const userEmail = user?.user_metadata?.email;

    const playerInfo = {
      email: userEmail,
      first_name: firstNameInput,
      last_name: lastNameInput,
      birth_date: birthDateInput ? birthDateInput.format("YYYY-MM-DD") : null,
      gender: genderInput,
      phone_number: phoneNumberInput,
    };
    try {
      const newUser = await supabase.from("profiles").insert(playerInfo);
      console.log("USER DATA", newUser);
      router.push("/welcome");
    } catch (err) {
      console.log("ERR", err);
      setErrors("Invalid information");
    }
  };

  return (
    <Container
      maxWidth="sm"
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        flexDirection: "column",
      }}
    >
      <Typography variant="h4" component="h2" sx={{ mb: 2 }}>
        Enter Your Information
      </Typography>
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          backgroundColor: "#e3e3e3",
          p: 4,
          borderRadius: 2,
          boxShadow: "16px 16px 32px #c8c8c8, -16px -16px 32px #fefefe",
          // textAlign: "center",
          width: "100%",
          maxWidth: "500px",
        }}
      >
        <form onSubmit={handleCreateProfile}>
          <TextField
            fullWidth
            label="First Name"
            type="text"
            value={firstNameInput}
            onChange={(e) => setFirstNameInput(e.target.value)}
            required
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Last Name"
            type="text"
            value={lastNameInput}
            onChange={(e) => setLastNameInput(e.target.value)}
            required
            sx={{ mb: 2 }}
          />
          <DatePicker
            value={birthDateInput}
            onChange={(newValue) => setBirthDateInput(newValue!)}
            placeholder="Date of birth"
          />
          <FormControl fullWidth>
            {!genderInput ? (
              <InputLabel
                sx={{
                  fontSize: "16px",
                  color: "#777777",
                  pl: "10px",
                  overflow: "visible",
                }}
                id="select-sex-label"
              >
                Gender
              </InputLabel>
            ) : null}
            <TextField
              fullWidth
              autoComplete="sex"
              select
              value={genderInput}
              placeholder="Gender"
              onChange={(e) => setGenderInput(e.target.value)}
              required
              sx={{ mb: 2 }}
            >
              <MenuItem value={"male"}>Male</MenuItem>
              <MenuItem value={"female"}>Female</MenuItem>
            </TextField>
          </FormControl>
          <TextField
            fullWidth
            label="Phone Number"
            type="text"
            value={phoneNumberInput}
            onChange={(e) => setPhoneNumberInput(e.target.value)}
            required
            sx={{ mb: 2 }}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Enter
          </Button>
        </form>
        {/* {errors && (
          <Typography color="error" sx={{ mt: 2 }}>
            {errors}
          </Typography>
        )} */}
      </Box>
    </Container>
  );
}

export default CompleteProfile;
