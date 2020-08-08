import React from "react";

const StudentContext = React.createContext({
  student: {},
  setStudent: () => {},
});

export default StudentContext;
