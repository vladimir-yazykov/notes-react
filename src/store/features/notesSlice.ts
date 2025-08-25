import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import type { Note } from "../../model/note";

const notesAdapter = createEntityAdapter({
  selectId: (note: Note) => note.id,
  sortComparer: (a, b) => a.id.localeCompare(b.id),
});

const selectors = notesAdapter.getSelectors();

const notes = createSlice({
  name: "notes",
  initialState: notesAdapter.getInitialState(),
  reducers: {
    addNote: notesAdapter.addOne,
    removeNote: notesAdapter.removeOne,
    updateNote: notesAdapter.updateOne,
  },
  selectors: {
    selectNotes: selectors.selectAll,
  },
});

export const { selectNotes } = notes.selectors;

export const { addNote, removeNote, updateNote } = notes.actions;

export default notes.reducer;
