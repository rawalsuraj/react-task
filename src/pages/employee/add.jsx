import React from "react";
import EmployeeForm from "../../components/employee/EmployeeForm";

const AddEmployee = () => {
  return (
    <>
      <EmployeeForm
        initialValues={{}}
        isEdit={false}
      />
    </>
  );
};

export default AddEmployee;
