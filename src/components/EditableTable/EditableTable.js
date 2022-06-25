import React from "react";
import "./EditableTable.css"

const EditableTable = () => {
    return (
        <section id="simplified-spreadsheet">
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
                    <tr>
                        <th>1</th>
                        <td>Book Name</td>
                        <td>Author</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Category</td>
                    </tr>
                    <tr>
                        <th>2</th>
                        <td>Bangla</td>
                        <td>Eity</td>
                        <td>500</td>
                        <td>5</td>
                        <td>Board book</td>
                    </tr>
                    <tr>
                        <th>3</th>
                        <td>English</td>
                        <td>Touhid</td>
                        <td>200</td>
                        <td>2</td>
                        <td>Board Book</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
};

export default EditableTable;
