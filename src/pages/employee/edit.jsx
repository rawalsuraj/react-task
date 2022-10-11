import React, { useEffect, useState } from "react";
import EmployeeForm from "../../components/employee/EmployeeForm";
import { useParams } from 'react-router-dom';
import { MasterAPICall } from "../../api/master.api";

const EditEmployee = () => {
    const [item, setItem] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            getEmployee();
        }
    }, [id]);

    const getEmployee = () => {
      const url = "/employees/"+id;
      const method = 'get';
        MasterAPICall(url, method)
                .then((data) => {
                    const employee = data.data;
                    setItem(employee)
                })
                .catch((error) => {
                    console.log(error);
                });
    }

  return (
    <>
    {
        item && <EmployeeForm
        initialValues={item}
        isEdit={true}
      />
    }
      
    </>
  );
};

export default EditEmployee;
