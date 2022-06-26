import React, { useState } from "react";
import "./EditableTable.css";

const EditableTable = () => {
    const [spreadsheetData, setSpreadsheetData] = useState([
        { col1: "", col2: "", col3: "", col4: "", col5: "" },
        { col1: "", col2: "", col3: "", col4: "", col5: "" },
        { col1: "", col2: "", col3: "", col4: "", col5: "" },
    ]);
    console.log(spreadsheetData);

    //Handle table data change
    const handleColChange = (event, index, key) => {
        const list = [...spreadsheetData];
        list[index][key] = event.target.value;
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

    return (
        <section id="simplified-spreadsheet">
            <button onClick={handleAddNewRow}>Add New Row</button>
            <table className="editable-table">
                <thead>
                    <tr>
                        <th></th>
                        <th>A</th>
                        <th>B</th>
                        <th>C</th>
                        <th>D</th>
                        <th>E</th>
                    </tr>
                </thead>
                <tbody>
                    {spreadsheetData.map((tr, index) => (
                        <tr key={index}>
                            <th>{index + 1}</th>
                            <td>
                                <input
                                    onChange={(event) =>
                                        handleColChange(event, index, "col1")
                                    }
                                    type="text"
                                />
                            </td>
                            <td>
                                <input
                                    onChange={(event) =>
                                        handleColChange(event, index, "col2")
                                    }
                                    type="text"
                                />
                            </td>
                            <td>
                                <input
                                    onChange={(event) =>
                                        handleColChange(event, index, "col3")
                                    }
                                    type="text"
                                />
                            </td>
                            <td>
                                <input
                                    onChange={(event) =>
                                        handleColChange(event, index, "col4")
                                    }
                                    type="text"
                                />
                            </td>
                            <td>
                                <input
                                    onChange={(event) =>
                                        handleColChange(event, index, "col5")
                                    }
                                    type="text"
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
};

export default EditableTable;
