import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import CustomizedMenus from "./Dropdown";
import type { DropdownItem } from "./Dropdown";
import { ThemeContext } from "../ThemeProviderWrapper";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Link } from "react-router-dom";

const pages = [
  { label: "Home", href: "/" },
  { label: "Contact", href: "/contact" },
];

const dropdownItems: DropdownItem[] = [
  { label: "Development", href: "/development" },
  { label: "Consulting", href: "/consulting" },
];

function ResponsiveAppBar() {
  const { mode, toggleTheme } = React.useContext(ThemeContext);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [servicesOpen, setServicesOpen] = React.useState(false);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setServicesOpen(false);
  };


  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1, color: "white" }} />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            className="navbar-logo"
            sx={{ display: { xs: "none", md: "flex" }, mr: 2, color: "white", textDecoration: "none" }}
          >
            Nice_Company's_Name
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >
              <MenuItem onClick={() => setServicesOpen((prev) => !prev)}>
                <Typography className="navbar-menuitem">Services</Typography>
              </MenuItem>
              {servicesOpen &&
                dropdownItems.map((item) => (
                  <MenuItem
                    key={item.label}
                    onClick={handleCloseNavMenu}
                    component={Link}
                    to={item.href}
                    sx={{ pl: 4 }}
                  >
                    {item.label}
                  </MenuItem>
                ))}
              {pages.map((page) => (
                <MenuItem
                  key={page.label}
                  onClick={handleCloseNavMenu}
                  component={Link}
                  to={page.href}
                >
                  <Typography className="navbar-menuitem">{page.label}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1, color: "white" }} />
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            className="navbar-logo"
            sx={{ display: { xs: "flex", md: "none" }, flexGrow: 1, mr: 2, color: "white", textDecoration: "none" }}
          >
            Nice_Company's_Name
          </Typography>

          <Box className="navbar-container" sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
            <Box className="navbar-button-dropdown">
              <CustomizedMenus items={dropdownItems} />
            </Box>
            {pages.map((page) => (
              <Button
                key={page.label}
                to={page.href}
                component={Link}
                className="navbar-button"
                sx={{ color: "white" }}
              >
                {page.label}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
            <IconButton onClick={toggleTheme} sx={{ ml: 2, color: "white" }}>
              {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;