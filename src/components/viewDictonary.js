import * as React from 'react';
import { DataGrid } from "@mui/x-data-grid";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ViewDictonary = ({ clickRevertBack }) => {


const [age, setAge] = React.useState('');

const handleChange = (event) => {
  console.log(event);
  setAge(event.target.value );
};


const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    editable: true,
    flex: 1,
  },
];


const rows = [
  { id: 1, firstName: "Snow" },
  { id: 2, firstName: "Lannister" },
  { id: 3, firstName: "Lannister" },
  { id: 4, firstName: "Stark" },
  { id: 5, firstName: "Targaryen" },
  { id: 6, firstName: "Melisandre" },
  { id: 7, firstName: "Clifford" },
  { id: 8, firstName: "Frances" },
  { id: 9, firstName: "Roxie" },
];



  return (
    <div>
      <div>
      
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select the view</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Select the view"
          onChange={handleChange}
        >
          <MenuItem value={1}>1. Updated Dictionary (Additional)</MenuItem>
          <MenuItem value={2}>2. Accepted Abbreviations</MenuItem>
          <MenuItem value={3}>3. Sanofi Product List</MenuItem>
          <MenuItem value={4}>4. Sanofi Unit Code (R3)</MenuItem>
        </Select>
      </FormControl>
    </Box>
    
    
    </div>
    <div className="grid grid-cols-1 ">
      
      
      <div className="shadow-md bg-white p-2">
        
        <div className="w-full">
          <DataGrid
            rows={rows}
            columns={columns}
            autoHeight
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            disableSelectionOnClick
            experimentalFeatures={{ newEditingApi: true }}
          />
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default ViewDictonary;
