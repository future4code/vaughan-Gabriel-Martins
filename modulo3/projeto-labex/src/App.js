import './App.css';
import { ThemeProvider} from 'styled-components';

import HomePage from './pages/HomePage/HomePage';
import ListTripsPage from './pages/ListTripsPage/ListTripsPage';
import { theme , GlobalStyles } from './Theme';
import ApplicationFormPage from './pages/ApplicationFormPage/ApplicationFormPage';




function App() {
  return (
    <ThemeProvider  theme={theme}>
      <GlobalStyles/>
        {/* <HomePage/> */}
        {/* <ListTripsPage/> */}
        <ApplicationFormPage/>
    </ThemeProvider>
  );
}

export default App;
