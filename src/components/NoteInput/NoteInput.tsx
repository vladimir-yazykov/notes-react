import { Grid, TextField } from "@mui/material";
import * as S from "./NoteInput.components";

import SendIcon from "@mui/icons-material/Send";

export function NoteInput() {
  return (
    <Grid container gap={1} alignItems="center">
      <Grid>
        <TextField id="notes-input" label="Введите текст заметки" multiline />
      </Grid>
      <Grid>
        <SendIcon />
      </Grid>
    </Grid>
  );
}
