// src/pages/Home.js

import { Box, Typography } from '@mui/material';
import NavigationButtons from '../components/NavigationButtons';
import HighlightedText from '../components/HighlightedText';

const Home = () => {
  const buttons = [
    { label: 'Sobre', to: '/about', color: 'warning' },
    { label: 'Contato', to: '/contact', color: 'secondary' },
    { label: 'Calendario', to: '/calendar', color: 'primary' },
  ];

  return (
    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" height="100vh" backgroundColor="#f0f0f0">
      <Typography variant="h4" gutterBottom mb={15} fontFamily={"fantasy"} color="#333">
        Bem-vindo ao <HighlightedText>Economize+</HighlightedText>
      </Typography>

      <NavigationButtons buttons={buttons} />
    </Box>
  );
};

export default Home;
