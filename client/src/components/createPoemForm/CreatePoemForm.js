import React from 'react';
import Axios from 'axios'

export class CreatePoemForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: null, title: null };

    this.handleTextChange = this.handleTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  handleTextChange(event) {
    this.setState({text: event.target.value});
  }

  handleTitleChange(event) {
    this.setState({title: event.target.value});
  }

  handleSubmit() {
    Axios.post('http://localhost:3001/insert', {
      date: new Date().toISOString(),
      text: this.state.text,
      title: this.state.title,
      status: 1
    }).then((response) => {
      console.log(response);
    });
  }

  render() {
    return (
      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 50 }} onSubmit={this.handleSubmit}>
        <label for="poemTitle">Poem title:</label>
        <input id="poemTitle" value={this.state.title} onChange={this.handleTitleChange} />
        <label for="poemText">Poem text:</label>
        <textarea id="poemText" value={this.state.text} onChange={this.handleTextChange} style={{ width: 200, height: 200}}></textarea>
        <button type="submit">
          Send
        </button>
      </form>
    )
  }
}
