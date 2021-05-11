import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./app.css";
import Footer from "./components/Footer";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


function App() {
  
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'dark',
        },
      }),
    [prefersDarkMode],
  );
 
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
    <div className="divWrap">
    <NavTabs />
     <Route exact path="/" component={Home} />
     <Route exact path="/home" component={Home} />
     <Route exact path="/projects" component={Projects} />
     <Route exact path="/contact" component={Contact} />
    </div>
    <Footer />
    </Router>
    </ThemeProvider>
    
  );
}



export default App;

