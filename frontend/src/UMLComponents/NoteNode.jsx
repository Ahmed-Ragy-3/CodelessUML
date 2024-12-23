import React from 'react';
import Note from './Components/Note';

const NoteNode = ({ data }) => {
  return (
    <div style={{ padding: 10}}>
      <Note />
    </div>
  );
};

export default NoteNode;
