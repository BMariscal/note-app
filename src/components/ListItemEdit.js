import React from 'react';
import Buttons from './ListItemButtons'

class ListItemEdit extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
    return(
      <div><Buttons
                value={this.props.value}
              itemID={this.props.itemID}
              onClick0={this.props.onClick0}
              onClick1={this.props.onClick1}
              onClick2={this.props.onClick2}/></div>
    )
  }
}


export default ListItemEdit;