import React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { FileCopy, Print, FileDownload } from "@mui/icons-material";

const columns = [
  { field: "para", headerName: "Para", width: 90 },
  {
    field: "error",
    headerName: "Error",
    flex: 1,
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

const rowsData = [
  {
    id: 1,
    para: "1",
    error: "01-Apr-2020",
    suggestion: "01-Apr-20",
    errorType: "Invalid/ambiguous date (month)",
    category: "Optional",
    StartPos: "30",
    EndPos: "43",
    Operation: "date2",
    FrontendAction: "Replace",
  },
  {
    id: 2,
    para: "2",
    error: "ID",
    suggestion: " ",
    errorType: "Abbreviation Used",
    category: "Optional",
    StartPos: "9",
    EndPos: "10",
    Operation: "abbrev",
    FrontendAction: "No Action",
  },
  {
    id: 3,
    para: "3",
    error: "XYZ",
    suggestion: " ",
    errorType: "Abbreviation Used",
    category: "Optional",
    StartPos: "39",
    EndPos: "41",
    Operation: "abbrev",
    FrontendAction: "No Action",
  },
  {
    id: 4,
    para: "4",
    error: "involves",
    suggestion: "involved",
    errorType: "Incorrect Tense used",
    category: "Optional",
    StartPos: "12",
    EndPos: "19",
    Operation: "tense",
    FrontendAction: "Replace",
  },
  {
    id: 5,
    para: "4",
    error: "ABC",
    suggestion: " ",
    errorType: "Abbreviation Used",
    category: "Optional",
    StartPos: "113",
    EndPos: "115",
    Operation: "abbrev",
    FrontendAction: "No Action",
  },
  {
    id: 6,
    para: "5",
    error: "is",
    suggestion: "was",
    errorType: "Incorrect Tense used",
    category: "Optional",
    StartPos: "18",
    EndPos: "19",
    Operation: "tense",
    FrontendAction: "Replace",
  },
  {
    id: 7,
    para: "5",
    error: "COPD",
    suggestion: " ",
    errorType: "Abbreviation Used",
    category: "Optional",
    StartPos: "20",
    EndPos: "23",
    Operation: "abbrev",
    FrontendAction: "No Action",
  },
  {
    id: 8,
    para: "6",
    error: "his",
    suggestion: "her",
    errorType: "Incorrect gender (expected:Female)",
    category: "Optional",
    StartPos: "37",
    EndPos: "39",
    Operation: "female",
    FrontendAction: "Replace",
  },
  {
    id: 9,
    para: "9",
    error: "dl",
    suggestion:
      "dL/Del/Ldl/hdl/adl/dml/dil/Ll/idl/Ei/dal/dle/De/Do/Db/Dol/Ml/Cl/Fl/",
    errorType: "Spelling mistake (Unit)",
    category: "Mandatory",
    StartPos: "38",
    EndPos: "39",
    Operation: "1",
    FrontendAction: "Replace",
  },
  {
    id: 10,
    para: "10",
    error: "QD",
    suggestion: " ",
    errorType: "Abbreviation Used",
    category: "Optional",
    StartPos: "87",
    EndPos: "88",
    Operation: "abbrev",
    FrontendAction: "No Action",
  },
  {
    id: 11,
    para: "10",
    error: "QD",
    suggestion: "daily",
    errorType: "Dosage freq Code used",
    category: "Optional",
    StartPos: "87",
    EndPos: "88",
    Operation: "dosage",
    FrontendAction: "Replace",
  },
  {
    id: 12,
    para: "10",
    error: "unknonw",
    suggestion: "unknown",
    errorType: "Spelling mistake (Proper Noun)",
    category: "Mandatory",
    StartPos: "113",
    EndPos: "119",
    Operation: "1",
    FrontendAction: "Replace",
  },
  {
    id: 13,
    para: "10",
    error: "strngth",
    suggestion: "strength",
    errorType: "Spelling mistake (Proper Noun)",
    category: "Mandatory",
    StartPos: "121",
    EndPos: "127",
    Operation: "1",
    FrontendAction: "Replace",
  },
  {
    id: 14,
    para: "10",
    error: "diabetics",
    suggestion: "diabetics/diabetes/diabeta/diabetid",
    errorType: "Spelling mistake (Proper Noun)",
    category: "Mandatory",
    StartPos: "171",
    EndPos: "177",
    Operation: "1",
    FrontendAction: "Replace",
  },
  {
    id: 15,
    para: "11",
    error: "fo",
    suggestion: "For/Fol/Do/Fa/Fox/Of/No/afo/Fo/fos/so/fuo/Go",
    errorType: "Spelling mistake (Proper Noun)",
    category: "Mandatory",
    StartPos: "65",
    EndPos: "66",
    Operation: "1",
    FrontendAction: "Replace",
  },
  {
    id: 16,
    para: "11",
    error: "dl",
    suggestion:
      "dL/Del/Ldl/hdl/adl/dml/dil/Ll/idl/Ei/dal/dle/De/Do/Db/Dol/Ml/Cl/Fl/",
    errorType: "Spelling mistake (Unit)",
    category: "Mandatory",
    StartPos: "164",
    EndPos: "165",
    Operation: "1",
    FrontendAction: "Replace",
  },
  {
    id: 17,
    para: "11",
    error: "can",
    suggestion: "could",
    errorType: "Incorrect Tense used",
    category: "Optional",
    StartPos: "225",
    EndPos: "227",
    Operation: "tense",
    FrontendAction: "Replace",
  },
  {
    id: 18,
    para: "11",
    error: " ",
    suggestion: " ",
    errorType: "Extra spacing found",
    category: "Mandatory",
    StartPos: "260",
    EndPos: "262",
    Operation: "extra_spacing",
    FrontendAction: "Replace",
  },
  {
    id: 19,
    para: "11",
    error: "MNO",
    suggestion: " ",
    errorType: "Abbreviation Used",
    category: "Optional",
    StartPos: "288",
    EndPos: "290",
    Operation: "abbrev",
    FrontendAction: "No Action",
  },
  {
    id: 20,
    para: "12",
    error: "reported reported",
    suggestion: "reported",
    errorType: "Repetitive Information",
    category: "Optional",
    StartPos: "16",
    EndPos: "32",
    Operation: "repeat",
    FrontendAction: "Replace",
  },
  {
    id: 21,
    para: "12",
    error: "is",
    suggestion: "was",
    errorType: "Incorrect Tense used",
    category: "Optional",
    StartPos: "57",
    EndPos: "58",
    Operation: "tense",
    FrontendAction: "Replace",
  },
  {
    id: 22,
    para: "12",
    error: "his",
    suggestion: "her",
    errorType: "Incorrect gender (expected:Female)",
    category: "Optional",
    StartPos: "90",
    EndPos: "92",
    Operation: "female",
    FrontendAction: "Replace",
  },
  {
    id: 23,
    para: "12",
    error: "is",
    suggestion: "was",
    errorType: "Incorrect Tense used",
    category: "Optional",
    StartPos: "123",
    EndPos: "124",
    Operation: "tense",
    FrontendAction: "Replace",
  },
  {
    id: 24,
    para: "12",
    error: "dl",
    suggestion:
      "dL/Del/Ldl/hdl/adl/dml/dil/Ll/idl/Ei/dal/dle/De/Do/Db/Dol/Ml/Cl/Fl/",
    errorType: "Spelling mistake (Unit)",
    category: "Mandatory",
    StartPos: "138",
    EndPos: "139",
    Operation: "1",
    FrontendAction: "Replace",
  },
  {
    id: 25,
    para: "12",
    error: "is",
    suggestion: "was",
    errorType: "Incorrect Tense used",
    category: "Optional",
    StartPos: "156",
    EndPos: "157",
    Operation: "tense",
    FrontendAction: "Replace",
  },
  {
    id: 26,
    para: "13",
    error: "~",
    suggestion: " ",
    errorType: "Disallowed special char used",
    category: "Mandatory",
    StartPos: "20",
    EndPos: "20",
    Operation: "specialChar",
    FrontendAction: "Replace",
  },
];

const Summary = ({ revert, narrativeData }) => {
  return (
    <Box sx={{ width: "100%" }}>
      <p className="mb-3">
        ** Select correct spelled words(which are shown as spelling errors) and
        add to dictionary.{" "}
      </p>{" "}
      <div className="flex justify-start items-center mb-3 gap-2">
        <Button variant="outlined" onClick={() => {}}>
          <FileCopy />
        </Button>{" "}
        <Button variant="outlined" onClick={() => {}}>
          <Print />
        </Button>{" "}
        <Button variant="outlined" onClick={() => {}}>
          <FileDownload /> <span className="ms-1"> Download as Excel </span>{" "}
        </Button>{" "}
        <Button variant="outlined" onClick={() => {}}>
          <FileDownload /> <span className="ms-1"> Download as PDF </span>{" "}
        </Button>{" "}
      </div>{" "}
      <DataGrid
        rows={narrativeData.narrative}
        columns={columns}
        autoHeight
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        components={{ Toolbar: GridToolbar }}
      />{" "}
      <div className="flex justify-end items-center mt-4 gap-2">
        <Button variant="contained" onClick={() => {}}>
          Correct Output{" "}
        </Button>{" "}
        <Button variant="contained" onClick={() => {}}>
          Update Dictonary(Selected words){" "}
        </Button>{" "}
        <Button variant="contained" onClick={revert}>
          Revert back{" "}
        </Button>{" "}
      </div>{" "}
    </Box>
  );
};

export default Summary;
