import React from "react";
import { useSelector } from "react-redux";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Summary from "./summary";
import ErrorHighligtingCorrection from "./ErrorHighligtingCorrection";

const OutputComponent = ({ clickRevertBack }) => {
  const narrativeData = useSelector((state) => state);
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onClickCorrectOutput = (newValue) => {
    setValue(newValue)
  }

  return (
    <Paper elevation={3}>
      <Box sx={{ width: "100%", typography: "body1" }}>
        {narrativeData.data.length > 0 ? (
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="Summary" value="1" />
                <Tab label="Error Highligting and Correction" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <Summary onClickCorrectOutput={onClickCorrectOutput} revert={clickRevertBack} narrativeData={narrativeData} />
            </TabPanel>
            <TabPanel value="2">
              <ErrorHighligtingCorrection  />
            </TabPanel>
          </TabContext>
        ) : (
          <h1 className="p-4 flex justify-center text-xl font-semibold animate-bounce text-teal-700">
            Please add narrative from input and click Proceed on to see output
          </h1>
        )}
      </Box>
    </Paper>
  );
};

export default OutputComponent;
