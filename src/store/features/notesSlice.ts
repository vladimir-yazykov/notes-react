import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { Note } from "../../model/note";

const notesAdapter = createEntityAdapter({
  selectId: (note: Note) => note.id,
  sortComparer: (a, b) => a.id.localeCompare(b.id),
});

const notes = createSlice({
  name: "notes",
  initialState: notesAdapter.getInitialState(),
  reducers: {
    addNote: notesAdapter.addOne,
    removeNote: notesAdapter.removeOne,
    updateNote: notesAdapter.updateOne,
  },
});

export const { addNote, removeNote, updateNote } = notes.actions;

export default notes.reducer;
