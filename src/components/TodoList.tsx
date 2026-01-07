import { Box } from "@mui/material";
import { type ReactNode } from "react";

interface TabProps {
  children?: ReactNode;
  index: number;
  value: number;
}

function TodoList(props: TabProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tab"
      hidden={value !== index}
      id={`tab-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default TodoList;
