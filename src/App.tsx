import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import { ClientContextProvider } from "react-fetching-library";
import { BrowserRouter } from "react-router-dom";
import { Client } from './helpers/Client';
import { Router } from "./routes/route";
import { Theme } from "./theme";

function App() {
  return (
    <ClientContextProvider client={Client}>
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </ClientContextProvider>
  );
}

export default App;
