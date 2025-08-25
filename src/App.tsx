import "./App.css";
import { AppProvider } from "./components/AppProvider";
import { Container, Grid } from "@mui/material";
import { NoteInput } from "./components/NoteInput/NoteInput";
import { NotesList } from "./components/NotesList/NotesList";

function App() {
  return (
    <AppProvider>
      <Container>
        <Grid container direction="column" gap={2}>
          <NotesList />
          <NoteInput />
        </Grid>
      </Container>
    </AppProvider>
  );
}

export default App;
