// src/components/CardToDos.jsx
import { Box, Typography, Paper, Checkbox } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';

function CardToDos({ todo }) {
  if (!todo) {
    return null;
  }

  return (
    <Paper elevation={3} sx={cardTodoStyles.paper}>
      <Box sx={cardTodoStyles.content}>
        <Checkbox
          checked={todo.completed}
          readOnly
          sx={{ padding: 0, marginRight: '10px' }}
          icon={<RadioButtonUncheckedIcon sx={{ color: '#ccc' }} />}
          checkedIcon={<CheckCircleOutlineIcon sx={{ color: '#4CAF50' }} />}
        />
        <Typography
          variant="body1"
          sx={{
            ...cardTodoStyles.title,
            textDecoration: todo.completed ? 'line-through' : 'none',
            color: todo.completed ? '#888' : '#333',
          }}
        >
          {todo.title}
        </Typography>
      </Box>
      <Box sx={cardTodoStyles.info}>
        <Typography variant="body2" sx={cardTodoStyles.userId}>
          User ID: {todo.userId}
        </Typography>
        <Typography variant="body2" sx={cardTodoStyles.todoId}>
          Todo ID: {todo.id}
        </Typography>
      </Box>
    </Paper>
  );
}

const cardTodoStyles = {
  paper: {
    padding: '15px 20px',
    borderRadius: '12px',
    backgroundColor: '#fff',
    width: '100%',
    margin: '10px 0',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.08)',
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  title: {
    fontSize: '1.1rem',
    fontWeight: 'normal',
    flexGrow: 1,
  },
  info: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '0.85rem',
    color: '#777',
  },
  userId: {
    marginRight: '10px',
  },
  todoId: {
    textAlign: 'right',
  },
};

export default CardToDos;
