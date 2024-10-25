import { useState } from "react";
import ReportContext from "./ReportContext";

const ReportContextProvider = ({children}) =>{
    const [report, setReport] = useState(null);

    return <>
    <ReportContext.Provider value={{report, setReport}}>
      {children}
    </ReportContext.Provider>
    </>

}

export default ReportContextProvider