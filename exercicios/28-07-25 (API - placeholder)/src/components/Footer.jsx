// src/components/Footer.jsx
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box sx={footerStyles.container}>
      <Typography sx={footerStyles.text}>
        &copy; Vinicius Fogaça Cintra
      </Typography>
    </Box>
  );
}

const footerStyles = {
  container: {
    backgroundColor: 'rgba(177, 16, 16, 1)',
    width: '110%',
    height: '8vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderTop: '7px solid white',
    boxSizing: 'border-box',
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
};

export default Footer;
