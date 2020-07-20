import React from 'react'
import Entry from './Entry'
import emojipedia from './emojipedia'

function createEntry() {
  return (
    <Entry
      key={emojipedia.id}
      emoji={emojipedia.emoji}
      name={emojipedia.name}
      meaning={emojipedia.meaning}
    />
  )
}

export default createEntry;