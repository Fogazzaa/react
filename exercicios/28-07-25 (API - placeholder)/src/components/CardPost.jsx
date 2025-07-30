// src/components/CardPost.jsx

import { Box, Typography, Paper } from '@mui/material';

function CardPost({ post }) {
  if (!post) {
    return null;
  }

  return (
    <Paper elevation={3} sx={cardPostStyles.paper}>
      <Typography variant="h6" component="div" sx={cardPostStyles.title}>
        {post.title}
      </Typography>
      <Box sx={cardPostStyles.info}>
        <Typography variant="body2">
          User ID: {post.userId}
        </Typography>
        <Typography variant="body2">
          Post ID: {post.id}
        </Typography>
      </Box>
      <Typography variant="body1" sx={cardPostStyles.body}>
        {post.body}
      </Typography>
    </Paper>
  );
}

const cardPostStyles = {
  paper: {
    padding: '20px',
    borderRadius: '12px',
    backgroundColor: '#fff',
    width: '100%',
    margin: '10px 0',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '1.4rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#333',
  },
  info: {
    marginBottom: '15px',
    color: '#666',
    display: 'flex',
    justifyContent: 'space-between',
    '& > *': {
      marginRight: '15px',
    },
  },
  body: {
    fontSize: '1rem',
    color: '#555',
    lineHeight: '1.6',
    whiteSpace: 'pre-wrap',
  },
};

export default CardPost;
