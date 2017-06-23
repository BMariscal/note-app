import React from 'react';
import ListItemEdit from './ListItemEdit'
import PropTypes from 'prop-types';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showReply: false
    }
  }
  onClickPen(e){
    e.preventDefault();
    this.setState({showReply: !this.state.showReply})
  }
  handleClick =() =>{
      this.props.onNoteClick(this.props.itemID)

  };
  render() {
    return (
      <div >
        <li className="list-group-item">

        <form  method="post">
        <input className="overflow ellipsis input_field" type="text" name="content" size="100" defaultValue={this.props.value}/>


         <a onClick={this.onClickPen.bind(this)} href='#'><span id="edit_pen">✏️</span></a>
        {this.state.showReply && < ListItemEdit
              value={this.props.value}
              itemID={this.props.itemID}
              onClick0={this.props.onClick0}
              onClick1={this.props.onClick1}/>}


        </form>


      <button id="details_button" type="button"  name="id" onClick={this.handleClick} itemID={this.props.itemID} value={this.props.itemID} >Details</button>


    </li>


      </div>
    )
  }
}

ListItem.propTypes ={
  value: PropTypes.array.isRequired,
  itemId: PropTypes.string,
  onClick0: PropTypes.func,
  onClick1: PropTypes.func,
  onClick2: PropTypes.func
}


export default ListItem;