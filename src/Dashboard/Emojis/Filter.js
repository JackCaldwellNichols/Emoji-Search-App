import emojiList from './emojiList.json'

import React from 'react'

function Filter(searchText, maxResults) {
  return (
    
    emojiList.filter((emoji) => {
        if(emoji.title.toLowerCase().includes(searchText.toLowerCase())){
            return true
        }
        if(emoji.keywords.toLowerCase().includes(searchText.toLowerCase())){
            return true
        }
        return false
    }).slice(0, maxResults)
  )
}

export default Filter
