import React from 'react';
import Entry from './Entry';

function createEntry(emojiterm) {
  return (
    <Entry
      key={emojiterm.id}
      emoji={emojiterm.emoji}
      name={emojiterm.name}
      meaning={emojiterm.meaning}
    />
  )
}

export default createEntry;