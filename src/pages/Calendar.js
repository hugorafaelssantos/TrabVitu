import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Box, Typography, Input, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');
  const [entries, setEntries] = useState([]);

  const handleChangeDate = (newDate) => {
    const formattedDate = formatDateToBR(newDate);
    setDate(formattedDate);
  };

  const handleAddEntry = () => {
    if (description && value) {
      const newEntry = {
        date: date,
        description,
        value,
      };
      setEntries([...entries, newEntry]);

      setDescription('');
      setValue('');
    } else {
      alert('Adicione os campos de descrição, valor e data.');
    }
  };

  const formatDateToBR = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      backgroundColor="#f0f0f0"
      sx={{
        paddingTop: '80px',
      }}
    >
      <Typography variant="h4" gutterBottom mb={10} fontFamily={"fantasy"} color="#333">
        Calendário de Despesas
      </Typography>
      <Box display={'flex'} justifyContent="center" alignItems="center" flexDirection="column">
        <Box display="flex" justifyContent="space-between" width={"100%"} alignItems="center" mb={2}>
          <Input
            placeholder="Description"
            variant="outlined"
            style={{
              backgroundColor: 'white',
              width: '200px',
              borderRadius: '4px',
            }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Input
            placeholder="Value"
            variant="outlined"
            style={{ backgroundColor: 'white', width: '100px' }}
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </Box>
        <Box sx={{ flex: '1', display: 'flex', justifyContent: 'center' }}></Box>
        <Calendar
          onChange={handleChangeDate}
          value={date}
          style={{ maxWidth: '300px' }}
        />
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddEntry}
        style={{ marginTop: '20px' }}
      >
        salvar
      </Button>

      {/* Tabela com rolagem aplicada na página inteira */}
      <Box mt={4} mb={4} width="100%" alignItems={'center'} display="flex" justifyContent="center" sx={{ overflowY: 'auto' }}>
        <TableContainer
          component={Paper}
          style={{
            maxWidth: '75%',
            marginTop: '20px',
            width: '100%',
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><strong>Data</strong></TableCell>
                <TableCell><strong>Descrição</strong></TableCell>
                <TableCell><strong>Valor</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {entries.map((entry, index) => (
                <TableRow key={index}>
                  <TableCell>{entry.date}</TableCell>
                  <TableCell>{entry.description}</TableCell>
                  <TableCell>{entry.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default CalendarPage;
