import React, { Component } from "react";
import ThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import baseTheme from "styles/ThemeConfig";

// components
import Home from "components/Home";

class App extends Component {
  componentDidMount() {}
  render() {
    return (
      <div>
        <CssBaseline />
        <ThemeProvider theme={baseTheme}>
          <Home />
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
