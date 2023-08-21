/* eslint-disable react/prop-types */
import MenuIcon from "@mui/icons-material/Menu";
import {
  Drawer as DrawerComponent,
  ListItemButton,
  ListItemText,
  List,
  IconButton,
} from "@mui/material";
import { useState } from "react";

export const Drawer = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <DrawerComponent open={isOpen} onClose={() => setIsOpen(false)}>
        <List>
          {links.map((item) => (
            <ListItemButton key={item} onClick={() => setIsOpen(false)}>
              <ListItemText>{item}</ListItemText>
            </ListItemButton>
          ))}
        </List>
      </DrawerComponent>
      <IconButton sx={{ ml: "auto" }} onClick={() => setIsOpen(true)}>
        <MenuIcon color="white" />
      </IconButton>
    </>
  );
};
