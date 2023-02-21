import React from "react";
import Box from "@mui/material/Box";
import { useDispatch } from "react-redux";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { FileCopy, Print, FileDownload } from "@mui/icons-material";
import { updateSelectedNarratives } from '../actions';


const columns = [
  { field: "para", headerName: "Para", width: 90 },
  {
    field: "error",
    headerName: "Error",
    flex: 1,
    cellClassName:"highlight--cell",
  },
  {
    field: "suggestion",
    headerName: "Suggestion",
    flex: 1,
  },
  {
    field: "errorType",
    headerName: "Error Type",
    type: "number",
    flex: 1,
  },
  {
    field: "category",
    headerName: "Category",
    flex: 1,
  },
  {
    field: "StartPos",
    headerName: "StartPos",
    flex: 1,
  },
  {
    field: "EndPos",
    headerName: "EndPos",
    flex: 1,
  },
  {
    field: "operation",
    headerName: "Operation",
    flex: 1,
  },
  {
    field: "frontEndAction",
    headerName: "FrontendAction",
    flex: 1,
  },
];

const Summary = ({ revert, narrativeData ,onClickCorrectOutput}) => {
  const dispatch = useDispatch()

  const onSelectionChange= model =>{
    dispatch(updateSelectedNarratives(model));
  }

  return (
    <Box sx={{ width: "100%" }}>
      <p className="mb-3">
        ** Select correct spelled words(which are shown as spelling errors) and
        add to dictionary.
      </p>
      <div className="flex justify-start items-center mb-3 gap-2">
        <Button variant="outlined" onClick={() => {}}>
          <FileCopy />
        </Button>
        <Button variant="outlined" onClick={() => {}}>
          <Print />
        </Button>
        <Button variant="outlined" onClick={() => {}}>
          <FileDownload /> <span className="ms-1"> Download as Excel </span>
        </Button>
        <Button variant="outlined" onClick={() => {}}>
          <FileDownload /> <span className="ms-1"> Download as PDF </span>
        </Button>
      </div>
      <DataGrid              
        rows={narrativeData.data}
        columns={columns}
        autoHeight
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        onSelectionModelChange ={onSelectionChange}
        components={{ Toolbar: GridToolbar }}
        sx={{
          '& .highlight--cell': {
            backgroundColor: '#90ee90',
          },
        }}
      />
      <div className="flex justify-end items-center mt-4 gap-2">
        <Button variant="contained" onClick={() => {onClickCorrectOutput("2")}}>
          Correct Output
        </Button>
        <Button variant="contained" onClick={() => {}}>
          Update Dictonary(Selected words)
        </Button>
        <Button variant="contained" onClick={revert}>
          Revert back
        </Button>
      </div>
    </Box>
  );
};

export default Summary;
