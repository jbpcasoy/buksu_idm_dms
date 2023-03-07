import ApartmentIcon from "@mui/icons-material/Apartment";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BusinessIcon from "@mui/icons-material/Business";
import DescriptionIcon from "@mui/icons-material/Description";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import Person2Icon from "@mui/icons-material/Person2";
import Person4Icon from "@mui/icons-material/Person4";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Fragment, useState } from "react";

const menuItems = [
  {
    label: "Home",
    icon: <HomeIcon />,
    link: "/admin",
  },
  {
    label: "Users",
    icon: <PersonIcon />,
    link: "/admin/user",
  },
  {
    label: "Colleges",
    icon: <BusinessIcon />,
    link: "/admin/college",
  },
  {
    label: "Departments",
    icon: <ApartmentIcon />,
    link: "/admin/department",
  },
  {
    label: "Faculties",
    icon: <PersonIcon />,
    link: "/admin/faculty",
  },
  {
    label: "Chairpersons",
    icon: <Person4Icon />,
    link: "/admin/chairperson",
  },
  {
    label: "Coordinators",
    icon: <Person2Icon />,
    link: "/admin/coordinator",
  },
  {
    label: "IMs",
    icon: <DescriptionIcon />,
    link: "/admin/im",
  },
  {
    label: "Files",
    icon: <FileOpenIcon />,
    link: "/admin/file",
  },
  {
    label: "IM Review",
    icon: <AssignmentIcon />,
    link: "/admin/im_review",
  },
];

export default function AdminDrawerMenu() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <Fragment>
      <IconButton
        size='large'
        edge='start'
        color='inherit'
        aria-label='menu'
        sx={{ mr: 2 }}
        onClick={() => setOpenMenu(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor='left' open={openMenu} onClose={() => setOpenMenu(false)}>
        <Box
          sx={{ width: 250 }}
          role='presentation'
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem disablePadding key={item.label}>
                <ListItemButton component='a' href={item.link}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Fragment>
  );
}
