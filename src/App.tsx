import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import { ClientContextProvider, createClient } from "react-fetching-library";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/route";
import { Theme } from "./theme";

const client = createClient({
  requestInterceptors: [],
  responseInterceptors: [],
});

function App() {
  return (
    <ClientContextProvider client={client}>
      <ThemeProvider theme={Theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </ClientContextProvider>
  );
}

export default App;
