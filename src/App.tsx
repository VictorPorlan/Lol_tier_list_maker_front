import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import MainPage from "./pages/main";
import AllChamps from "./pages/allChamps";
import AllSkins from "./pages/allSkins";
import AllFemales from "./pages/allFemales";
import AllDefaultFemales from "./pages/allDefaultFemales";
import AllDefaultMales from "./pages/allDefaultMales";
import AllMales from "./pages/allMales";


const darkTheme = createTheme({
  palette: {
      mode: "dark",
      primary: {
          main: "#ba87fa",
      },
      secondary: {
          main: "#873600",
      },
  },
});

function App() {

  return (
    <>
    <ThemeProvider theme={darkTheme}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>} />
                <Route path="/default" element={<AllChamps/>} />
                <Route path="/skins" element={<AllSkins/>} />            
                <Route path="/skins/females" element={<AllFemales/>} />         
                <Route path="/skins/males" element={<AllMales/>} />                       
                <Route path="/default/females" element={<AllDefaultFemales/>} />                
                <Route path="/default/males" element={<AllDefaultMales/>} />                
            </Routes>
        </BrowserRouter>
    </ThemeProvider>
</>
  );
}

export default App;
