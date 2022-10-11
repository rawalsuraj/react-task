import React, { useState } from "react"

const LiveEmployeeContext = React.createContext()

const EmployeeContextProvider = (props) => {
  const InitialValues = [];

  const [employees, setEmployees] = useState(InitialValues)

  return (
    <LiveEmployeeContext.Provider
      value={{
        employees,
        setEmployees
      }}
    >
      {props.children}
    </LiveEmployeeContext.Provider>
  )
}

export { EmployeeContextProvider, LiveEmployeeContext }
