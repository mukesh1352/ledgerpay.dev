import { createFileRoute } from "@tanstack/react-router";
import { Box } from "@mui/material";
import SpeedDialTooltipOpen from "../components/SpeedDialTooltipOpen";


export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
  <></>
  );
}
