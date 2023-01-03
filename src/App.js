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
    error: "17-Apr-2019",
    suggestion: "17-Apr-20",
    errorType: "in progress",
    category: 1,
    StartPos: "30",
    EndPos: "40",
    operation: "in progress",
    frontEndAction: "in progress",
    paraContent: "Initial information received on 17-Apr-2019 regarding..",
  },
  {
    id: 2,
    para: 2,
    error: "male",
    suggestion: "female",
    errorType: "in progress",
    category: 1,
    StartPos: "45",
    EndPos: "48",
    operation: "in progress",
    frontEndAction: "in progress",
    paraContent:
      "This case involves a 62 years old male patient had hyperglycemia.",
  },
  {
    id: 3,
    para: 3,
    error: "includes",
    suggestion: "included",
    errorType: "in progress",
    category: 1,
    StartPos: "26",
    EndPos: "32",
    operation: "in progress",
    frontEndAction: "in progress",
    paraContent: "The patient's medical history includes disability.",
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
