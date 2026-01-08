import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { useAppDispatch } from "../app/hook";
import { addTodo } from "../app/features/todoSlice";
import { v4 as uuid } from "uuid";

const AddTodo = () => {
  const [todo, setTodo] = useState({
    title: "",
    description: "",
    completed: false,
  });

  const dispatch = useAppDispatch();

  const handleAdd = () => {
    dispatch(addTodo({ id: uuid(), ...todo }));
    setTodo({
      title: "",
      description: "",
      completed: false,
    });
  };
  return (
    <Stack width={"100%"} direction="column" spacing={2} mb={3}>
      <TextField
        label="New Todo"
        value={todo.title}
        onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        fullWidth
      />
      <TextField
        id="outlined-multiline-flexible"
        label="Description"
        multiline
        minRows={3}
        value={todo.description}
        onChange={(e) => setTodo({ ...todo, description: e.target.value })}
      />
      <Button variant="contained" onClick={handleAdd}>
        Add
      </Button>
    </Stack>
  );
};

export default AddTodo;
