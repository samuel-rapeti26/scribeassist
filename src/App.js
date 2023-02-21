import { useState } from "react";
import { IconButton } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useDispatch } from "react-redux";

import { AddNarrative } from "./actions";
import DictionarieComponent from "./components/dictionarieComponent";
import InputComponent from "./components/inputComponent";
import OutputComponent from "./components/outputComponent";
import ManualPdf from "./assets/Smart Error Detector Tool_User Manual_V1.0.0.pdf";
import "./style.css";

const narrativeData = [
  {
    id: 1,
    para: 1,
    error: "Cech",
    suggestion: "cece/Tech/ceco/ces/Czech",
    errorType: "Spelling mistake (Proper Noun)",
    category: "Mandatory",
    StartPos: "115",
    EndPos: "118",
    operation: "1",
    paraContent: "Initial information received on 17-Apr-2019 regarding a unsolicited valid serious case received from a nurse from Cech Repblic",
  },
  {
    id: 2,
    para: 1,
    error: "Repblic",
    suggestion: "Republic/replicable/replicare",
    errorType: "Spelling mistake (Proper Noun)",
    category: "Mandatory",
    StartPos: "120",
    EndPos: "126",
    operation: "1",
    paraContent: "Initial information received on 17-Apr-2019 regarding a unsolicited valid serious case received from a nurse from Cech Repblic",
  },
  {
    id: 3,
    para: 2,
    error: "involves",
    suggestion: "involved",
    errorType: "Incorrect Tense Used",
    category: "Optional",
    StartPos: "12",
    EndPos: "19",
    operation: "tense",
    paraContent:"This case involves a 62 years old male patient had hyperglycemia, while he was treated with PQC (MNO) with the use of medical device ABC.",
  },
  {
    id: 4,
    para: 2,
    error: "PQC",
    suggestion: "",
    errorType: "Abbreviation Used",
    category: "Optional",
    StartPos: "93",
    EndPos: "95",
    operation: "abbrev",
    paraContent: "This case involves a 62 years old male patient had hyperglycemia, while he was treated with PQC (MNO) with the use of medical device ABC",
  },
  {
    id: 5,
    para: 2,
    error: "MNO",
    suggestion: "",
    errorType: "Abbreviation Used",
    category: "Optional",
    StartPos: "98",
    EndPos: "100",
    operation: "abbrev",
    paraContent: "This case involves a 62 years old male patient had hyperglycemia, while he was treated with PQC (MNO) with the use of medical device ABC",
  },
  {
    id: 6,
    para: 2,
    error: "ABC",
    suggestion: "",
    errorType: "Abbreviation Used",
    category: "Optional",
    StartPos: "134",
    EndPos: "136",
    operation: "abbrev",
    paraContent: "This case involves a 62 years old male patient had hyperglycemia, while he was treated with PQC (MNO) with the use of medical device ABC",
  },
  {
    id: 7,
    para: 3,
    error: "includes",
    suggestion: "included",
    errorType: "Incorrect Tense used",
    category: "Optional",
    StartPos: "32",
    EndPos: "39",
    operation: "tense",
    paraContent: "The patient's medical history includes disability",
  },
  {
    id: 8,
    para: 4,
    error: "is",
    suggestion: "was",
    errorType: "Incorrect Tense used",
    category: "Optional",
    StartPos: "28",
    EndPos: "29",
    operation: "tense",
    paraContent: "No concomitant medication is reported",
  }, 
  {
    id: 9,
    para: 2,
    error: " ",
    suggestion: "",
    errorType: "Extra spacing found",
    category: "Mandatory",
    StartPos: "143",
    EndPos: "145",
    operation: "extra_spacing",
    paraContent: "On an unknown date in 2017 (reported 2 years ago), the patient started taking PQC solution for injection at a dose of 80 U once daily at night   via subcutaneous route (with an unknown strength, batch number and expiry date) for DM",
  },
  {
    id: 10,
    para: 5,
    error: "DM",
    suggestion: "",
    errorType: "Abbreviation Used",
    category: "Optional",
    StartPos: "230",
    EndPos: "231",
    operation: "abbrev",
    paraContent: "On an unknown date in 2017 (reported 2 years ago), the patient started taking PQC solution for injection at a dose of 80 U once daily at night   via subcutaneous route (with an unknown strength, batch number and expiry date) for DM",
  },
  {
    id: 11,
    para: 6,
    error: "is",
    suggestion: "was",
    errorType: "Incorrect Tense used",
    category: "Optional",
    StartPos: "87",
    EndPos: "88",
    operation: "tense",
    paraContent: "On an unknown date in December-2018, approximately 1 year after initiation of PQC it is reported that the patient was running out of suspect drug and thus from an unknown date in 2019, the patient had elevated blood sugars characterized",
  },
  {
    id: 12,
    para: 6,
    error: "blood blood",
    suggestion: "blood",
    errorType: "Repetitive Information",
    category: "Optional",
    StartPos: "241",
    EndPos: "251",
    operation: "repeat",
    paraContent: "On an unknown date in December-2018, approximately 1 year after initiation of PQC it is reported that the patient was running out of suspect drug and thus from an unknown date in 2019, the patient had elevated blood sugars characterized",
  },
  {
    id: 13,
    para: 6,
    error: "has",
    suggestion: "had",
    errorType: "Incorrect Tense used",
    category: "Optional",
    StartPos: "329",
    EndPos: "331",
    operation: "tense",
    paraContent: "On an unknown date in December-2018, approximately 1 year after initiation of PQC it is reported that the patient was running out of suspect drug and thus from an unknown date in 2019, the patient had elevated blood sugars characterized",
  },
  {
    id: 14,
    para: 6,
    error: "dl",
    suggestion: "Li/Ld/hdl/cl/adl/Do/dml/idl/El/dll/dal/Dol/De",
    errorType: "Spelling mistake (Unit)",
    category: "Mandatory",
    StartPos: "482",
    EndPos: "483",
    operation: "1",
    paraContent: "The patient's medical history includes disability",
  },
  {
    id: 15,
    para: 7,
    error: "relavant",
    suggestion: "Reliant/relaxant",
    errorType: "Spelling mistake (Proper Noun)",
    category: "Mandatory",
    StartPos: "12",
    EndPos: "18",
    operation: "1",
    paraContent: "No further relvant information is reporting",
  },
  {
    id: 16,
    para: 7,
    error: "is",
    suggestion: "was",
    errorType: "Incorrect Tense used",
    category: "Optional",
    StartPos: "33",
    EndPos: "34",
    operation: "tense",
    paraContent: "No further relvant information is reporting",
  },
];

