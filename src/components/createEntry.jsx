import React from 'react';
import Entry from './Entry';

const createEntry = emojiterm =>
  (
    <Entry
      key={emojiterm.id}
      emoji={emojiterm.emoji}
      name={emojiterm.name}
      meaning={emojiterm.meaning}
    />
  )

export default createEntry;