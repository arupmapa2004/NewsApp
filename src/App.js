import { News } from "./Components/News";
import { Navbar } from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const pageSize = 12;
  return (
     <>
     <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<News key="general" category="general" pageSize={pageSize}/>}/>
        <Route exact path="/business" element={<News key="business" category="business" pageSize={pageSize}/>}/>
        <Route exact path="/entertainment" element={<News key="entertainment" category="entertainment" pageSize={pageSize}/>}/>
        <Route exact path="/health" element={<News key="health" category="health" pageSize={pageSize}/>}/>
        <Route exact path="/science" element={<News key="science" category="science" pageSize={pageSize}/>}/>
        <Route exact path="/sports" element={<News key="sports" category="sports" pageSize={pageSize}/>}/>
        <Route exact path="/technology" element={<News key="technology" category="technology" pageSize={pageSize}/>}/>
      </Routes>
     </BrowserRouter>
     </>
  );
}

export default App;
