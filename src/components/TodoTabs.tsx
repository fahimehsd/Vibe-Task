import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { type SyntheticEvent } from "react";

function a11yProps(index: number) {
  return {
    id: `tab-${index}`,
    "aria-controls": `tab-${index}`
  };
}

interface TabProps {
  setValue: (value: number) => void;
  value: number;
}

export default function TodoTabs(props: TabProps) {
  const { value, setValue } = props;

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: "divider", width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        centered
      >
        <Tab label="All" {...a11yProps(0)} />
        <Tab label="Done" {...a11yProps(1)} />
        <Tab label="In Progress" {...a11yProps(2)} />
      </Tabs>
    </Box>
  );
}
