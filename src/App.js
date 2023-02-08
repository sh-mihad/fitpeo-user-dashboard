import { ColorModeContext,useMode } from "./theme";
import { CssBaseline,ThemeProvider } from "@mui/material";
import TopMenu from "./Global/TopMenu"


function App() {
  const [theme,colorMode] = useMode()
  return (
    <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline/>
    <div className="app">
     <main className="content">
      <TopMenu></TopMenu>
     </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
