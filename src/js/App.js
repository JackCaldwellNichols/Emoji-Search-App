import React, { PureComponent } from 'react'
import Header from '../Dashboard/Header/Header.jsx'
import Searchbar from '../Dashboard/Searchbar/Searchbar.jsx'
import Filter from '../Dashboard/Emojis/Filter.js'
import EmojiResults from '../Dashboard/Emojis/EmojiResults.jsx'

import '/workspace/react-hello/src/Dashboard/Header/Header.css'

export default class App extends PureComponent {
  state = {
    filteredEmojis: Filter('', 20)
  };

  handleChange = (event) => {
    this.setState({
      filteredEmojis: Filter(event.target.value, 15)
    })
  }

  render(){
    return (
      <div>
          <Header />
          <Searchbar handleChange={this.handleChange}/>
          <EmojiResults emojiData={this.state.filteredEmojis}/>
      </div>
    )
  }
}
