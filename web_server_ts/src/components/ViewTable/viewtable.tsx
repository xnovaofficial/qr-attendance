import React, { useState } from 'react';
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid

const ViewTable = () => {
    const [colDefs] = useState([
        { field: "Username" },
        { field: "Phoneno" },
        { field: "Attendance" },
        { field: "Userid" }
    ]);

    const [rowData] = useState([
        { Username: "John Doe", Phoneno: "1234567890", Attendance: "yes", Userid: "1" },
        { Username: "Jane Doe", Phoneno: "0987654321", Attendance: "no", Userid: "2" },
        { Username: "Sam Smith", Phoneno: "1231231234", Attendance: "yes", Userid: "3" },
    ]);

    return (
        <div
            className="ag-theme-quartz" // applying the grid theme
            style={{ height: 200,width:700,  overflowX:"auto" }} // the grid will fill the size of the parent container
        >
            <AgGridReact
                rowData={rowData}
                columnDefs={colDefs}
            />
        </div>
    );
};

export default ViewTable;
