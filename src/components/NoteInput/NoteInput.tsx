import { Grid, TextField, Button } from "@mui/material";
import * as S from "./NoteInput.components";

import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import { useAppDispatch } from "../../store";
import { addNote } from "../../store/features/notesSlice";
import { v4 } from "uuid";

export function NoteInput() {
  const dispatch = useAppDispatch();
  const [text, setText] = useState("");

  const add = () => {
    const note = {
      id: v4(),
      date: Date(),
      text,
    };
    dispatch(addNote(note));
    setText("");
  };

  return (
    <Grid container gap={1} alignItems="center">
      <Grid>
        <TextField
          id="notes-input"
          label="Введите текст заметки"
          value={text}
          onChange={({ target }) => setText(target.value)}
          multiline
        />
      </Grid>
      <Grid>
        <Button
          onClick={add}
          variant="contained"
          size="large"
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </Grid>
    </Grid>
  );
}
