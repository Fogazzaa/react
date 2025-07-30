// src/components/CardUsers.jsx
import { Box, Typography, Paper } from '@mui/material';

function CardUsers({ user }) {
  if (!user) {
    return null;
  }

  return (
    <Paper elevation={3} sx={cardUserStyles.paper}>
      <Typography variant="h6" component="div" sx={cardUserStyles.name}>
        {user.name} ({user.username})
      </Typography>
      <Typography variant="body2" sx={cardUserStyles.email}>
        Email: {user.email}
      </Typography>
      {user.address && (
        <Box sx={cardUserStyles.address}>
          <Typography variant="body2">
            Address: {user.address.city}
          </Typography>
        </Box>
      )}
      <Typography variant="body2" sx={cardUserStyles.id}>
        User ID: {user.id}
      </Typography>
    </Paper>
  );
}

const cardUserStyles = {
  paper: {
    padding: '20px',
    borderRadius: '12px',
    backgroundColor: '#fff',
    width: '100%',
    margin: '10px 0',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
  },
  name: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    marginBottom: '8px',
    color: '#333',
  },
  email: {
    fontSize: '0.95rem',
    color: '#555',
    marginBottom: '5px',
  },
  address: {
    fontSize: '0.9rem',
    color: '#777',
    marginBottom: '10px',
  },
  id: {
    fontSize: '0.85rem',
    color: '#999',
    textAlign: 'right',
  },
};

export default CardUsers;
