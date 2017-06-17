import React from 'react';

function ListItem(props) {

  return (
    <li className="list-group-item" onClick={props.onClick}>
      <p  className="overflow ellipsis">{props.value}</p>
    </li>
  );
}


export default ListItem;