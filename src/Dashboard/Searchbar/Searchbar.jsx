import React, {PureComponent} from 'react'
import '/workspace/react-hello/src/Dashboard/Searchbar/Search.css'

export default class Searchbar extends PureComponent {

    handleText = (event) =>{
        this.props.handleChange(event)
    }
    render(){

 
  return (
    <div className='search-bar'>
        <div>
            <input className='input-text' placeholder='Search for an emoji...' onChange={this.handleText}/>
        </div>



    </div>
  )
}
}

