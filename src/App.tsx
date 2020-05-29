import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import { ClientContextProvider, createClient, RequestInterceptor } from "react-fetching-library";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./routes/route";
import { Theme } from "./theme";

export const requestHostInterceptor: (host: string) => RequestInterceptor = (
  host
) => () => async (action) => {
  return {
    ...action,
    endpoint: `${host}${action.endpoint}`,
  };
};

const host = process.env.REACT_APP_API || "https://reqres.in/api";

const client = createClient({
  requestInterceptors: [requestHostInterceptor(host)],
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
