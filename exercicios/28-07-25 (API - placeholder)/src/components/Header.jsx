// src/components/Header.jsx
import { Box, Typography } from '@mui/material';

function Header() {
  return (
    <Box sx={headerStyles.container}>
      <Typography variant="h5" sx={headerStyles.title}>
        Minha Aplicação
      </Typography>
    </Box>
  );
}

const headerStyles = {
  container: {
    backgroundColor: 'rgba(177, 16, 16, 1)',
    width: '110%',
    height: '10vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: '7px solid white',
  },
  title: {
    color: 'white',
    fontSize: '28px',
    fontWeight: 'bold',
  },
};

export default Header;
