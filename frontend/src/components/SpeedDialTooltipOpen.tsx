import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";

import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "@tanstack/react-router";
const actions = [
  { icon: <LoginIcon />, name: "Login" },
  { icon: <PersonAddIcon />, name: "Signup",to:"/Signup" },
];

export default function OpenIconSpeedDial() {
  return (
    <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="Ledger actions"
        sx={{ position: "fixed", bottom: 24, right: 24 }}
        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
