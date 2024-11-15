import { useState } from "react";
import { useRouter } from "next/router";
import sportsbg from "/Users/tomertal/Development/code/personal-projects/pick-n-play-v2/src/assets/sportsbg.jpeg";
import Header from "../Header";
// import { useDispatch } from "react-redux";
// import { logIn } from "../redux/players/playersSlice";
import { Box, Container, Typography, Button, TextField } from "@mui/material";
import { createClient } from "@/utils/supabase/client";

const Login = () => {
  const router = useRouter();
  const supabase = createClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: any) => {
    try {
      e.preventDefault();
      const newUserData = { email, password };
      let result = await supabase.auth.signInWithPassword(newUserData);
      const { data, error } = result;

      if (error) {
        const message = error.message.includes("abcdefghijklmnopqrstuvwxyz")
          ? "Your information is incorrect"
          : error.message;

        setError(message);
        return false;
      } else {
        router.push("/home");
      }
    } catch (err) {
      setError("Incorrect email or password");
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
        }}
      >
        <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
          Log in
        </Typography>
        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
        {error && (
          <Typography color="error" sx={{ mt: 2 }}>
            {error}
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default Login;
