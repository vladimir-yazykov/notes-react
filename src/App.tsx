import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { AppProvider } from "./components/AppProvider";
import { Container } from "@mui/material";
import { NoteInput } from "./components/NoteInput/NoteInput";

function App() {
  return (
    <AppProvider>
      <Container>
        <NoteInput />
      </Container>
    </AppProvider>
  );
}

export default App;
