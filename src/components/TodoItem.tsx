import {
  Box,
  Checkbox,
  FormControlLabel,
  IconButton,
  Typography,
} from "@mui/material";
import { useAppDispatch } from "../app/hook";
import { removeTodo, toggleTodo } from "../app/features/todoSlice";
import { DeleteOutline } from "@mui/icons-material";

interface TodoProps {
  completed: boolean;
  title: string;
  description: string;
  id: string;
}

const TodoItem = (props: TodoProps) => {
  const { title, description, completed, id } = props;

  const dispatch = useAppDispatch();

  const checkHandler = () => {
    dispatch(toggleTodo(id));
  };

  const deleteHandler = () => {
    dispatch(removeTodo(id));
  };

  return (
    <Box
      sx={{
        border: completed ? "2px solid green" : "2px solid grey",
        borderRadius: 2,
        px: 2,
        py: 1,
        display: "flex",
        mb: 2,
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <FormControlLabel
          control={
            <Checkbox
              color="success"
              checked={completed}
              onChange={checkHandler}
            />
          }
          label={title}
        />

        <Typography variant="caption">{description}</Typography>
      </Box>

      {/* Delete Button (Extra) */}
      <IconButton
        sx={{
          width: 40,
          height: 40,
        }}
        onClick={deleteHandler}
      >
        <DeleteOutline color="error" />
      </IconButton>
    </Box>
  );
};

export default TodoItem;
