import React, { useState } from "react";
import "./EditableTable.css";

const EditableTable = () => {
    const [spreadsheetData, setSpreadsheetData] = useState([
        { col_1: "", col_2: "", col_3: "", col_4: "", col_5: "" },
        { col_1: "", col_2: "", col_3: "", col_4: "", col_5: "" },
        { col_1: "", col_2: "", col_3: "", col_4: "", col_5: "" },
        { col_1: "", col_2: "", col_3: "", col_4: "", col_5: "" },
        { col_1: "", col_2: "", col_3: "", col_4: "", col_5: "" },
        { col_1: "", col_2: "", col_3: "", col_4: "", col_5: "" },
        { col_1: "", col_2: "", col_3: "", col_4: "", col_5: "" },
        { col_1: "", col_2: "", col_3: "", col_4: "", col_5: "" },
        { col_1: "", col_2: "", col_3: "", col_4: "", col_5: "" },
        { col_1: "", col_2: "", col_3: "", col_4: "", col_5: "" },
    ]);
    const [headings, setHeadings] = useState(["A", "B", "C", "D", "E"]);
    // console.log(spreadsheetData);

    //Handle table data change
    const handleColChange = (event, index, col) => {
        const list = [...spreadsheetData];
        list[index][col] = event.target.value;
        setSpreadsheetData(list);
    };

    //Handle add Row
    const handleAddNewRow = () => {
        const list = [...spreadsheetData];
        const columns = Object.keys(list[0]);
        const newRow = {};
        columns.forEach((column) => {
            newRow[column] = "";
        });
        list.push(newRow);
        setSpreadsheetData(list);
    };

    //Handle add Colum
    const handleAddNewColumn = () => {
        const list = [...spreadsheetData];
        const keys = Object.keys(list[0]);
        const lastItem = +keys[keys.length - 1].split("_")[1];
        list.forEach((row) => (row[`col_${lastItem + 1}`] = ""));
        setSpreadsheetData(list);

        //updating heading
        let char = headings[headings.length - 1];
        char = String.fromCharCode(char.charCodeAt(0) + 1);
        setHeadings([...headings, char]);
    };

    //Handle download CSV
    const handleDownloadCSV = () => {
        const csvRows = [];
        // const headers = Object.keys(spreadsheetData[0]);
        // csvRows.push(headers.join(","));
        spreadsheetData.forEach((data) => {
            const values = Object.values(data).join(",");
            csvRows.push(values);
            // console.log(values);
        });
        const csvData = csvRows.join("\n");
        downloadCSVFile(csvData);
    };

    //Generating CSV file from string
    const downloadCSVFile = (csvData) => {
        const element = document.createElement("a");
        const csvFile = new Blob([csvData], {
            type: "text/csv",
        });
        element.href = URL.createObjectURL(csvFile);
        element.download = "my-file.csv";
        element.click();
    };

    return (
        <section id="simplified-spreadsheet">
            <div className="actions">
                <button onClick={handleAddNewRow}>Add New Row</button>
                <button onClick={handleAddNewColumn}>Add New Column</button>
                <button onClick={handleDownloadCSV}>Download CSV</button>
            </div>
            <div className="spreadsheet-container">
                <table className="editable-table">
                    <thead>
                        <tr>
                            <th></th>
                            {headings.map((heading, hk) => (
                                <th key={hk}>{heading}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {spreadsheetData.map((tr, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                {Object.keys(tr).map((col) => (
                                    <td key={col}>
                                        <input
                                            onChange={(event) =>
                                                handleColChange(event, index, col)
                                            }
                                            type="text"
                                        />
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default EditableTable;
