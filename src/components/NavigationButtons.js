import { Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const NavigationButtons = ({ buttons }) => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
      {buttons.map((button, index) => (
        <Button
          key={index}
          variant="contained"
          color={button.color || "primary"}
          style={{ marginBottom: '10px', width: '200px', fontFamily: 'cursive' }}
          component={button.to ? Link : 'button'}
          to={button.to}
          onClick={button.onClick}
        >
          {button.label}
        </Button>
      ))}
    </Box>
  );
};

export default NavigationButtons;
