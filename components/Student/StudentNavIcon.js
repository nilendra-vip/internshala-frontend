import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import DescriptionIcon from '@mui/icons-material/Description';
import PersonIcon from '@mui/icons-material/Person';
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import HomeIcon from '@mui/icons-material/Home';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from "react-redux";
import { asyncStudentSignout } from "@/store/Actions/studentActions";
import Link from "next/link";

const StudentProfile = ({ isAuthenticated, student }) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const signoutHandler = () => {
    dispatch(asyncStudentSignout());
  };

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar
              src={student?.avatar.url}
              sx={{ width: 40, height: 40 }}
              className="theme-bg-colour"
            >
              N{" "}
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose} className="d-flex flex-column align-items-start">
          <Typography sx={{ minWidth: 100 }} className="fw-semibold">{student?.firstname + ' ' + student?.lastname}</Typography>
          <Typography sx={{ minWidth: 100 }} className="fw-light">{student?.email}</Typography>
        </MenuItem>

        <Divider />

        <Link
          href="/student/auth/"
          className="text-decoration-none theme-text-colour"
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <HomeIcon className="theme-text-colour" fontSize="small" />
            </ListItemIcon>
            Dashboard
          </MenuItem>
        </Link>
        <Link
          href="/student/auth/profile"
          className="text-decoration-none theme-text-colour"
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <PersonIcon className="theme-text-colour" fontSize="small" />
            </ListItemIcon>
            My Account
          </MenuItem>
        </Link>
        <Link
          href="/student/auth/applied"
          className="text-decoration-none theme-text-colour"
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <DescriptionIcon className="theme-text-colour" fontSize="small" />
            </ListItemIcon>
            My Applications
          </MenuItem>
        </Link>
        <Link
          href="/student/auth/resume"
          className="text-decoration-none theme-text-colour"
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <EditIcon className="theme-text-colour" fontSize="small" />
            </ListItemIcon>
            Edit Resume
          </MenuItem>
        </Link>
        <Link
          href="/student/auth/update"
          className="text-decoration-none theme-text-colour"
        >
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Settings className="theme-text-colour" fontSize="small" />
            </ListItemIcon>
            Settings
          </MenuItem>
        </Link>
        
          <MenuItem onClick={signoutHandler} >
            <ListItemIcon>
              <Logout className="theme-text-colour" fontSize="small" />
            </ListItemIcon>
            <span className="theme-text-colour">Logout</span>
          </MenuItem>
        
      </Menu>
    </>
  );
};

export default StudentProfile;
