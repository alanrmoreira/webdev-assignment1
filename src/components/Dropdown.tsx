import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export interface DropdownItem {
  label: string;
  href: string;
}

interface DropdownProps {
  items: DropdownItem[];
}

export default function CustomizedMenus({ items }: DropdownProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button onClick={handleClick} className="navbar-button" sx={{ color: "white" }}>
        Services▼
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{ "aria-labelledby": "services-button" }}
      >
        {items.map((item) => (
          <MenuItem
            key={item.label}
            onClick={handleClose}
            component={Link}
            to={item.href}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}