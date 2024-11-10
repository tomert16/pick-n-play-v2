import { useState } from "react";
import { useRouter } from "next/router";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import pnplogo from "../assets/pnplogo.png";
import { Box, Container, Button } from "@mui/material";

function NavBar({
  setSportFieldToggle,
  isHome,
  isAdmin,
  handleFormToggle,
  isInfoPage,
}) {
  const router = useRouter();
  const [iconToggle, setIconToggle] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [showMobileDropdown, setShowMobileDropdown] = useState(false);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
    setIconToggle(!iconToggle);
  };

  const handleLogout = async () => {
    // Add your logout logic here
    router.push("/");
  };

  const handleAdminLogout = async () => {
    // Add your admin logout logic here
    router.push("/admin_login");
  };

  const toggleMobileDropdown = () => {
    setShowMobileDropdown(!showMobileDropdown);
  };

  const links = [
    { name: "Sports", value: true },
    { name: "Fields", value: false },
  ];

  return (
    <Container>
      <Box
        component="nav"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          // backgroundColor: "white",
          padding: "15px",
          // position: "sticky",
          // top: 0,
          zIndex: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            component="img"
            src={pnplogo.src}
            alt="logo"
            sx={{ height: "3rem", cursor: "pointer" }}
            onClick={() => router.push("/home")}
          />
          {!isAdmin && (
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2, ml: 2 }}>
              {isHome ? (
                links.map(({ name, value }) => (
                  <Button
                    key={name}
                    onClick={() => setSportFieldToggle(value)}
                    sx={{ color: "black" }}
                  >
                    {name}
                  </Button>
                ))
              ) : (
                <Button
                  onClick={() =>
                    router.push(`/locations/${loggedInPlayer?.location.id}`)
                  }
                  sx={{ color: "black" }}
                >
                  Home
                </Button>
              )}
            </Box>
          )}
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton onClick={toggleMobileDropdown}>
              <span className="menu__icon" />
            </IconButton>
            {showMobileDropdown && (
              <Box
                sx={{
                  position: "absolute",
                  top: "100%",
                  backgroundColor: "#3d405b",
                  boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
                  zIndex: 1,
                  display: "flex",
                  flexDirection: "column",
                  padding: 2,
                  borderRadius: 1,
                }}
              >
                {!isHome && (
                  <Button
                    onClick={() =>
                      router.push(`/locations/${loggedInPlayer?.location.id}`)
                    }
                    sx={{ color: "white" }}
                  >
                    Home
                  </Button>
                )}
                {isHome && (
                  <>
                    <Button
                      onClick={() => setSportFieldToggle(true)}
                      sx={{ color: "white" }}
                    >
                      Sports
                    </Button>
                    <Button
                      onClick={() => setSportFieldToggle(false)}
                      sx={{ color: "white" }}
                    >
                      Fields
                    </Button>
                  </>
                )}
                <Button
                  onClick={() => router.push("/requests")}
                  sx={{ color: "white" }}
                >
                  Requests
                </Button>
                {isInfoPage && (
                  <Button onClick={handleFormToggle} sx={{ color: "white" }}>
                    Create
                  </Button>
                )}
              </Box>
            )}
          </Box>
          {isInfoPage && (
            <Button onClick={handleFormToggle} sx={{ color: "#3d405b" }}>
              Create New Meetup
            </Button>
          )}
          {!isAdmin && (
            <Button
              onClick={() => router.push("/requests")}
              sx={{ color: "#3d405b" }}
            >
              Request Sport or Field
            </Button>
          )}
          <IconButton
            onClick={handleProfileMenuOpen}
            aria-controls="account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            {/* Insert Account Icon Here */}
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={() => setAnchorEl(null)}
          >
            {!isAdmin && (
              <MenuItem
                onClick={() => {
                  router.push("/profile");
                  setAnchorEl(null);
                }}
              >
                Profile
              </MenuItem>
            )}
            <MenuItem onClick={isAdmin ? handleAdminLogout : handleLogout}>
              Logout
            </MenuItem>
          </Menu>
        </Box>
      </Box>
    </Container>
  );
}

export default NavBar;
