import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/open-sans";
import "@fontsource/open-sans/500.css";
// import "@fontsource/open-sans/900-italic.css"
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import MainPage from "./pages/MainPage";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div style={{display:'inline-block', height:"100%", width:"100%"}}>
      <CssBaseline />
      <Layout>
      <MainPage />
      </Layout>
    </div>
  );
}

export default App;
