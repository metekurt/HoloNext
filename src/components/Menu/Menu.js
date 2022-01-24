import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import MenuIcon from "@mui/icons-material/Menu";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";

const actions = [
  { icon: <InfoIcon />, name: "About" },
  { icon: <ContactMailIcon />, name: "Contact" },
];

export default function BasicSpeedDial() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: "absolute", bottom: 16, left: 16 }}
        icon={<MenuIcon />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen={true}
            tooltipPlacement={"right"}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
