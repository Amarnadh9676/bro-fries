
import React, { useState, useEffect } from "react";
import { getEmps, deleteEmp } from "../services/EmpService";

function EmployeeList(){

    const [emp, setEmp] = useState([]);

    const loadEmp = () => {
        getEmps()
        .then(res => setEmp(res.data))
        .catch(error => console.error(error));
    };

    useEffect(() => {
        loadEmp();
    }, []);

    const handleDelete = (id) => {
        deleteEmp(id)
        .then(() => loadEmp());
    };

    return(
        <div>
            <h3>Employee List</h3>

            {emp.map(e => (
                <div key={e.id}>
                    {e.name} &nbsp;&nbsp;&nbsp;
                    {e.desg} &nbsp;&nbsp;&nbsp;
                    {e.salary} &nbsp;&nbsp;&nbsp;

                    <button onClick={() => handleDelete(e.id)}>
                        Delete
                    </button>
                </div>
            ))}

        </div>
    );
}

export default EmployeeList;