import React, { useState, useEffect } from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Button, TextField } from "@mui/material";
import Highlighter from "react-highlight-words";

const ErrorHighligtingCorrection = () => {
    const [sentence, setsentence] = useState([]);
    const [error, seterror] = useState([]);
    const [correction, setcorrection] = useState([]);
    const [finalerror, setfinalerror] = useState([]);
    const [para, setpara] = useState(
        "Initial information received on 01-Arp-2020 regarding a unsolicited valid serious case received from a nurse from Cech Repblic.This case involves a 62 years old male patient had hyperglycemia, while he was treated with PQC (MNO) with the use of medical device ABC.The patient's medical history includes disability.No concomitant medication is reported.On an unknown date in 2017 (reported 2 years ago), the patient started taking PQC solution for injection at a dose of 80 U once daily at night   via subcutaneous route (with an unknown strength, batch number and expiry date) for DM.On an unknown date in December-2018, approximately 1 year after initiation of PQC it is reported that the patient was running out of suspect drug and thus from an unknown date in 2019, the patient had elevated blood sugars characterized by blood blood sugar levels of 500, 600 and sometimes gets as low as 300 when the patient has not eaten (hyperglycemia). Seriousness criteria was assessed as medically significant for the event as per reporter. Blood glucose in 2016 was 125 mg/dl. Action taken was none for hyperglycemia. The patient was treated with insulin human, insulin human injection, isophane (Novolin) for hyperglycemia. The event outcome was reported as not resolved for hyperglycemia.No further relvant information is reporting ~  "
    );
    const [sortByTwo, setsortByTwo] = useState([]);
    const [errorType, setErrorType] = useState();
    const [correctedFieldValue, setCorrectedFieldValue] = useState(
        "Samuel is a good boy"
    );
    const [correctedFieldValue2, setCorrectedFieldValue2] = useState();
    const [correctedFieldValue3, setCorrectedFieldValue3] = useState();

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
            field: "Operation",
            headerName: "Operation",
            flex: 1,
        },
        {
            field: "FrontendAction",
            headerName: "FrontendAction",
            flex: 1,
        },
    ];

    const rows = [{
            id: 1,
            para: "1",
            error: "01-Arp-2020",
            suggestion: "01-Apr-2020",
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
            suggestion: "dL/Del/Ldl/hdl/adl/dml/dil/Ll/idl/Ei/dal/dle/De/Do/Db/Dol/Ml/Cl/F/",
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
            suggestion: "dL/Del/Ldl/hdl/adl/dml/dil/Ll/idl/Ei/dal/dle/De/Do/Db/Dol/Ml/Cl/Fl/",
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
            suggestion: "dL/Del/Ldl/hdl/adl/dml/dil/Ll/idl/Ei/dal/dle/De/Do/Db/Dol/Ml/Cl/Fl/",
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

    // const suggest = [{ paragraphNum: "1", error: "she", suggestion: "he", errorType: "Invalid/ambiguous date (month)", category: "Optional", startPos: "33", endPos: "43", operation: "date2", frontendAction:"Replace"  },
    // { paragraphNum: "1", error: "01-Apr-2020", suggestion: "01-Apr-20", errorType: "Invalid/ambiguous date (month)", category: "Optional", startPos: "33", endPos: "43", operation: "date2", frontendAction:"Replace"},
    // { error: "she", suggestion: "he", paragraph: 1, position: 15 }];
    const suggest = [
        { error: "Tis", suggestion: "This", paragraph: 2, position: 1 },
        { error: "Iniial", suggestion: "Initial", paragraph: 1, position: 1 },
    ];
    const List = [
        "01-Arp-2020",
        " ID ",
        "XYZ",
        "involves",
        "ABC",
        " is ",
        "COPD",
        " his ",
        "dl",
        "QD",
        "unknonw",
        "strngth",
        "diabets",
        " fo ",
        " can ",
        "MNO",
        "reported reported",
        "~",
    ];
    useEffect(() => {
        if (para) {
            setsentence(para.split("\n\n"));
        }

        setsortByTwo(
            suggest.sort(function(a, b) {
                return a.paragraph - b.paragraph || a.position - b.position;
            })
        );
        const temp = para.split("\n");
        for (let j = 0; j < temp.length; j++) {
            let temp_para = temp[j];

            let temp_error = temp_para.split(" ");

            let temp_correction = temp_para.split(" ");

            console.log(sortByTwo);
            suggest.map((words) => {
                for (let i = 0; i < temp_error.length; i++) {
                    console.log(
                        words.position === i + 1 && words.error === temp_error[i]
                    );

                    if (words.position === i + 1 && words.error === temp_error[i]) {
                        temp_correction[i] = words.suggestion;
                        temp_error[i] = words.errorType;
                        console.log("temp_error[i] ", temp_error[i]);
                        // seterror(current => [...current, temp_error.join("")]);
                        // setcorrection(current => [...current, temp_correction.join(" ")]);

                        console.log("error", errorType);

                        console.log("correction", correction);

                        // setfinalerror(finalerror + errorType.join("\n"));
                        // setfinalcorrection(finalcorrection + correction.join("\n"));
                        // console.log("finalerror", finalerror);
                        // console.log("finalcorrection", finalcorrection);
                    }
                }
            });
        }
    }, []);
    return ( <
        div className = "flex flex-col gap-4" >
        <
        div className = "grid grid-cols-1  lg:grid-cols-2 gap-4 h-full" >
        <
        div className = "flex flex-col gap-4" >
        <
        DataGrid rows = { rows }
        columns = { columns }
        autoHeight pageSize = { 5 }
        rowsPerPageOptions = {
            [5] }
        checkboxSelection disableSelectionOnClick experimentalFeatures = {
            { newEditingApi: true } }
        components = {
            { Toolbar: GridToolbar } }
        />{" "} <
        div className = "w-full flex justify-end items-center px-4 gap-2" >
        <
        Button variant = "contained" > Correct output < /Button>{" "} <
        Button variant = "contained" > Update dict < /Button>{" "} <
        Button variant = "contained" > Revert back < /Button>{" "} <
        /div>{" "} <
        /div> <
        div className = "flex flex-col gap-4" >
        <
        div className = "shadow-md bg-white p-2 flex flex-col gap-2 "
        style = {
            { height: " -webkit-fill-available" } } >
        <
        h2 className = "text-xl text-gray-600 border-b pb-2" >
        Error Highligted { " " } <
        /h2> <
        div >
        <
        Highlighter highlightClassName = "YourHighlightClass"
        searchWords = { List }
        autoEscape = { true }
        textToHighlight = { para }
        />{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>{" "} <
        div className = "grid grid-cols-1  lg:grid-cols-2 gap-4 h-full" >
        <
        div className = "flex flex-col gap-4" >
        <
        div className = "shadow-md bg-white p-2 flex flex-col gap-2" >
        <
        h2 className = "text-xl text-gray-600 border-b pb-2" >
        Customized Correction { " " } <
        /h2>{" "} <
        Highlighter highlightClassName = "YourHighlightClass"
        searchWords = {
            [] }
        autoEscape = { true }
        textToHighlight = { para }
        />{" "} <
        div className = "flex justify-center items-center w-full" >
        <
        Button size = "large"
        variant = "contained" >
        Finalize. { " " } <
        /Button>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>{" "} <
        div className = "shadow-md bg-white p-2 flex flex-col gap-2" >
        <
        h2 className = "text-xl text-gray-600 border-b pb-2" >
        Final Narrative { " " } <
        /h2>{" "} <
        Highlighter highlightClassName = "YourHighlightClass"
        highlightStyle = {
            { backgroundColor: "lightgreen" } }
        searchWords = { List }
        autoEscape = { true }
        textToHighlight = { para }
        />{" "} <
        div className = "flex justify-center items-center w-full" >
        <
        Button size = "large"
        variant = "contained" >
        Download doc. { " " } <
        /Button>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>{" "} <
        /div>
    );
};

export default ErrorHighligtingCorrection;

// import React, { useState } from "react";
// import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// import { Button, TextField } from "@mui/material";

// const columns = [
//   { field: "id", headerName: "ID", width: 90 },
//   {
//     field: "firstName",
//     headerName: "First name",
//     editable: true,
//     flex: 1,
//   },
//   {
//     field: "lastName",
//     headerName: "Last name",
//     editable: true,
//     flex: 1,
//   },
//   {
//     field: "age",
//     headerName: "Age",
//     type: "number",
//     editable: true,
//     flex: 1,
//   },
//   {
//     field: "fullName",
//     headerName: "Full name",
//     description: "This column has a value getter and is not sortable.",
//     sortable: false,
//     flex: 1,
//     valueGetter: (params) =>
//       `${params.row.firstName || ""} ${params.row.lastName || ""}`,
//   },
// ];

// const rows = [
//   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
// ];

// const ErrorHighligtingCorrection = () => {
//   const [sentence, setsentence] = useState([]);
//   const [para, setpara] = useState([]);
//   const [sortByTwo, setsortByTwo] = useState([]);
//   const [error, setError] = useState([]);
//   const [correctedFieldValue, setCorrectedFieldValue] = useState();
//   const [correctedFieldValue2, setCorrectedFieldValue2] = useState();
//   const [correctedFieldValue3, setCorrectedFieldValue3] = useState();

//   const suggest = [{ error: "an", suggestion: "a", paragraph: 0, position: 6},
//   { error: "stat", suggestion: "States", paragraph: 0, position: 4},
//   { error: "shw", suggestion: "he", paragraph: 1, position: 15}];
//   useEffect(() => {

//   setpara("Initial information from United stat regarding in an unsoliciated valid non serious case recieved ffrom non-health care proffessional on 8-oct-2023. \nThis ase involves a 82 years old lady patient for whom it eas eported that she did not performe safety test on his LXYZ pen in years ");
//   setsentence(para.split("\n"));

//   setsortByTwo(suggest.sort(function (a, b) {
//       return  a.paragraph - b.paragraph || a.position - b.position;
//   }));
//   const errorCorrection= () => {
//     const temp = para.split("\n");
//     console.log("temp", temp);

// for (let j = 0; j < temp.length; j++) {
//     let temp_para= temp[j];

// let temp_error = temp_para.split(" ");
// let temp_correction = temp_para.split(" ");

// sortByTwo.forEach((words)=> {
//      for(let i=0 ; i<temp_error.length ; i++) {

// if(words.position === i && words.error === temp_error[i]) {
//     temp_correction[i] = "<span style="color:greens">"+words. suggestion+"</span>";
//     temp_error[i]="<span style="color:red">"+words.error+"</span>";

// seterror(current => [...current, temp_error.join("")]);
//  setcorrection(current => [...current, temp_correction.join(" ")]);

// console.log("error", error);

//  console.log("correction", correction);

// setfinalerror(finalerror+error.join("\n"));
//  setfinalcorrection(finalcorrection + correction.join("\n"));
//  console.log("finalerror", finalerror);
//  console.log("finalcorrection", finalcorrection);
// }
// }
// });

// }    }, []);
//   return (
//     <div className="flex flex-col gap-4">
//       <div className="grid grid-cols-1  lg:grid-cols-2 gap-4 h-full">

//         <div className="flex flex-col gap-4">
//         <DataGrid
//           rows={rows}
//           columns={columns}
//           autoHeight
//           pageSize={5}
//           rowsPerPageOptions={[5]}
//           checkboxSelection
//           disableSelectionOnClick
//           experimentalFeatures={{ newEditingApi: true }}
//           components={{ Toolbar: GridToolbar }}
//         />
//         <div className="w-full flex justify-end items-center px-4 gap-2">
//           <Button variant="contained">Correct output</Button>
//           <Button variant="contained">Update dict</Button>
//           <Button variant="contained">Revert back</Button>
//         </div>
//         </div>

//       <div className="flex flex-col gap-4">
//       <div className="shadow-md bg-white p-2 flex flex-col gap-2">
//             <h2 className="text-xl text-gray-600 border-b pb-2">
//               Error Highligted
//             </h2>
//             <TextField
//              disabled="disabled"
//               id="filled-textarea"
//               multiline
//               rows={12}
//               value={correctedFieldValue}
//             />

//           </div>
//           </div>
//       </div>
//       <div className="grid grid-cols-1  lg:grid-cols-2 gap-4 h-full">

//         <div className="flex flex-col gap-4">

//           <div className="shadow-md bg-white p-2 flex flex-col gap-2">
//             <h2 className="text-xl text-gray-600 border-b pb-2">
//               Customized Correction
//             </h2>
//             <TextField
//             disabled="disabled"

//               id="filled-textarea"

//               multiline
//               rows={12}
//               value={correctedFieldValue2}
//             />
//             <div className="flex justify-center items-center w-full">
//               <Button size="large" variant="contained">
//                 Finalize.
//               </Button>
//             </div>
//           </div>
//         </div>
//         <div className="shadow-md bg-white p-2 flex flex-col gap-2">
//           <h2 className="text-xl text-gray-600 border-b pb-2">
//             Final Narrative
//           </h2>
//           <TextField
//           disabled="disabled"

//               id="filled-textarea"

//               placeholder="Final output will be displayed here once you finalise the customised correction"
//               multiline
//               rows={12}
//               value={correctedFieldValue3}
//             />
//           <div className="flex justify-center items-center w-full">
//             <Button size="large" variant="contained">
//               Download doc.
//             </Button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ErrorHighligtingCorrection ;