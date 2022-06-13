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
          main: "#1E1E1E",
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
                <Route path="/noSkins" element={<AllChamps/>} />
                <Route path="/skins" element={<AllSkins/>} />            
                <Route path="/skins/females" element={<AllFemales/>} />         
                <Route path="/skins/males" element={<AllMales/>} />                       
                <Route path="/noSkins/females" element={<AllDefaultFemales/>} />                
                <Route path="/noSkins/males" element={<AllDefaultMales/>} />                
            </Routes>
        </BrowserRouter>
    </ThemeProvider>
</>
  );
}

export default App;
