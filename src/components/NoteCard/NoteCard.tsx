import { Card, CardContent, Typography } from "@mui/material";
import * as C from "./NoteCard.components";
import type { Note } from "../../model/note";
import moment from "moment";
import { useAppDispatch } from "../../store";
import { removeNote } from "../../store/features/notesSlice";

export function NoteCard(props: Note) {
  const dispatch = useAppDispatch();
  const { text, id } = props;

  const momentDate = moment(new Date(props.date));

  const date = momentDate.format("L");
  const time = momentDate.format("LT");

  const datetime = `${date} ${time}`;

  const remove = () => {
    dispatch(removeNote(id));
  };

  return (
    <Card sx={{ minWidth: 275 }} onClick={remove}>
      <CardContent>
        <Typography gutterBottom sx={{ color: "text.secondary", fontSize: 14 }}>
          {datetime}
        </Typography>
        <Typography variant="body2">{text}</Typography>
      </CardContent>
    </Card>
  );
}
