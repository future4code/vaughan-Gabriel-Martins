import "./App.css";
import { ThemeProvider } from "styled-components";

import RoutePage from "./pages/Routes/RoutePage";

import { theme, GlobalStyles } from "./Theme";
import ApplicationFormPage from "./pages/ApplicationFormPage/ApplicationFormPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RoutePage />
    </ThemeProvider>
  );
}

export default App;
