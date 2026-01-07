import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";

interface TodoProps {
  completed: boolean;
  title: string;
  description: string;
}

const TodoItem = (props: TodoProps) => {
  const { title, description, completed } = props;

  return (
    <Box>
      <FormControlLabel control={<Checkbox />} label={title} />

      <Typography variant="caption">{description}</Typography>
    </Box>
  );
};

export default TodoItem;
