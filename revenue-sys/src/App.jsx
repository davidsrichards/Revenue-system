import Component from "./Components/Component"
import ReportContextProvider from "./Components/Context/ReportContext/ReportContextProvider"

function App() {

  return (
 <div>
  <ReportContextProvider>
  <Component/>
  </ReportContextProvider>
 
 </div>
  )
}

export default App
