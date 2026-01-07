import { Box, Typography } from "@mui/material";
import TodoTabs from "./components/TodoTabs";
import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { useAppSelector } from "./app/hook";
import TodoItem from "./components/TodoItem";

const App = () => {
  const [value, setValue] = useState(0);
  const todos = useAppSelector((state) => state.todos.items);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        p: 5
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: 350
        }}
      >
        <Typography variant="h5" mb={5}>
          Vibe Task - Fahimeh Sadeghi
        </Typography>
        <AddTodo />
        <TodoTabs value={value} setValue={setValue} />
        <TodoList value={value} index={0}>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              title={todo.title}
              description={todo.description}
              completed={todo.completed}
            />
          ))}
        </TodoList>
        <TodoList value={value} index={1}>
          {todos.map(
            (todo) =>
              todo.completed && (
                <TodoItem
                  key={todo.id}
                  title={todo.title}
                  description={todo.description}
                  completed={todo.completed}
                />
              )
          )}
        </TodoList>
        <TodoList value={value} index={2}>
          In Progress
        </TodoList>
      </Box>
    </Box>
  );
};

export default App;
