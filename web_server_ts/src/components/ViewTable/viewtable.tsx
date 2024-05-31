import  { useEffect, useState } from 'react';
import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css"; // Optional Theme applied to the grid
import axios from 'axios';

const ViewTable = () => {
    const [colDefs]:any = useState([
        { field: "username" },
        { field: "attendanceStatus" },
        { field: "userId" }
    ]);
    const [rowData, setRowData] = useState([]);
    // 

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8989/api/v1/attendence/get-present`,{
                    params:{
                        attendanceStatus:true
                    }
                }); // Adjust the URL as necessary
                if (response.data.result) {
                    setRowData(response.data.result.map((user: { username: any; attendanceStatus: any; userId: any; }) => ({
                        username: user.username,
                        attendanceStatus: user.attendanceStatus ? 'Yes' : 'No',
                        userId: user.userId
                    })));
                }
            } catch (error) {
                console.error('Error fetching user details:', error);
            }
        };

        fetchUserDetails();
    }, []);






    return (
        <>

        <h2 style={{marginTop:"5rem",color:"whitesmoke"}}>Attendance Table</h2>
        
           <div
            className="ag-theme-quartz" // applying the grid theme
            style={{ height:"100vh",width:"100vw",  overflowX:"auto" }} // the grid will fill the size of the parent container
        >   

            <AgGridReact
                rowData={rowData}
                columnDefs={colDefs}
            />
        </div>
        </>
     
    );
};

export default ViewTable;
