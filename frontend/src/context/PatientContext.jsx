import React, { createContext, useState } from "react";

export const PatientContext = createContext();

export function PatientProvider({ children }) {
  const [patientData, setPatientData] = useState(null);

  return (
    <PatientContext.Provider value={{ patientData, setPatientData }}>
      {children}
    </PatientContext.Provider>
  );
}
