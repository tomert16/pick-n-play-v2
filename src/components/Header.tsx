import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import pnplogo from "../assets/pnplogo.png";
import { Box, Button } from "@mui/material";

function Header({ isAdmin = false, login = false }) {
  const router = useRouter();
  const isLogin = router.asPath.includes("login");
  return (
    <Box
      sx={{
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 3rem",
      }}
    >
      <Box sx={{ cursor: "pointer" }} onClick={() => router.push("/")}>
        <Image src={pnplogo} alt="logo" height={70} width={200} />
      </Box>
      {!isAdmin &&
        (!isLogin ? (
          <Button
            onClick={() => router.push("/login")}
            variant="contained"
            sx={{
              backgroundColor: "#724f72",
              color: "white",
              fontWeight: "bold",
              fontSize: "1.05rem",
              "&:hover": {
                backgroundColor: "#5a3e5a",
              },
            }}
          >
            Login
          </Button>
        ) : (
          <Button
            onClick={() => router.push("/signup")}
            variant="contained"
            sx={{
              backgroundColor: "#724f72",
              color: "white",
              fontWeight: "bold",
              fontSize: "1.05rem",
              "&:hover": {
                backgroundColor: "#5a3e5a",
              },
            }}
          >
            Sign Up
          </Button>
        ))}
    </Box>
  );
}

export default Header;
