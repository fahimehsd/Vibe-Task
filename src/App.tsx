import { Box } from "@mui/material";
import TodoTabs from "./components/TodoTabs";
import TodoList from "./components/TodoList";
import { useState } from "react";

const App = () => {
  const [value, setValue] = useState(0);
  return (
    <Box>
      <TodoTabs value={value} setValue={setValue} />
      <TodoList value={value} index={0}>
        All
      </TodoList>
      <TodoList value={value} index={1}>
        Done
      </TodoList>
      <TodoList value={value} index={2}>
        In Progress
      </TodoList>
    </Box>
  );
};

export default App;
