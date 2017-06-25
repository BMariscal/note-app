import React, {Component} from 'react';





class Note extends Component{

  render(){

    return (

      <div className="Note">
        <form className="contest-description">

          <textarea className="form-control no-border" id="textarea" rows="3" type="text" value={this.props.note} ></textarea>
        </form>
        <div className="home-link link"
          onClick={this.props.noteListClick}>
          Note List
        </div>

      </div>


    );



  }






}



export default Note;