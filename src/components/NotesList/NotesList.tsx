import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { useAppSelector } from "../../store";
import { selectNotes } from "../../store/features/notesSlice";
import * as C from "./NotesList.components";
import { NoteCard } from "../NoteCard/NoteCard";

export function NotesList() {
  const data = useAppSelector(selectNotes);
  return (
    <Grid container direction="column" gap={2}>
      {data.map((note) => (
        <Grid key={note.id}>
          <NoteCard {...note} />
        </Grid>
      ))}
    </Grid>
  );
}
