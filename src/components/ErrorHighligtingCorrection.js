import React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import ErrorsContent from "./ErrosContent";
import SuggestionContent from "./SuggestionContent";
import FinalNarrative from "./FinalNarrative";

const ErrorHighligtingCorrection = ({ narrativeData }) => {
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
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-4 h-full">
        <div className="flex flex-col gap-4">
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
          />
          <div className="w-full flex justify-end items-center px-4 gap-2">
            <Button variant="contained"> Correct output </Button>
            <Button variant="contained"> Update dict </Button>
            <Button variant="contained"> Revert back </Button>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div
            className="shadow-md bg-white p-2 flex flex-col gap-2 "
            style={{ height: " -webkit-fill-available" }}
          >
            <h2 className="text-xl text-gray-600 border-b pb-2">
              Error Highligted
            </h2>
            <ErrorsContent paragraphs={narrativeData.narrative} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1  lg:grid-cols-2 gap-4 h-full">
        <div className="flex flex-col gap-4">
          <div className="shadow-md bg-white p-2 flex flex-col gap-2">
            <h2 className="text-xl text-gray-600 border-b pb-2">
              Customized Correction
            </h2>
            <SuggestionContent paragraphs={narrativeData.narrative} />
            <div className="flex justify-center items-center w-full">
              <Button size="large" variant="contained">
                Finalize.
              </Button>
            </div>
          </div>
        </div>
        <div className="shadow-md bg-white p-2 flex flex-col gap-2">
          <h2 className="text-xl text-gray-600 border-b pb-2">
            Final Narrative
          </h2>
          <FinalNarrative paragraphs={narrativeData.narrative} />
          <div className="flex justify-center items-center w-full">
            <Button size="large" variant="contained">
              Download doc.
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorHighligtingCorrection;
