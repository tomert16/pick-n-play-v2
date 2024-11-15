import { useRouter } from "next/router";
import Image from "next/image";
import sportsbg from "../assets/sportsbg.jpeg";
import Header from "../components/Header";
import { useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
import { usePlayer } from "../components/hooks/data";
import { useUser } from "@supabase/auth-helpers-react";
import { createClient } from "@/utils/supabase/client";

function Landing() {
  const router = useRouter();
  const supabase = createClient();

  // useEffect(() => {
  //   if (user) {
  //     router.push("/home");
  //   }
  // }, [user, router]);

  return (
    <Box
      sx={{
        height: "100vh",
        // width: "100vw",
        position: "relative",
        backgroundImage: `url(${sportsbg.src})`,
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "#0000007f",
        }}
      />
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100vh",
        }}
      >
        <Header login />
        <Box
          sx={{
            position: "absolute",
            bottom: "15%",
            left: "10%",
            color: "rgb(255, 205, 98)",
          }}
        >
          <Typography
            variant="h2"
            sx={{ fontSize: { xs: "1.6rem", md: "2.5rem" } }}
          >
            Play Whenever, Wherever
          </Typography>
          <Typography variant="h4" sx={{ mt: 1 }}>
            Find a Game. Meet People.
          </Typography>
          <Typography variant="h6" sx={{ mt: 1 }}>
            Ready to Play? Click below and Get Started!
          </Typography>
          <Button
            variant="contained"
            onClick={() => router.push("/signup")}
            sx={{
              mt: 2,
              fontSize: "17px",
              fontWeight: "500",
              padding: "0.35em 3.3em 0.35em 1.2em",
              backgroundColor: "#724f72",
              color: "white",
              borderRadius: "0.9em",
              display: "flex",
              alignItems: "center",
              boxShadow: "inset 0 0 1.6em -0.6em #714da6",
              "&:hover .icon": { width: "calc(100% - 0.6em)" },
            }}
          >
            Get started
            <Box
              className="icon"
              sx={{
                backgroundColor: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "2.2em",
                width: "2.2em",
                borderRadius: "0.7em",
                boxShadow: "0.1em 0.1em 0.6em 0.2em #7b52b9",
                marginLeft: "1em",
                position: "absolute",
                right: "0.3em",
                transition: "all 0.3s",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                ></path>
              </svg>
            </Box>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Landing;
