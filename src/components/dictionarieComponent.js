import React from "react";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import ViewDictonary from "./viewDictonary";
import RulesPdf from "../assets/Sanofi - Narrative QC Tool - Scenarios.pdf";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    editable: true,
    flex: 1,
  },
  {
    field: "lastName",
    headerName: "Last name",
    editable: true,
    flex: 1,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    editable: true,
    flex: 1,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    flex: 1,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const DictionarieComponent = ({ clickRevertBack }) => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper elevation={3}>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Rules" value="1" />
              <Tab label="View Dictionary" value="2" />
              <Tab label="Modify Dictionary" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <div className="h-screen">
              <object
                data={RulesPdf}
                type="application/pdf"
                width="100%"
                height="100%"
              >
                <p>
                  Alternative text - include a link{" "}
                  <a href={RulesPdf}>to the PDF!</a>
                </p>
              </object>
            </div>
          </TabPanel>
          <TabPanel value="2">
            <ViewDictonary />
          </TabPanel>
          <TabPanel value="3">
            <div className="bg-white flex flex-col gap-2 w-full shadow-lg p-2">
              <DataGrid
                rows={rows}
                columns={columns}
                autoHeight
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: true }}
                components={{ Toolbar: GridToolbar }}
              />
              <div className="w-full flex justify-center items-center px-4 gap-2">
                <Button variant="contained">Accept</Button>
                <Button variant="contained">Reject</Button>
              </div>
            </div>
          </TabPanel>
        </TabContext>
      </Box>
    </Paper>
  );
};

export default DictionarieComponent;
