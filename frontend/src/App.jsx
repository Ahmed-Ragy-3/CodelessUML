import { BrowserRouter, Routes, Route } from "react-router-dom";
import UMLDiagram from "./UMLDiagram.jsx";
import CodeViewer from "./CodeViewer.jsx";




function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={ <UMLDiagram /> } />
          <Route path ="/CodeViewer" element={<CodeViewer/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

