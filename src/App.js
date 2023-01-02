import { useState } from "react";
import InputComponent from "./components/inputComponent";
import OutputComponent from "./components/outputComponent";
import DictionarieComponent from "./components/dictionarieComponent";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ManualPdf from "./assets/Smart Error Detector Tool_User Manual_V1.0.0.pdf";
import "./style.css";
import { IconButton } from "@mui/material";

function App() {
  const [sidebarItems, setSidebarItems] = useState({
    input: true,
    output: false,
    rules: false,
    userManual: false,
  });

  const Proceed = () => {
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
                    Alternative text - include a link{" "}
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
