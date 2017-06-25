import React, {Component} from 'react';





class Note extends Component{

  render(){

    return (

      <div className="Note">


        {this.props.note}


      </div>


    )



  }






}



export default Note;