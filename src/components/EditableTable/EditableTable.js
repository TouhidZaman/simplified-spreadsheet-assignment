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
    console.log(spreadsheetData);

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

    return (
        <section id="simplified-spreadsheet">
            <div className="actions">
                <button onClick={handleAddNewRow}>Add New Row</button>
                <button onClick={handleAddNewColumn}>Add New column</button>
                <button onClick={handleAddNewColumn}>Download CSV</button>
            </div>
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
        </section>
    );
};

export default EditableTable;
