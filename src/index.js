import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import shiren2Widths from './json/shiren2.json';
import shiren4Widths from './json/shiren4.json';

class Preview extends React.Component {
  renderPreview() {
    let html = [];

    // Shiren 4+ (PSP)
    if (this.props.game === 'shiren4') {
      for (const char of this.props.text) {
        if (char === '\n') {
          html.push(`<br/>`);
          // Lines after the first have 4 spaces of indentation
          for (let i = 0; i < 4; i++) {
            html.push(`<img class="glyph" src="./font/shiren4/32.png" />`);
          }
        } else {
          html.push(`<img class="glyph" src="./font/shiren4/${char.charCodeAt(0)}.png" />`);
        }
      }
    }

    return html.join('\n');
  }

  render() {
    if (this.props.game === 'shiren4') {
      return(
        <div>
          <p>Preview:</p>
          <div className="shiren4Preview" dangerouslySetInnerHTML={{__html: this.renderPreview()}}></div>
        </div>
      );
    } else {
      return null;
    }
  }
}

class VWFCalc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: "",
      textArea: "",
      charCount: 0,
      lookupObj: {},
      widths: []
    }
  }

  handlePresetClick(game) {
    let lookupObj = {};
    switch(game) {
      case 'shiren2':
        lookupObj = shiren2Widths;
        break;
      case 'shiren4':
        lookupObj = shiren4Widths;
        break;
      default:
        // empty object
    }
    this.setState({
      game: game,
      lookupObj: lookupObj
    });
  }

  handleFileUpload(event) {
    const reader = new FileReader();
    reader.readAsText(event.target.files[0], "UTF-8");
    reader.onload = e => {
      try {
        this.setState({
          lookupObj: JSON.parse(e.target.result)
        });
      } catch(e) {
        alert("Error parsing widths file.\n\nIs it in JSON format?");
      }
    }
    this.setState({
      game: ""
    });
  }

  handleTextAreaChange(event) {

    function calcLineWidth(lookupObj, line) {
      let width = 0;
      for (const char of line) {
        width += lookupObj[char];
      }
      return width;
    }
    // recalculate widths
    let lines = event.target.value.split('\n');
    let widths = [];

    for (const line of lines) {
      widths.push( calcLineWidth(this.state.lookupObj, line) );
    }
    this.setState({
      textArea: event.target.value,
      charCount: event.target.value.length,
      widths: widths
    });
  }

  render() {
    const game = this.state.game;
    const text = this.state.textArea;
    const charCount = this.state.charCount;
    const widths = this.state.widths.join('\n');

    return (
      <div>
        <h4>- Variable Width Font Calculator (v1.0) -</h4>
        <span>Preset: </span>
          <button onClick={() => this.handlePresetClick("shiren2")}>Shiren 2</button>
          <button onClick={() => this.handlePresetClick("shiren4")}>Shiren 4</button>
          <br/>
        <span>Custom: </span>
          <input type="file" onChange={(e) => this.handleFileUpload(e)}></input>
          <br/>
          <br/>
        <textarea cols="56" rows="10" onChange={(e) => this.handleTextAreaChange(e)}></textarea>
        <br/>
        <Preview text={text} game={game}/>
        <p>Result (<span>{charCount}</span> chars):</p>
        <pre>{widths}</pre>
      </div>
    );
  }
}

ReactDOM.render(
  <VWFCalc />,
  document.getElementById('root')
);
