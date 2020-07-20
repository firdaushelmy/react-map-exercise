import React from 'react';
import createEntry from './createEntry'
import emojipedia from './emojipedia';

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      {emojipedia.map(createEntry)}
    </div>
  );
}

export default App;
