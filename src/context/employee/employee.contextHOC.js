import React from "react"
import { LiveEmployeeContext } from './employee.context.js'


export default function WithLiveEmployeeContext(Component) {
  return function contextComponent(props) {
    return (
      <LiveEmployeeContext.Consumer>
        {(employees) => <Component {...props} employees={employees} />}
      </LiveEmployeeContext.Consumer>
    )
  }
}
