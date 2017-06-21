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
  onClick(e){
    e.preventDefault();
    this.setState({showReply: !this.state.showReply})
  }
  render() {
    return (
      <div>
        <li className="list-group-item">
        <form  method="post">
        <input className="overflow ellipsis input_field" type="text" name="content" size="100" defaultValue={this.props.value}/>


         <a onClick={this.onClick.bind(this)} href='#'><span id="edit_pen">✏️</span></a>
        {this.state.showReply && < ListItemEdit
              value={this.props.value}
              itemID={this.props.itemID}
              onClick0={this.props.onClick0}
              onClick1={this.props.onClick1}
              onClick2={this.props.onClick2} />}


        </form>
    </li>

      </div>
    )
  }
}

ListItem.propTypes ={
  value: PropTypes.string.isRequired,
  itemId: PropTypes.string,
  onClick0: PropTypes.func,
  onClick1: PropTypes.func,
  onClick2: PropTypes.func
}


export default ListItem;