import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import * as C from "./NoteCard.components";
import type { Note } from "../../model/note";
import moment from "moment";
import { useAppDispatch } from "../../store";
import { removeNote } from "../../store/features/notesSlice";
import CloseIcon from "@mui/icons-material/Close";
import { parseLines } from "./parseText";
import { Fragment } from "react/jsx-runtime";

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

  const lines = parseLines(text);

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings" onClick={remove}>
            <CloseIcon />
          </IconButton>
        }
        subheader={datetime}
      />
      <CardContent>
        <Typography variant="body2">
          {lines.map((item) => (
            <Fragment key={item.index}>
              {item.index !== 0 && <br />}
              {item.text.map((token, index) => (
                <Fragment key={index}>
                  {token.type === "text" && token.value}
                  {token.type === "link" && token.value && (
                    <a href={token.value} target="_blank">
                      {token.value}
                    </a>
                  )}
                </Fragment>
              ))}
            </Fragment>
          ))}
        </Typography>
      </CardContent>
    </Card>
  );
}
