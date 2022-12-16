import React, {PureComponent} from "react";
import { render } from "react-dom";
import EmojiResultsRow from './EmojiResultsRow.jsx'
import Clipboard from "clipboard";




export default class EmojiResults extends PureComponent {

componentDidMount(){
    this.clipboard = new Clipboard('.copy-it')
}

componentWillUnmount(){
    this.clipboard.destroy();
}

render(){
    const {emojiData} = this.props;
        return (
         <div className="emoji-results">
            {
                emojiData.map((emoji) => (
                    <EmojiResultsRow
                        key={emoji.title}
                        symbol={emoji.symbol}
                        title={emoji.title}
                    />
                ))}
         </div>
    )
    }
}
