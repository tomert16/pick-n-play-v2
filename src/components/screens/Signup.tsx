import { useState } from "react";
import { useRouter } from "next/router";
// import { useDispatch } from 'react-redux';

// import { createNewPlayer } from "../redux/players/playersSlice";
import { Box, Button, Typography, TextField, Container } from "@mui/material";
import { createClient } from "@/utils/supabase/client";

function Signup() {
  const supabase = createClient();
  const router = useRouter();
  //   const dispatch = useDispatch();

  const [emailInput, setEmailInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");

  const [errors, setErrors] = useState<string>("");

  const handleSignup = async (e: any) => {
    e.preventDefault();
    const newPlayer = {
      email: emailInput,
      password: passwordInput,
    };
    try {
      await supabase.auth.signUp(newPlayer);
      router.push("/signup/complete-profile");
    } catch (err) {
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
      }}
    >
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          backgroundColor: "#e3e3e3",
          p: 4,
          borderRadius: 2,
          boxShadow: "16px 16px 32px #c8c8c8, -16px -16px 32px #fefefe",
          textAlign: "center",
          width: "100%",
          maxWidth: "500px",
        }}
      >
        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          Sign Up
        </Typography>
        <form onSubmit={handleSignup}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={emailInput}
            onChange={(e) => setEmailInput(e.target.value)}
            required
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            value={passwordInput}
            onChange={(e) => setPasswordInput(e.target.value)}
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
        {errors && (
          <Typography color="error" sx={{ mt: 2 }}>
            {errors}
          </Typography>
        )}
      </Box>
    </Container>
  );
}

export default Signup;