function App() {
  const dispatch = useDispatch();
  const [sidebarItems, setSidebarItems] = useState({
    input: true,
    output: false,
    rules: false,
    userManual: false,
  });

  const Proceed = () => {
    dispatch(AddNarrative(narrativeData));
    setSidebarItems({
      ...sidebarItems,
      output: true,
      input: false,
    });
  };

  const RevertBack = () => {
    setSidebarItems({
      ...sidebarItems,
      output: false,
      input: true,
    });
  };

  return (
    <div className="">
      <header className="py-3 bg-skyblue">
        <div className="px-4">
          <div className="flex items-center">
            <div className="w-2/12">
              <h1 className="logo font-bold text-white text-xl text-start text-uppercase">
                Scribe Assist
              </h1>
            </div>
            <div className="w-10/12">
              <div className="flex justify-end items-center">
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-haspopup="true"
                  onClick={() => {}}
                  color="inherit"
                  className="text-white"
                >
                  <AccountCircle className="text-white" />
                </IconButton>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="">
        <div className="flex h-full">
          <div className="w-2/12 h-screen sidebar">
            <div className="flex flex-col p-4 gap-2">
              <div
                className={`text-lg text-white cursor-pointer px-2 py-1 rounded-md  ${
                  sidebarItems.input
                    ? "bg-gray-400"
                    : "hover:bg-teal-600 hover:animate-pulse"
                }`}
                onClick={() =>
                  setSidebarItems({
                    input: true,
                    output: false,
                    rules: false,
                    userManual: false,
                  })
                }
              >
                Input
              </div>
              <div
                className={`text-lg text-white cursor-pointer px-2 py-1 rounded-md  ${
                  sidebarItems.output
                    ? "bg-gray-400"
                    : "hover:bg-teal-600 hover:animate-pulse"
                }`}
                onClick={() =>
                  setSidebarItems({
                    input: false,
                    output: true,
                    rules: false,
                    userManual: false,
                  })
                }
              >
                Output
              </div>
              <div
                className={`text-lg text-white cursor-pointer px-2 py-1 rounded-md  ${
                  sidebarItems.rules
                    ? "bg-gray-400"
                    : "hover:bg-teal-600 hover:animate-pulse"
                }`}
                onClick={() =>
                  setSidebarItems({
                    input: false,
                    output: false,
                    rules: true,
                    userManual: false,
                  })
                }
              >
                Dictionaries & Rule
              </div>
              <div
                className={`text-lg text-white cursor-pointer px-2 py-1 rounded-md  ${
                  sidebarItems.userManual
                    ? "bg-gray-400"
                    : "hover:bg-teal-600 hover:animate-pulse"
                }`}
                onClick={() =>
                  setSidebarItems({
                    input: false,
                    output: false,
                    rules: false,
                    userManual: true,
                  })
                }
              >
                User manual
              </div>
            </div>
          </div>
          <div className="w-10/12 px-8 py-4">
            {sidebarItems.input && (
              <InputComponent clickProceed={() => Proceed()} />
            )}
            {sidebarItems.output && (
              <OutputComponent clickRevertBack={() => RevertBack()} />
            )}
            {sidebarItems.rules && (
              <DictionarieComponent clickRevertBack={() => RevertBack()} />
            )}
            {sidebarItems.userManual && (
              <div className="h-screen">
                <object
                  data={ManualPdf}
                  type="application/pdf"
                  width="100%"
                  height="100%"
                >
                  <p>
                    Alternative text - include a link
                    <a href={ManualPdf}>to the PDF!</a>
                  </p>
                </object>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
