import React from 'react';
import NoteList from './NoteList';




class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', listed: this.props.data};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  handleChange(event) {
  event.preventDefault();
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {


   event.preventDefault();


  this.listed.push(
            {
        "id":this.listed.length+1,
        "title": this.state.value,
        "content": ""

  });


  this.setState({value: ''});


  }

  render() {

    return (

    <div className="body">
     <form onSubmit={this.handleSubmit}>
      <div className="form-group">
    <label ></label>
    <textarea className="form-control" id="textarea" rows="3" type="text" value={this.state.value} onChange={this.handleChange}></textarea>
  </div>
       <div className="button">
        <input type="submit" value="Submit" onSubmit={this.handleSubmit} />
        </div>
      </form>

      <div>
        <NoteList

            onNoteClick={this.props.onNoteClick}
            listedContent={this.state.listed}/>
      </div>

      </div>

    );
  }
}

export default Form;